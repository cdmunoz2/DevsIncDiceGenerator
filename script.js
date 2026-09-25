//  This function returns a random whole number between 1 and 20 depending on which rollDice function is being returned, 6, 10, or 20
function rollDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}

//  Test 1: should return number between 1 and 6
const roll1 = rollDice(6);
if (roll1 < 1 || roll1 > 6) {
    throw new Error ('Test 1 failed: d6 roll out of range, got ' + roll1);
}

//  Test 2: should return number between 1 and 10
const roll2 = rollDice(10);
if (roll2 < 1 || roll2 > 10) {
    throw new Error ('Test 1 failed: d10 roll out of range, got ' + roll2);
}

//  Test 3: should return number between 1 and 20
const roll3 = rollDice(20);
if (roll3 < 1 || roll3 > 20) {
    throw new Error ('Test 1 failed: d20 roll out of range, got ' + roll3);
}

console.log('All tests passed.');

document.getElementById('rollButton6').addEventListener('click', function() {
    const result = rollDice(6);
    document.getElementById('result6').textContent = result;
});

document.getElementById('rollButton10').addEventListener('click', function() {
        const result = rollDice(10);
    document.getElementById('result10').textContent = result;
});

document.getElementById('rollButton20').addEventListener('click', function() {
        const result = rollDice(20);
    document.getElementById('result20').textContent = result;
});
