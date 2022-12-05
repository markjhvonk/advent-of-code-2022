import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D4/input.txt');

let count = 0;

input.forEach((item) => {
    const elves = item.split(',');
    const elf1 = elves[0].split('-').map(str => Number(str));
    const elf2 = elves[1].split('-').map(str => Number(str));

    if ((elf1[0] >= elf2[0] && elf1[1] <= elf2[1]) || 
        (elf2[0] >= elf1[0] && elf2[1] <= elf1[1])) {
        count++;
    }
});

console.log('Final count: ', count);
