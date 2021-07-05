#!/usr/bin/env node
const program = require("commander");
const { cyan, bold, green } = require("chalk");
const { writeSync } = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const { log } = console;

program.version("1.0.0").description("NodeJS Password Generator");
program
    .option("-l, --length <length>", "Length of Password", "8")
    .option("-s, --save", "Save Password to password.txt")
    .option("-nn, --no-numbers", "No Numbers are Included")
    .option("-ns, --no-symbols", "No Symbols are Included")
    .parse();

const { length, save, numbers, symbols } = program.opts();

// Generate Password
const generatedPassword = createPassword(length, numbers, symbols);

// Copy to Clipboard
writeSync(generatedPassword);

// Save Password
if (save) savePassword(generatedPassword);

log(`${cyan("Password:")} ${bold(generatedPassword)}`);
log(green("Password Copied to Clipboard 💾"));