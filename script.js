function rollDice(sides){
    return Math.floor(Math.random() * sides) + 1;
}

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
