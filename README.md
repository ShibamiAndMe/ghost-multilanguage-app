# ghost-multilanguage-app

Multilanguage application for ghost blog

## Installing

Open up your database, and add the name `["ghost-multilanguage-app"]` to `active_apps` in the `settings` table. Double quotes are required.

If your database is not huge, you can easily modify it like so:

* SETTINGS > Labs > Export
* Open the exported `.json` file with a text editor
* Replace "key":"active_apps","value":"[]"
* with "key":"activeApps","value":"[\"ghost-multilanguage-app\"]"
* SETTINGS > Labs > Delete all Content
* SETTINGS > Labs > Import

(TODO: Confirm that this brute force procedure does not have undesired side effects!)

Or, if you prefer something pointy-clicky: ["the DB Browser for SQLite"](http://sqlitebrowser.org/)

Once added, restart Ghost and your app will be installed & loaded.

## NOTE

This procedure is extract from [Apps Getting Started for Ghost Devs](https://github.com/TryGhost/Ghost/wiki/Apps-Getting-Started-for-Ghost-Devs)