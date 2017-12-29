<?php
/**
 * Craft 3 Multi-Environment
 * Efficient and flexible multi-environment config for Craft 3 CMS
 *
 * @author    nystudio107
 * @copyright Copyright (c) 2017 nystudio107
 * @link      https://nystudio107.com/
 * @package   craft3-multi-environment
 * @since     1.0.5
 * @license   MIT
 *
 * This file should be renamed to '.env.php' and it should reside in your root
 * project directory.  Add '/.env.php' to your .gitignore.  See below for production
 * usage notes.
 */
// Determine the incoming protocol
if (isset($_SERVER['HTTPS']) && (strcasecmp($_SERVER['HTTPS'], 'on') === 0 || $_SERVER['HTTPS'] == 1)
    || isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && strcasecmp($_SERVER['HTTP_X_FORWARDED_PROTO'], 'https') === 0
) {
    $protocol = "https://";
} else {
    $protocol = "http://";
}
// Determine the server hostname
$httpHost = $_SERVER['HTTP_HOST'] ?? '';

// The $craftEnvVars are all auto-prefixed with CRAFTENV_ -- you can add
// whatever you want here and access them via getenv() using the prefixed name
$craftEnvVars = [
    // The environment Craft is currently running in ('dev', 'staging', 'production', etc.)
    'ENVIRONMENT' => "dev",

    // The secure key Craft will use for hashing and encrypting data
    'SECURITY_KEY' => "<%- securityKey %>",

    // The database driver that will used ('mysql' or 'pgsql')
    'DB_DRIVER' => "mysql",

    // The database server name or IP address (usually this is 'localhost' or '127.0.0.1')
    'DB_SERVER' => "127.0.0.1",

    // The database username to connect with
    'DB_USER' => "root",

    // The database password to connect with
    'DB_PASSWORD' => "",

    // The name of the database to select
    'DB_DATABASE' => "<%- name.replace('-', '_') %>",

    // The database schema that will be used (PostgreSQL only)
    'DB_SCHEMA' => "public",

    // The prefix that should be added to generated table names (only necessary if multiple things are sharing the same database)
    'DB_TABLE_PREFIX' => "",

    // The port to connect to the database with. Will default to 5432 for PostgreSQL and 3306 for MySQL.
    'DB_PORT' => "",

    'BASE_PATH' => $_SERVER["DOCUMENT_ROOT"] . '/',

    'BASE_URL' => $protocol . $httpHost . '/',

    'SITE_URL' => $protocol . $httpHost . '/',
];

// Set all of the .env values, auto-prefixed with `CRAFTENV_`
foreach ($craftEnvVars as $key => $value) {
    putenv("CRAFTENV_{$key}={$value}");
}