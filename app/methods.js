
// Copyright notice:

/*--------------------------------------------------------------------------------------------- 
* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.

* Code origin: https://github.com/OSL-Works/Steam-Auto-Friend
* Developer name: Veljko Vuckovic
* Licensed under the MIT License. See LICENSE in the project root for license information.
* Published License: https://github.com/OSL-Works/Steam-Auto-Friend/master/LICENSE

* Contact information:
  Discord Support Server: https://discord.gg/D8WCtDD
  Main developer steam: https://steamcommunity.com/id/MajokingGames/ 
  Mail: refloowlibrarycontact@gmail.com

* Donations:
  Donate: https://ko-fi.com/refloow
 --------------------------------------------------------------------------------------------*/

 /* 

// legal advice: PERMISSIONS AND RIGHTS

* License does not prohibit modification, distribution, private/commercial use or sale of copies as long as the original LICENSE file
 and authors copyright notice are left as they are in the project files.
* Copyright notice could be included ones or multiple times within the file.
* Copyright notice should not be removed even within the larger works (Larger modifications applied).
* Original file tags cannot be removed without creators exclusive permission.
* Adding own tags in files is possible in case of modification - even in that case original tags must be kept.
* Year on the copyright notice breakdown:
* Generally, the “year of first publication of the work” refers to the year in which the work was first distributed to the public (first year mentioned)
* Any year after represents the year of added modifications.
* Copyright cannot expire so therefore you cannot remove copyright notice if its not updated to the latest year.
* Editing existing copyright notice(s) is also prohibited.

===================================================================================
Removing copyright notice & distributing, using or selling the software without
the original license and copyright notice is licence agreement breach and its considered criminal offense and piracy.
===================================================================================

*/

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

// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Auto-Friend*/

