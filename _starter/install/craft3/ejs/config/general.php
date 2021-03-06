<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 */

return [
    // Global settings
    '*' => [
        'cacheDuration' => false,
        'cpTrigger' => '<%- install.cpTrigger %>',
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),
        'enableCsrfProtection' => true,
        'generateTransformsBeforePageLoad' => true,
        'omitScriptNameInUrls' => true,
        'securityKey' => getenv('CRAFTENV_SECURITY_KEY'),
        'siteUrl' => getenv('CRAFTENV_SITE_URL'),
        'usePathInfo' => true,
        'aliases' => [
            '@basePath' => getenv('CRAFTENV_BASE_PATH'),
            '@baseUrl' => getenv('CRAFTENV_BASE_URL'),
        ],
        'custom' => [
            'craftEnv' => CRAFT_ENVIRONMENT,
        ]
    ],

    // Live (production) environment
    'live' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
    ],

    // Staging (pre-production) environment
    'staging' => [
        // Craft defined config settings
        'allowUpdates' => false,
        'backupOnUpdate' => false,
        'devMode' => false,
        'enableTemplateCaching' => true,
        'rememberedUserSessionDuration' => 31557600,
        'userSessionDuration' => 31557600,
    ],

    // Local (development) environment
    'dev' => [
        // Craft defined config settings
        'allowUpdates' => true,
        'backupOnUpdate' => true,
        'devMode' => true,
        'enableTemplateCaching' => false,
        'rememberedUserSessionDuration' => 31557600,
        'userSessionDuration' => 31557600,
    ],
];
