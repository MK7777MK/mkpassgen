const { unlink } = require("fs");
const { join } = require("path");
const { yellow } = require("chalk");

module.exports = () => unlink(
    join(__dirname, "../", "passwords.txt"), 
    () => console.log(yellow("passwords.txt deleted 🗑️"))
);