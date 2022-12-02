import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D2/input.txt');

// Rules
// A/X = Rock (1)
// B/Y = Paper (2)
// C/Z = Scissors (3)
// Lose = 0, Draw = 3, Win = 6

// Main score counter
let score = 0;

input.forEach((match, index) => {
    // Round

    const hands = match.split(" ");
    const opHand = hands[0]; // Oponent hand
    const myHand = hands[1]; // My hand

    let handScore = 0; // Rock = 1, Paper = 2, Scissor = 3
    let result = 0; // Lose = 0, Draw = 3, Win = 6
    
    // Oponent hand
    switch(opHand) {
        case "A":
            if (myHand === "X") {
                result = 3; // Draw
            } else if (myHand === "Y") {
                result = 6; // Win
            } else if (myHand === "Z") {
                result = 0; // Lose
            }
            break;
        case "B":
            if (myHand === "X") {
                result = 0; // Lose
            } else if (myHand === "Y") {
                result = 3; // Draw
            } else if (myHand === "Z") {
                result = 6; // Win
            }
            break;
        case "C":
            if (myHand === "X") {
                result = 6; // Win
            } else if (myHand === "Y") {
                result = 0; // Lose
            } else if (myHand === "Z") {
                result = 3; // Draw
            }
            break;
    }

    switch(myHand) {
        case "X":
            handScore = 1;
            break;
        case "Y":
            handScore = 2;
            break;
        case "Z":
            handScore = 3;
            break;
    }

    let roundScore = result + handScore;
    score += roundScore;
});

console.log('Final score: ', score);