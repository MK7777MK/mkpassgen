const { open, write, close } = require("fs");
const { join } = require("path");
const { EOL } = require("os");
const { italic, bold, underline, blue, greenBright } = require("chalk");
const { cwd } = process;

/**
    * Save Password to passwords.txt 
    * @param {String} password 
*/
module.exports = (password = "") => {
    open(join(cwd(), "passwords.txt"), "a", 666, (err, id) => {
        if (err) console.error(err);
        write(id, password + EOL, null, "utf-8", err => {
            if (err) console.error(err);
            close(id, () => console.log(`💾 Password Saved to ${italic(underline(blue(join(cwd(), bold(greenBright("passwords.txt"))))))}`));
        });
    });
};