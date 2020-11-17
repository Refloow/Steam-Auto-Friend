module.exports = {

// Auto Friend Request - Bot built by Refloow (-MajokingGames)

/* 
  Here is contact info: refloowlibrarycontact@gmail.com
  or main dev steam: https://steamcommunity.com/id/MajokingGames/

 */


    // Bot account information // 

	accountName: '',
	password: '',
	
	Has2FactorAuth: true, // [true/false] - In case account has no authentication set to false and leave shared_secret empty
	
	shared_secret: '',
	
            // Settings //

        disable_custom_message: true,           // [true/false] Enable or disable | custom playing message if is set to true set it down or if is into false bot will show online state.
        CustomPlayingMessage: ``,                  // Message that will be displayed as playing game |- fill it up if disable_custom_message is set to true
	INVITETOGROUPID: '103582791463409634',     // id of the group that bot will invite user after accepting friend request
        add_message: 'Hi, how can i help you ?', // Message sent to person who added the bot uppon accepting friend request
        // Soon add_offline_message: 'Hi ! Sorry for waiting to be accepted, how can i help you ? ',  // Message that bot sent to users which requests that are sent when bot was offline.


        messages: true,                         // [true/false] senting message after accepting friend request
        // Soon adding messages_offline         // [true/false] senting message after accepting friend request that is sent offline.
        group_inviting: true,                   // [true/false] inviting user to the selected group
        auto_accept: true,                      // [true/false] Enable or disable automatically accepting friend requests.
        auto_accept_offline: true,              // [true/false] Enable or disable checking and accepting firend requests that are sent while bot is offline.
        UpdateNotif: true,                      // [true/false] Enable or disable | Notification in dev console uppon new version update

      
	
	
	
	
	// Soon adding minimum_level            // Minimum level required to be automatically accepted if setting above is true 
        // Soon adding minimum_level_offline    // Minimum level required to be automaticly accepted if your request is sent while bot is offline











   // Non-important settings //
 
        clock: 'en',                                // Language code for your 
        persona: 'Online',                          // Steam persona status
        game: [440, 730, 735],
}

