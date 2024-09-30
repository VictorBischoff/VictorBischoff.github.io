const text = `> victor@macbook about_me.sh\n--- OCCUPATION: Student Developer\n--- INTERESTS: DevOps & Backend Development\n--- LOCATION: Copenhagen\n--- CONTACT: vimo0003@stud.kea.dk\n`;
let index = 0;
const speed = 50;  // Typing speed in ms

function typeEffect() {
  if (index < text.length) {
    document.getElementById('typing-text').textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  } else {
    // Once the text is done, keep showing the links
    setTimeout(() => showLink('link-github'), 500); // Show GitHub link after typing
  }
}

// Function to show each link with a delay
function showLink(linkId) {
  const link = document.getElementById(linkId);
  link.classList.add('show-link');
  link.classList.remove('hidden-link');

  if (linkId === 'link-github') {
    setTimeout(() => showLink('link-linkedin'), 500); // Show LinkedIn after GitHub
  } else if (linkId === 'link-linkedin') {
    setTimeout(() => showLink('link-projects'), 500); // Show Projects after LinkedIn
  }
}

// Start the typing effect when the window is fully loaded
window.onload = function () {
  setTimeout(typeEffect, 500);  // Delay to mimic real terminal typing
};

