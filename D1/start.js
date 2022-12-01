import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}
  
const input = syncReadFile('./D1/input.txt');

let currentElf = 0;
let allElves = [];

input.forEach((item, index) => {
    currentElf += +item;

    if (item === '') {
        // Add elf to array
        allElves.push(currentElf); 

        // Reset elf count
        currentElf = 0;
    }
});

// Sort elves, highest to lowest count
allElves.sort(function(a, b){return b-a});

console.log('Top three total: ', allElves[0] + allElves[1] + allElves[2]);
console.log('Highest elf: ', highestElf[0]);
