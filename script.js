const newsLines = [
    "Stay tuned for the upcoming latest models of 2025"
];

let currentCharIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetweenLines = 1000;
let delayAfterErasing = 500;

const bannerText = document.querySelector('.banner-text');
const newsElement = document.querySelector('.banner-text h2');

// Create a new paragraph for the animated text
const newsParagraph = document.createElement('p');
newsParagraph.style.fontSize = "20px"; // Make text smaller
newsParagraph.style.fontStyle = "italic"; // Make text italic
newsParagraph.style.fontWeight = "bold"; // Make text bold
newsParagraph.style.marginTop = "15px"; // Add spacing
bannerText.appendChild(newsParagraph);

function typeNewsLine() {
    if (currentCharIndex < newsLines[0].length) {
        newsParagraph.textContent += newsLines[0][currentCharIndex];
        currentCharIndex++;
        setTimeout(typeNewsLine, typingSpeed);
    } else {
        setTimeout(eraseNewsLine, delayAfterErasing);
    }
}

function eraseNewsLine() {
    if (currentCharIndex > 0) {
        newsParagraph.textContent = newsParagraph.textContent.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        setTimeout(eraseNewsLine, erasingSpeed);
    } else {
        setTimeout(typeNewsLine, delayBetweenLines);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeNewsLine, delayBetweenLines);
});






// JavaScript for Dropdown and Line Animationz

// Dropdown functionality
const selectModel = document.getElementById('selectModel');
const dropdown = document.getElementById('dropdown');

selectModel.addEventListener('click', function() {
    dropdown.classList.toggle('active');
});

// Line animation
const lines = document.querySelectorAll('.line');

lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 3}s`; // Delay based on index
});

// Close dropdown on click outside
document.addEventListener('click', function(event) {
    if (!selectModel.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

