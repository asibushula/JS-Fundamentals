#!/usr/bin/node

const { argv } = require('process');
const argc = argv.length;

if (argc === 0) {
    console.log('No arguments');
}   else if (argc === 1) {
    console.log('Argument found');
}   else {
    console.log('Arguments found');
}