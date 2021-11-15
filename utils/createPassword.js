/**
    * Generates Password
    * @param {Number} length 
    * @param {String} chars 
    * @returns {String} password
*/
const generatePassword = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i ++) 
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    return password;
};

/**
    * Create Password
    * @param {Number} length 
    * @param {Boolean} hasNumbers 
    * @param {Boolean} hasSymbols 
    * @returns {String} password
*/
module.exports = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNumbers) chars += "0123456789";
    if (hasSymbols) chars += "!@#$%^&*_-+=";
    return generatePassword(length, chars);
};