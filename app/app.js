// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowcontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */


// Checking if all modules are correctly installed

try {
	SteamUser = require('steam-user');
	SteamTotp = require('steam-totp');
	SteamCommunity = require('steamcommunity');
	TradeOfferManager = require('steam-tradeoffer-manager');
} catch (ex) {
	console.log(ex);
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	process.exit(1);
}

const config = require('./Settings/config.js');
const steam = require('./steam');
const logger = require('./logger');
const method = require('./methods');
const client = new SteamUser();
const community = new SteamCommunity();
const logOnOptions = {
	accountName: config.accountName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
};

// Checking for correct version (updates) for bot on github

method.check();

// APP START

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	client.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade,);
	client.gamesPlayed(config.CustomPlayingMessage);
	logger.correct(`| [Refloow] | LOGIN |: User is logged and script is ready to accept incoming friend requests.`);
    if(method.acceptFriendsOffline()) {
        logger.correct(`| [Refloow] | OFFLINE |: Checking for pending requests that are sent offline...`)
    }
    else
        logger.correct('| [Refloow] | OFFLINE |: Check for offline requests is disabled. Skiping....')
});

// Checking and accepting offline pending friend requests.
        // SOON ADDING CHECKING LEVEL FOR OFFLINE REQUESTS //

client.on("friendsList", function() {
    // Check if accepting offline users is turned on.
    if(method.acceptFriendsOffline()) {
    for (var steamid64 in client.myFriends) {
        // This is the relation we have with the user.
        var relationship = client.myFriends[steamid64];
        // Check if they send us a friend request
        if (relationship == SteamUser.Steam.EFriendRelationship.RequestRecipient) {
            // Add them back.
            client.addFriend(steamid64);
            logger.info(`| [Steam] | Offline Request |: Accepted offline friend request from: ${steamid64} `);

            // Check if sending mesages to people who added bot while he is offline
            if(method.messagesEnabledOffline()) {
                var chat = method.manageMessageOffline(name)
                            
                // Sending message.
                client.chatMessage(steamID, chat);
                logger.info(`| [Steam] | FRIEND |: I sent a welcome message to ${name.yellow}: who added us offline.`);
           }
        }
    }
    }
});

// Script to accept all incoming friend requests welcome them with custom message sent in config and invite them to selected group.

client.on('friendRelationship', (steamID, relationship) => {
    if(method.acceptFriends()) {
        if(relationship == 2) {
            logger.correct(`| [Steam] | NEW NOTIFICATION |: Steam ID: ${steamID.getSteamID64()} has added us!`);
            info = 'info';
            client.getPersonas([steamID], (personas) => {
                var persona = personas[steamID.getSteamID64()];
                var name = persona ? persona.player_name : (`['${steamID.getSteamID64()}']`);
                
                client.getSteamLevels([steamID], function(results) {
                    var level = results[steamID.getSteamID64()]

                    if(method.highEnoughLevel(level)) {

                        client.addFriend(steamID);
                        logger.info(`| [Steam] | FRIEND |: I'm now friends with ${name}, their level: ${level}`);
                        
                        if(method.messagesEnabled()) {
                            var chat = method.manageMessage(name)
                            
                            client.chatMessage(steamID, chat);
                            logger.info(`| [Steam] | FRIEND |: I sent a welcome message to ${name.yellow}: "${chat}"`);
                        }
                    }
                    else 
                        logger.info(`| [Steam] | FRIEND |: ${name.yellow} sent a friend request, not accepting user since his/her level is only ${level}`);
                });
            });
        } else if (relationship === 3) {
            if(method.inviteEnabled()) {
                  client.inviteToGroup(steamID, config.INVITETOGROUPID);
                   logger.info(`| [Steam] | GROUP |: Invited ${steamID} to the selected group !`);
        } else {
            logger.info('| [Steam] | GROUP |: User is already in group or group invites are disabled.');
        };
   }}
});


// Alert when someone remove us from friendlist.

client.on('friendRelationship', function (steamID, relationship) {
	if (relationship == 0) {
		logger.fail(`| [Steam] | FRIEND |: USER ID: ${steamID.getSteamID64()} has deleted us from their friendlist.`);
	}
});
