import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D3/input.txt');

// Takes ASCII value position and converts it to proper score.
const itemScore = function (item) {
    // Scoring: a-z = 1-26, A-Z = 27-52
    let modifier = item === item.toUpperCase() ? 38 : 96;
    return item.charCodeAt(0) - modifier;
} 

let totalScore = 0;

input.every((backpackString, index) => {
    const backpack = backpackString.split('');
    const firstCompartment = backpack.slice(0, Math.ceil(backpack.length / 2)); // First half of array
    const secondCompartment = backpack.slice(Math.ceil(backpack.length / 2));   // Second half of array

    firstCompartment.every((item, i) => {
        if (secondCompartment.includes(item)) {
            totalScore += itemScore(item);
            return false;
        }
        return true;
    });

    return true;
});

console.log('Total score: ', totalScore);
