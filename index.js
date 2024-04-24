document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.querySelector('.game-container');

    // Create game grid
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const cell = document.createElement('div');
            cell.classList.add('game-cell');
            gameContainer.appendChild(cell);
        }
    }

    // Generate random position for the character
    let characterPosition = Math.floor(Math.random() * 16);
    let character = document.createElement('img');
    character.setAttribute('src', 'images/goblin.png'); // Укажите нужный адрес для изображения персонажа
    character.classList.add('character');
    gameContainer.children[characterPosition].appendChild(character);

    // Function to move character
    function moveCharacter() {
        let newPosition;
        do {
            newPosition = Math.floor(Math.random() * 16);
        } while (newPosition === characterPosition);

        gameContainer.children[characterPosition].removeChild(character);
        gameContainer.children[newPosition].appendChild(character);
        characterPosition = newPosition;
    }

    // Set interval for character movement
    setInterval(moveCharacter, 2000);
});
