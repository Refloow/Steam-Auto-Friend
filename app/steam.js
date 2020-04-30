// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com 
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */

 // Checking if all modules are correctly installed

try {
    // Checking if module steam-user is correctly installed
	SteamUser = require('steam-user');
	// Checking if module steam-totp is correctly installed
	SteamTOTP = require('steam-totp');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.');
	console.log(ex);
	process.exit(1);
}

// Client
const refloow = new SteamUser();


// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */
