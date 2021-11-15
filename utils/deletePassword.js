const { unlink } = require("fs");
const { join } = require("path");
const { yellow, greenBright } = require("chalk");
const { cwd } = process;

/**
    * Removes passwords.txt
    * @returns {VoidFunction} unlink()
*/
module.exports = () => unlink(
    join(cwd(), "passwords.txt"), 
    err => { 
        if (err) console.log(yellow("⚠️  passwords.txt is not found or already deleted!"));
        else console.log(greenBright("passwords.txt deleted 🗑️"));
    }
);