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
let groupCount = 0;

const elfGroups = () => {
    const elf1 = input[groupCount].split('');
    const elf2 = input[groupCount + 1].split('');
    const elf3 = input[groupCount + 2].split('');

    elf1.every((item, index) => {
        if (elf2.includes(item) && elf3.includes(item)) {
            totalScore += itemScore(item)
            return false;
        }

        return true;
    });

    groupCount += 3; // Next 3 elves
    if (groupCount ===  input.length) return;
    elfGroups();
}

elfGroups();

console.log('Total score: ', totalScore);
