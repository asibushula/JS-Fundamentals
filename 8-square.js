#!/usr/bin/node

const { argv } = require('process');

const repeat = 'X'.repeat(Number(argv[2]));
if (isNaN(Number(argv[2]))) {
    console.log('Missing size');
}   else {
    for (let i = 0; i < Number(argv[2]); i++) {
        console.log(repeat);
    }
}