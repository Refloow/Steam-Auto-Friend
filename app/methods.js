// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */


// We strongly recommend not editing stuff that is in this file.

 // Checking if all modules are correctly installed

try {
    // Checking if module colors is correctly installed
    colors = require('colors');
    // Checking if module moment is correctly installed
    moment = require('moment');
} catch (ex) {
    // If modules are not installed showing an clear error message to user.
    console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
    console.log(ex);
    process.exit(1);
}

// Importing files
const package = require('./../package.json');
const config = require('./Settings/config.js');

// Exporting method module
t = module.exports = {

    // Method for disabling update notifications
    DisableUpdateNotif: function() {
        return config.UpdateNotif == true;
    },

    // Method for disabling adding welcome message
    messagesEnabled: function() {
        return config.welcome_message_enable == true;
    },


    // Two login protocol
    AutoGenerateLoginCodes: function() {
        return config.Has2FactorAuth == true;
    },

    // Method for disabling inviting in selected group
    inviteEnabled: function() {
        return config.group_inviting == true;
    },

    // Method for disabling auto accepting for friend requests
    acceptFriends: function() {
        return config.auto_accept == true;
    },

    // Method for disabling accepting offline friend requests
    acceptFriendsOffline: function() {
        return config.auto_accept_offline == true;
    },

    // Method for checking level
    highEnoughLevel: function(level) {
        return level >= config.minimum_level;
    },

    // Method for config % name placeholder
    manageMessage: function(name) {
        var message = config.add_message;
        if(message.indexOf('%') > -1)
            return message.replace('%', name);
        return message;
    },

    // Method for disabling custom playing message
    DisableCustomMessage: function() {
        return config.EnableCustomPlayingMessage == true;
    },

    games: function() {
        if(config.game) {
            config.game.unshift(package.name)
            return config.game;
        }
        return package.name
    },

    // Method for checking updates
    check: function() {
        const request = require('request');
        var options = {
            url: 'https://raw.githubusercontent.com/Refloow/Steam-Auto-Friend/master/package.json',
            method: 'GET',
        };
        function look(error, JSONresponse, body) {
            var page = JSON.parse(body)
            const v = package.version;
            if(page.version != v)
                console.log(`| [GitHub] | VERSION |:  ${'New update available for '+package.name+ ' v'+page.version.green+'! You\'re currently only running version '+v.yellow+''}\n${`| [GitHub] | VERSION |: Go to https://github.com/Refloow/Steam-Auto-Friend to update now!`}\n\n`)
            else 
                console.log(`| [GitHub] | VERSION |: You're running the latest version of steam-auto-friend (v${v.green})\n\n`)
        }
        request(options, look)
    }
}


// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */
