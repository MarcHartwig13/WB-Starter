<?php
/**
 * Admin Bar plugin for Craft CMS 3.x
 *
 * Front-end shortcuts for clients logged into Craft CMS.
 *
 * @link      https://wbrowar.com/plugins/adminbar
 * @copyright Copyright (c) 2017 Will Browar
 */

/**
 * Admin Bar config.php
 *
 * Completely optional configuration settings for Admin Bar if you want to customize some
 * of its more esoteric behavior, or just want specific control over things.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'adminbar.php' and make
 * your changes there.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as well, so you can
 * have different settings groups for each environment, just as you do for 'general.php'
 */


return [

    // All environments
    '*' => [
        // ADMIN BAR
        'additionalLinks' => [],
        'customCss' => '',
        'displayGreeting' => true,
        'displayDashboardLink' => true,
        'displayDefaultEditSection' => true,
        'displaySettingsLink' => true,
        'displayLogout' => true,
        'enableMobileMenu' => true,

        // EDIT LINKS
        'displayEditDate' => true,
        'displayEditAuthor' => true,
        'displayRevisionNote' => true,
    ],

    // Live (production) environment
    'live'  => [
        'additionalLinks' => [
            [
                'title' => 'Guide',
                'url' => 'guide/home',
                'type' => 'cpUrl',
                'permissions' => ['accessPlugin-guide'],
            ],
            [
                'title' => 'Fields',
                'url' => 'settings/fields',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Sections',
                'url' => 'settings/sections',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Admin’s Log',
                'url' => 'guide/admins-log',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Clear Caches',
                'url' => 'utilities/clear-caches',
                'type' => 'cpUrl',
                'admin' => true,
            ],
        ],
    ],

    // Staging (pre-production) environment
    'staging'  => [
        'additionalLinks' => [
            [
                'title' => 'Style Inventory',
                'url' => 'dev/inv',
                'type' => 'url',
            ],
            [
                'title' => 'Fields',
                'url' => 'settings/fields',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Sections',
                'url' => 'settings/sections',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Clear Caches',
                'url' => 'utilities/clear-caches',
                'type' => 'cpUrl',
                'admin' => true,
            ],
        ],
    ],

    // Local (development) environment
    'dev'  => [
        'additionalLinks' => [
            [
                'title' => 'Style Inventory',
                'url' => 'dev/inv',
                'type' => 'url',
            ],
            [
                'title' => 'Fields',
                'url' => 'settings/fields',
                'type' => 'cpUrl',
                'admin' => true,
            ],
            [
                'title' => 'Sections',
                'url' => 'settings/sections',
                'type' => 'cpUrl',
                'admin' => true,
            ],
        ],
    ],
];

// EXAMPLES
// Additional Links
/*
'additionalLinks' => [
  // an example of a simple url link
  [
    'title' => 'Craft CMS',
    'url' => 'http://craftcms.com',
    'type' => 'url',
  ],
  // an example of a CP link
  [
    'title' => 'Entries',
    'url' => 'entries',
    'type' => 'cpUrl',
  ],
  // an example of a url link that passes along some extras
  [
    'title' => 'Blog',
    'url' => 'blog',
    'type' => 'url',
    'params' => 'foo=1&bar=2',
    'protocol' => 'http',
    'mustShowScriptName' => true,
    'permissions' => ['myPluginPermission', 'thisIsRequiredToo'],
  ],
  // an example of a plugin action link
  [
    'title' => 'Clear Cache',
    'url' => 'adminbar/clearTemplateCache',
    'type' => 'action',
    'admin' => true,
  ],
],
*/