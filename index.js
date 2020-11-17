// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */

// Checking if all modules are correctly installed

try {
    // Checking if module colors is correctly installed
	colors = require('colors');
} catch (ex) {
	// If modules are not installed showing an clear error message to user.
	console.log('\n\n| [Modules] |: Missing dependencies. Install a version with dependecies or use npm install.\n\n');
	console.log(ex);
	process.exit(1);
}

// Basic display information on app start

console.log('8888888b.          .d888888                              '.cyan);
console.log('888   Y88b        d88P" 888                              '.cyan);
console.log('888    888        888   888                              '.cyan);
console.log('888   d88P .d88b. 888888888 .d88b.  .d88b. 888  888  888'.cyan);
console.log('8888888P" d8P  Y8b888   888d88""88bd88""88b888  888  888'.cyan); 
console.log('888 T88b  88888888888   888888  888888  888888  888  888'.cyan); 
console.log('888  T88b Y8b.    888   888Y88..88PY88..88PY88b 888 d88P '.cyan);
console.log('888   T88b "Y8888 888   888 "Y88P"  "Y88P"  "Y8888888P" \n\n\n'.cyan);                              
console.log('This bot was developed by MajokingGames'.cyan);
console.log('Verision 1.3.1'.cyan);
console.log('Thanks for choosing us.'.cyan);
console.log('This version doesnt contain UI'.red);
console.log('Loading config file...'.green );
console.log('Starting bot...'.green );
console.log('If bot doesnt start in next 1 minute steam is down.\n\n'.green );

console.log('If you enjoy using our projects, you can support us via donations,  '.brightYellow);
console.log('that way we can keep releasing free projects & updates for existing ones!'.brightYellow);
console.log('Check links down below:\n'.brightYellow);
console.log('Ko-fi: https://ko-fi.com/refloow'.green);
console.log('Steam: https://steamcommunity.com/tradeoffer/new/?partner=392773011&token=CncehZti (ingame items)\n\n'.green);

// Importing main app file
require('./app/app.js');

// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  Support Discord: https://discord.gg/nNSDPvKBjt
  
  Donate: https://ko-fi.com/refloow

 */
