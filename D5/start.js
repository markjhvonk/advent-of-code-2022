import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D5/input.txt');

let parseStacks = (n, data) => {
    let result = [];
    // Group by every 3rd item;
    var l = data.length;
    while (l--) { (l + 1) % 4 === 0 && data.splice(l, 1); }
    // Remove empty spaces between rows
    for (let i = 0; i < data.length; i += n) result.push(data.slice(i, i + n));
    // Only keep important characters
    result = result.map((item, index) => item[1]);

    return result;
};

let stacks = [[],[],[],[],[],[],[],[],[]];
let loopCount = 0;

input.forEach((row) => {
    if (loopCount <= 7) {
        // Setup array of stacks
        parseStacks(3, row.split('')).forEach((item, index) => {
            if (item !== ' ') stacks[index].unshift(item);
        });
    } else if(loopCount >= 10) {
        const instruction = row.split(' ');
        const move = +instruction[1];
        const from = +instruction[3] - 1;
        const to = +instruction[5] - 1;

        // Loop through x boxes
        for (let i = 0; i < move; i++) {
            const crate = stacks[from].pop(); // Remove box from row y
            stacks[to].push(crate); // Add box to row z
        }
    }

    loopCount++;
});

console.log('Final Result: ')

for (let j = 11; j >= 0; j--) {
    let row = [];
    for (let i = 0; i < stacks.length; i++) {
        row.push(stacks[i][j] ? stacks[i][j] : ' ')
    }
    console.log(row.toString().replace(/,/g, ' '));
}
console.log('-----------------')
console.log('1 2 3 4 5 6 7 8 9')
console.log('  ')

let result = [];
stacks.forEach((stack) => { result.push(stack[stack.length - 1]); });

console.log('Top Boxes: ', result.toString().replace(/,/g, ''));