# Version 1.2.0
- Updated info cmd messages
- Added new cmd info messages
- Added new notes to the code
- Added checking for offline friend requests
- Added sending different message for offline friend requests
- Added new config options
- Options added to config:
       Disable responding to offline friend requests (requests that are sent while bot is off)
       Option to set different message for offline friend requests
- Added new methods
- Methods added:
       messagesEnabledOffline,
       acceptFriendsOffline,
       manageMessageOffline
- Updated package file

# Version 1.1.0
- Added changelog
- Updated cmd info messages
- Added new cmd info messages
- Added checking version on github and checking for updates on script that user is running
- Removed non important options in config
- Added minimum level (From now you can in config set if you want bot to ignore friend requests from users that are below set level.)
- Updated config
- Added new options to config
- Options added to config: 
       Disable welcome message after request is accepted
       Disable group invite
       Disable friend request accepts (for some reason)
       Minimum level option
- Added new modules in package
- All new added modules:
      "moment": "^2.22.2",
      "request": "2.88.0"
