// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com 
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */


// Checking if all modules are correctly installed

try {
    // Checking if module steam-user is correctly installed
	SteamUser = require('steam-user');
    // Checking if module steam-totp is correctly installed
	SteamTotp = require('steam-totp');
    // Checking if module steamcommunity is correctly installed
	SteamCommunity = require('steamcommunity');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

// Importing files into project
const config = require('./Settings/config.js');
const logger = require('./logger');
const method = require('./methods');

// Steam Client Name
const refloow = new SteamUser();

// var name;

// Login option (auto generating 2fa codes)
const logOnOptions2FA = {
	accountName: config.accountName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
};

// Login option (login without 2fa codes)
const logOnOptionsNO2FA = {
    accountName: config.accountName,
    password: config.password,
};


// Checking for correct version (updates) for bot on github

if(method.DisableUpdateNotif()) {
    // Checking for new version
    method.check();
}

// ----------------------------- APP START --------------------------------


// LOGING ON

// If auto generate method is used use options for login auto
if(method.AutoGenerateLoginCodes())
    {
    refloow.logOn(logOnOptions2FA);
}
// If auto generate method is disabled use options for login manual
if(!method.AutoGenerateLoginCodes())
    {
    refloow.logOn(logOnOptionsNO2FA);
}

refloow.on('loggedOn', () => {
        refloow.getPersonas([refloow.steamID], (personas) => {
        logger.correct("| [Refloow] | LOGIN |: User #" + refloow.steamID + " is logged and script is ready to accept incoming friend requests.");
    });
    refloow.setPersona(1);
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


// Script to accept all incoming friend requests welcome them with custom message sent in config and invite them to selected group.


refloow.on('friendRelationship', (SENDER, REL) => {
    if(method.acceptFriends()) {
        if(REL == 2) {
            logger.correct(`| [Steam] | NEW NOTIFICATION |: Steam ID: ${SENDER.getSteamID64()} has added us!`);
            info = 'info';

            //refloow.getPersonas(SENDER, (personas) => {

                //var persona = personas[SENDER.getSteamID64()];
                //var name = persona ? persona.player_name : (`['${SENDER.getSteamID64()}']`);
                
                //refloow.getSteamLevels([SENDER], function(results) {
                //    var level = results[SENDER]

                    //Utils.getBadges(SENDER.getSteamID64(), (ERR, DATA, CURRENTLEVEL, XPNEEDED) => {

                    //if(method.highEnoughLevel(level)) {

                        refloow.addFriend(SENDER);
                        logger.info(`| [Steam] | FRIEND |: I'm now friends with ${SENDER.getSteamID64()},`);
                    //}
                    //else 
                        //logger.info(`| [Steam] | FRIEND |: ${personas[SENDER.steamID].player_name} sent a friend request, not accepting user since his/her level is only ${level}`);
              //  });
            //});
        } else if (REL === 3) {
            if(method.inviteEnabled()) {
                  refloow.inviteToGroup(SENDER, config.INVITETOGROUPID);
                   logger.info(`| [Steam] | GROUP |: Invited ${SENDER.getSteamID64()} to the selected group !`);
        } else {
            logger.info('| [Steam] | GROUP |: User is already in group or group invites are disabled.');
        };
   }}
});


// Alert when someone remove us from friendlist.

refloow.on('friendRelationship', function (SENDER, REL) {
    if (REL == 0) {
        logger.fail(`| [Steam] | FRIEND |: USER ID: ${SENDER.getSteamID64()} has deleted us from their friendlist.`);
    }
});


// Message uppon friend request accepting event

refloow.on('friendRelationship', function (SENDER, REL) {
    if (REL == 3) {
     //    refloow.getPersonas(SENDER, (personas) => {

                // var persona = personas[SENDER.getSteamID64()];
                // var name = persona ? persona.player_name : (`['${SENDER.getSteamID64()}']`);
            
            if(method.messagesEnabled()) {
             
                refloow.chatMessage(SENDER, config.add_message);
                logger.info(`| [Steam] | FRIEND |: I sent a welcome message to ${SENDER.getSteamID64()}: "${config.add_message}"`);              
            }
            else 
            logger.info(`| [Steam] | FRIEND |: Sending welcome message to user is disabled.`)
       // });
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
                
        if (relationship == SteamUser.EFriendRelationship.RequestRecipient) {
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
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */

