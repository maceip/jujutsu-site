---
toc: false
sidebar: false
searchable: false
pagination: false
headeronly: true
footer: false
---

# Command Is Too Deep

This error occurs when your `command.js` file is more than 2 directories into your `app` directory.

## Why

This is because we identify all `command.js` files that are 1 folder into the `app` directory as slash commands, and 2 directories into the directory as subcommands.

This is only allowed with `event.js` files, as all the directories are transformed into camel case to correspond with a Discord bot event.
