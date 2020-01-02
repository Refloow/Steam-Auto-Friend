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
const client = new SteamUser();
const community = new SteamCommunity();
const logOnOptions = {
	accountName: config.accountName,
	password: config.password,
	twoFactorCode: SteamTotp.generateAuthCode(config.shared_secret)
};

// APP START

client.logOn(logOnOptions);

client.on('loggedOn', () => {
	client.setPersona(SteamUser.Steam.EPersonaState.LookingToTrade,);
	client.gamesPlayed(config.CustomPlayingMessage);
	logger.correct(`| [Refloow| |: User is logged and script is ready to accept all friend requests.`);
});

// Script to accept all incoming friend requests welcome them with custom message sent in config and invite them to selected group.
client.on("friendRelationship", (SENDER, REL) => {
	if (REL === 2) {
		client.addFriend(SENDER);
	} else if (REL === 3) {
		if (config.INVITETOGROUPID) {
			client.inviteToGroup(SENDER, config.INVITETOGROUPID);
		}
		client.chatMessage(SENDER, config.WELCOME);
	}
});

client.on('friendRelationship', function (steamID, relationship) {
	if (relationship == 2) {
		logger.correct(`| [Steam] | NEW NOTIFICATION |: Steam ID: ${steamID.getSteamID64()} has added us!`);
		client.addFriend(steamID, (err, name) => {
			if (err) {
				logger.error(`| [Steam] | NEW FRIEND |: Error trying to add ${steamID.getSteamID64()}. Reason: ${err.toString()}`);
			} else if (name) {
				logger.correct(`| [Steam] | NEW FRIEND |: Succesfully added ${name} to friendlist.`);
			}
		});
	} else if (relationship == 0) {
		logger.fail(`| [Steam] | FRIEND | USER ID: ${steamID.getSteamID64()} has deleted us from their friendlist.`);
	}
});