const escapeButton = document.getElementById('escapeButton');
// Array of texts to change the button's label
const buttonTexts = [
    "Awwww",
    "Almost There😚",
    "Never mind😺",
    "Keep Trying😁",
    "Yes😶‍🌫️?",
    "Are u sure?",
    "Think again",
    "Give up👻",
    "Click Me if You Can👀"
];

// Function to move the button to a random position
function moveButton() {
    const buttonWidth = escapeButton.offsetWidth;
    const buttonHeight = escapeButton.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate random positions
    const randomX = Math.random() * (windowWidth - buttonWidth);
    const randomY = Math.random() * (windowHeight - buttonHeight);

    // Set the button's new position
    escapeButton.style.position = 'absolute';
    escapeButton.style.left = `${randomX}px`;
    escapeButton.style.top = `${randomY}px`;

      // Change button text randomly from the array
      const randomTextIndex = Math.floor(Math.random() * buttonTexts.length);
      escapeButton.textContent = buttonTexts[randomTextIndex];
  
}


// Function to handle button click
function handleButtonClick() {
    alert("I Knew it😏");
}

// Add mouseover event listener to the button
escapeButton.addEventListener('mouseover', moveButton);

// Add click event listener to the button
escapeButton.addEventListener('click', handleButtonClick);