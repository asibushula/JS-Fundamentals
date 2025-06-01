#!/usr/bin/node

const { argv } = requir('process');

if (isNaN(process.argv[2])) {
    console.log('Missing number of occurunces');
}   else {
    for (let i = 0; i < process.argv[2]; i++) {
        console.log('C is fun');
    }
};