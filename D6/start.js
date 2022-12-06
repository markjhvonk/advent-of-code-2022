import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D6/input.txt');

const signal = input[0].split('');

const checkIfArrayIsUnique = (myArray) => {
    return myArray.length === new Set(myArray).size;
}

// const sqncLngth = 3; // 4, Part 1
const sqncLngth = 13; // 14, Part 2

let count = sqncLngth;
let sequence = [];

const scanner = function() {
    sequence = [];

    for(let i = 0; i <= sqncLngth; i++) {
        sequence.push(signal[count - i]);
    }

    const isUnique = checkIfArrayIsUnique(sequence);
    console.log(sequence, isUnique);

    if(isUnique || count >= signal.length) return;

    count++;
    scanner();
}

scanner();

console.log('Final result: ', sequence, count + 1);