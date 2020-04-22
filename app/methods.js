
// We strongly recommend not editing stuff that is in this file.

const package = require('./../package.json');
const config = require('./Settings/config.js');
const colors = require('colors');
const moment = require('moment');

t = module.exports = {
    messagesEnabled: function() {
        return config.messages == true;
    },

    messagesEnabledOffline: function() {
        return config.messages_offline == true;
    },

    inviteEnabled: function() {
        return config.group_inviting == true;
    },

    acceptFriends: function() {
        return config.auto_accept == true;
    },

    acceptFriendsOffline: function() {
        return config.auto_accept_offline == true;
    },

    highEnoughLevel: function(level) {
        return level >= config.minimum_level;
    },

    manageMessage: function(name) {
        var message = config.add_message;
        if(message.indexOf('%') > -1)
            return message.replace('%', name);
        return message;
    },

    DisableCustomMessage: function() {
        return config.disable_custom_message == true;
    },

    log: function(info) {
        return `${package.name} | `.green + `${moment().format('LTS')} `+
        `${info == "info" ? info.green : ""+info == "trade" ? info.magenta : ""+info == "warn" ? info.yellow : ""}:`
    },

    games: function() {
        if(config.game) {
            config.game.unshift(package.name)
            return config.game;
        }
        return package.name
    },

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
