<?php

// THIS SCRIPT USE CACHE TO REDUCE HIGH LOAD. SO IF CACHE FILE EXIST -
// DELETE IT, WAIT "CACHE EXPIRATION TIME" OR USE "cacheSkip" OPTION TO APPLY CHANGES!

$CONFIG = array(

	// Instagram login
	'LOGIN' => 'radoslaw_mulawka',
	'ACCESS_TOKEN' => '1289367986.867c5c8.ca3ae30d53ff4ad4b20d5642c03cfcd7',
	// Get pictures from WORLDWIDE by hashtags. 
	// Separate hashtags by comma. For example: girl, man
	// Use this options only if you want show pictures of other users. 
	// Profile avatar and statistic will be hidden.
	'HASHTAG' => '',

	// Specify here list of banned logins. 
	// Photos of these users will not be displayed in widget.
	// Separate usernames by comma. For example: mark18, kitty45
	'bannedLogins' => '',
		
	// Random order of pictures [ true / false ]
	'imgRandom' => true,

	// How many pictures widget will get from Instagram?
	'imgCount' => 30,
		
	// Cache expiration time (hours)
	'cacheExpiration' => 6,
		
	// Skip cache data [ true / false ]
	// Requests to Instagram API will be sending every time.
	// Warning! Use true option only for debug.
	'cacheSkip' => false,
		
	// Full path to cache directory
	'cachePath' => __DIR__.'/cache/',
		
	/* Default skin. 
	 * Possible values: default, modern-blue, modern-green, modern-red, modern-orange, modern-grey, modern-black, modern-violet, modern-yellow
	 * This option may no effect if you set skin by $_GET variable */
	'skinDefault' => 'default',
		
	// Path to skin directory
	'skinPath' => 'skins/',

	// Default language [ ru / en ] or something else from lang directory.
	'langDefault' => 'pl',

	// Language auto-detection [ true / false ]
	// This option may no effect if you set language by $_GET variable.
	'langAuto' => false,

);