import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D5/input.txt');

// Function to parse the input stacks of boxes
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

        const crates = stacks[from].splice(stacks[from].length - move, move); // Remove last x crates
        stacks[to] = stacks[to].concat(crates); // Add crates to new stack
    }

    loopCount++;
});

let result = [];

stacks.forEach((stack) => {
    console.log(`${stack.length <= 9 ? 0 : ''}${stack.length} : `, stack.toString());
    result.push(stack[stack.length - 1]);
});

console.log('Final result: ', result.toString().replace(/,/g, ''));