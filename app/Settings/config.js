module.exports = {

// Copyright notice:

/* Original work: Copyright (c) 2020-2021 Refloow All rights reserved.
  Code origin (Free GitHub publish): https://github.com/OSL-Works/Steam-Auto-Friend*/
	
	    
/*

Want active support and new updates with new features all for free?

Leave an star on github repo its free ( we push updates based on the engagement )
Repo link: https://github.com/OSL-Works/Steam-Auto-Friend 

  Discord Support Server: https://discord.gg/D8WCtDD     (Open an ticket)

*/
	

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  main dev steam: https://steamcommunity.com/id/MajokingGames/
  
* Donations:
  Crypto: https://refloow.com/cdonate
  Steam: https://steamcommunity.com/tradeoffer/new/?partner=392773011&token=CncehZti

 */




    // Bot account information // 

	accountName: '',
	password: '',
	
	// Set false to disable
	Has2FactorAuth: true, // [true/false] - In case account has no authentication set to false and leave shared_secret empty
	shared_secret: '',

   // ---------------------------- //
	
            // Settings //

        // Set false to disable
        EnableCustomPlayingMessage: true,        // [true/false] Enable or disable | custom playing message if is set to true set it down or if is into false bot will show online state.
        CustomPlayingMessage: `Smth`,            // Message that will be displayed as playing game if EnableCustomPlayingMessage is set to true |

 
        // Set false to disable
        group_inviting: true,                   // [true/false] inviting user to the selected group
	    INVITETOGROUPID: '',                // id of the group that bot will invite user after accepting friend request

        // Set false to disable
        welcome_message_enable: true,           // [true/false] senting message after accepting friend request
        add_message: 'Hi, how can i help you ?',  // Leave the '%' to get it to replace it with the user's name
        // Soon add_offline_message: 'Hi ! Sorry for waiting to be accepted, how can i help you ? ',  // Message that bot sent to users which requests that are sent when bot was offline.


          // Other Features //


        // Soon adding messages_offline         // [true/false] senting message after accepting friend request that is sent offline.
        auto_accept: true,                      // [true/false] Enable or disable automatically accepting friend requests.
        auto_accept_offline: true,              // [true/false] Enable or disable checking and accepting firend requests that are sent while bot is offline.
        UpdateNotif: true,                      // [true/false] Enable or disable | Notification in dev console uppon new version update

        // Soon adding minimum_level: 0,        // Minimum level required to be automatically accepted if setting above is true 
        // Soon adding minimum_level_offline    // Minimum level required to be automaticly accepted if your request is sent while bot is offline











   // Non-important settings //
 
        clock: 'en',                                // Language code for your 
        persona: 'Online',                          // Steam persona status
        game: [440, 730, 735],
}

