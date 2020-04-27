// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowcontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */


// Checking if all modules are correctly installed

try {
    // Checking if module steam-user is correctly installed
	SteamUser = require('steam-user');
    // Checking if module steam-totp is correctly installed
	SteamTotp = require('steam-totp');
    // Checking if module steamcommunity is correctly installed
	SteamCommunity = require('steamcommunity');
    // Checking if module steam-tradeoffer-manager is correctly installed
	TradeOfferManager = require('steam-tradeoffer-manager');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

// Importing files into project
const config = require('./Settings/config.js');
const steam = require('./steam');
const logger = require('./logger');
const method = require('./methods');

const refloow = new SteamUser();
const community = new SteamCommunity();
const logOnOptions = {
	accountName: config.accountName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
};

// Checking for correct version (updates) for bot on github

if(method.DisableUpdateNotif()) {
    // Checking for new version
    method.check();
}

// APP START

// Loging on
refloow.logOn(logOnOptions);

refloow.on('loggedOn', () => {
	refloow.setPersona(SteamUser.Steam.EPersonaState.Online);
    logger.correct(`| [Refloow] | LOGIN |: User is logged and script is ready to accept incoming friend requests.`);
    if(method.DisableCustomMessage()) {
        logger.correct(`| [Refloow] | ONLINE |: Setting Custom Playing Message.`)
        refloow.gamesPlayed(config.CustomPlayingMessage);
    } else logger.correct(`| [Refloow] | ONLINE |: Custom Playing Message is disabled.`)
    if(method.acceptFriendsOffline()) {
        logger.correct(`| [Refloow] | OFFLINE |: Checking for pending requests that are sent offline...`)
    }
    else
        logger.correct('| [Refloow] | OFFLINE |: Check for offline requests is disabled. Skiping....')
});


setTimeout(() => process.exit, 1000*60*60*4);
refloow.setOption('promptSteamGuardCode', false)

// Script to accept all incoming friend requests welcome them with custom message sent in config and invite them to selected group.

refloow.on('friendRelationship', (steamID, relationship) => {
    if(method.acceptFriends()) {
        if(relationship == 2) {
            logger.correct(`| [Steam] | NEW NOTIFICATION |: Steam ID: ${steamID.getSteamID64()} has added us!`);
            info = 'info';
            refloow.getPersonas([steamID], (personas) => {
                var persona = personas[steamID.getSteamID64()];
                var name = persona ? persona.player_name : (`['${steamID.getSteamID64()}']`);
                
                refloow.getSteamLevels([steamID], function(results) {
                    var level = results[steamID.getSteamID64()]

                    if(method.highEnoughLevel(level)) {

                        refloow.addFriend(steamID);
                        logger.info(`| [Steam] | FRIEND |: I'm now friends with ${name}, their level: ${level}`);
                    }
                    else 
                        logger.info(`| [Steam] | FRIEND |: ${name.yellow} sent a friend request, not accepting user since his/her level is only ${level}`);
                });
            });
        } else if (relationship === 3) {
            if(method.inviteEnabled()) {
                  refloow.inviteToGroup(steamID, config.INVITETOGROUPID);
                   logger.info(`| [Steam] | GROUP |: Invited ${steamID} to the selected group !`);
        } else {
            logger.info('| [Steam] | GROUP |: User is already in group or group invites are disabled.');
        };
   }}
});


// Alert when someone remove us from friendlist.

refloow.on('friendRelationship', function (steamID, relationship) {
    if (relationship == 0) {
        logger.fail(`| [Steam] | FRIEND |: USER ID: ${steamID.getSteamID64()} has deleted us from their friendlist.`);
    }
});

// Message uppon friend request accepting event

refloow.on('friendRelationship', function (steamID, relationship) {
    if (relationship == 3) {
         refloow.getPersonas([steamID], (personas) => {
                var persona = personas[steamID.getSteamID64()];
                var name = persona ? persona.player_name : (`['${steamID.getSteamID64()}']`);
            
            if(method.messagesEnabled()) {
            var chat = method.manageMessage(name)
             
                refloow.chatMessage(steamID, chat);
                logger.info(`| [Steam] | FRIEND |: I sent a welcome message to ${name.yellow}: "${chat}"`);              
            }
            else 
            logger.info(`| [Steam] | FRIEND |: Sending welcome message to user is disabled.`)
        });
    }
})

// Checking and accepting offline pending friend requests.
        // SOON ADDING CHECKING LEVEL FOR OFFLINE REQUESTS //
        // SOON ADDING SENDING MESSAGES AFTER RESPONDING TO OFFLINE REQUESTS //

refloow.on("friendsList", function(steamid64, relationship) {
    // Check if accepting offline users is turned on.
    if(method.acceptFriendsOffline()) {
    for (var steamid64 in refloow.myFriends) {
        // This is the relation we have with the user.
        var relationship = refloow.myFriends[steamid64];
        // Check if they send us a friend request
                
        if (relationship == SteamUser.Steam.EFriendRelationship.RequestRecipient) {
            // Add them back.
            refloow.addFriend(steamid64);
            // DEV Console
            logger.info(`| [Steam] | Offline Request |: Accepted offline friend request from: ${steamid64} `);
        }
      }
    }
});

// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowcontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */

