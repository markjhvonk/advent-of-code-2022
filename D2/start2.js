import { readFileSync } from 'fs';

function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

const input = syncReadFile('./D2/input.txt');

// Rules
// Oponent picks:
// A = Rock
// B = Paper
// C = Scissors
// Outcome
// X = Lose
// Y = Draw
// Z = Win
// Points:
// Lose = 0, Draw = 3, Win = 6
// Rock = 1, Paper = 2, Scissor = 3

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
        case "A": // Rock
            if (myHand === "X") {
                handScore = 3; // Scissor
            } else if (myHand === "Y") {
                handScore = 1; // Rock
            } else if (myHand === "Z") {
                handScore = 2; // Paper
            }
            break;
        case "B": // Paper
            if (myHand === "X") {
                handScore = 1; // Rock
            } else if (myHand === "Y") {
                handScore = 2; // Paper
            } else if (myHand === "Z") {
                handScore = 3; // Scissor
            }
            break;
        case "C": // Scissor
            if (myHand === "X") {
                handScore = 2; // Paper
            } else if (myHand === "Y") {
                handScore = 3; // Scissor
            } else if (myHand === "Z") {
                handScore = 1; // Rock
            }
            break;
    }

    switch(myHand) {
        case "X":
            result = 0; // Lose
            break;
        case "Y":
            result = 3; // Draw
            break;
        case "Z":
            result = 6; // Win
            break;
    }

    let roundScore = result + handScore;
    score += roundScore;
});

console.log('Final score: ', score);