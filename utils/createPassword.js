const generatePassword = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i ++) 
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    return password;
};

module.exports = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (hasNumbers) chars += "0123456789";
    if (hasSymbols) chars += "!@#$%^&*_-+=";
    return generatePassword(length, chars);
};