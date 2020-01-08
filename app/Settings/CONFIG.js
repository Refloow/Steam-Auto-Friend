module.exports = {


    // Bot account information // 

	accountName: '',
	password: '',
	shared_secret: '',
	
            // Settings //
               
        CustomPlayingMessage: "",                  // Message that will be displayed as playing game
	    INVITETOGROUPID: '103582791463409634',     // id of the group that bot will invite user after accepting friend request
        add_message: 'Hi, how can i help you %?',  // Leave the '%' to get it to replace it with the user's name
        // Soon add_offline_message: 'Hi ! Sorry for waiting to be accepted, how can i help you ? ',  // Message that bot sent to users which requests that are sent when bot was offline.


        messages: true,                         // [true/false] senting message after accepting friend request
        // Soon adding messages_offline         // [true/false] senting message after accepting friend request that is sent offline.
        group_inviting: true,                   // [true/false] inviting user to the selected group
        auto_accept: true,                      // [true/false] Enable or disable automatically accepting friend requests.
        auto_accept_offline: true,              // [true/false] Enable or disable checking and accepting firend requests that are sent while bot is offline.


        minimum_level: 2,                       // Minimum level required to be automatically accepted if setting above is true 
        // Soon adding minimum_level_offline    // Minimum level required to be automaticly accepted if your request is sent while bot is offline











   // Non-important settings //
 
        clock: 'en',                                // Language code for your 
        persona: 'Online',                          // Steam persona status
        game: [440, 730, 735],
}

