const projectText = `> victor@macbook projects.sh\n`;
let index = 0;
const typingSpeed = 50;  // Typing speed in milliseconds

function typeProjectText() {
  if (index < projectText.length) {
    document.getElementById('typing-text').textContent += projectText.charAt(index);
    index++;
    setTimeout(typeProjectText, typingSpeed);
  } else {
    // Once typing is done, show the projects list
    document.getElementById('projects-list').classList.remove('hidden');
  }
}

// Start the typing effect when the window is fully loaded
window.onload = function () {
  setTimeout(typeProjectText, 500);  // Delay to mimic real terminal typing
};

