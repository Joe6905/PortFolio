function showSection(id) {
    document.querySelectorAll('.content').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

  // Click animation effect
  document.addEventListener('click', function(e) {
    let x = e.clientX;
    let y = e.clientY;
    let clickEffect = document.createElement('div');
    clickEffect.className = 'click-animation';
    clickEffect.style.left = `${x}px`;
    clickEffect.style.top = `${y}px`;
    document.body.appendChild(clickEffect);
    setTimeout(() => {
      clickEffect.classList.add('active');
      setTimeout(() => {
        clickEffect.remove();
      }, 300);
    }, 0);
  });
 document.getElementById("fullscreen-btn").addEventListener("click", function() {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { // Firefox
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
                document.documentElement.msRequestFullscreen();
            }
        }); 

const keys = document.querySelectorAll('.key');
const inputField = document.getElementById('keyboard-input');

// Handle clicks from the virtual keyboard
keys.forEach(key => {
  key.addEventListener('click', () => {
    const keyValue = key.textContent;
    if (keyValue === 'Space') {
      inputField.value += ' ';
    } else if (keyValue === 'Enter') {
      inputField.value += '\n';
    } else if (keyValue === 'Backspace') {
      inputField.value = inputField.value.slice(0, -1); // Remove the last character
    } else {
      inputField.value += keyValue;
    }
  });
});
document.querySelectorAll('.skill-item img').forEach(img => {
  // Random size between 50px and 150px for both width and height
  const randomSize = Math.floor(Math.random() * (160 - 90 + 1)) + 90;

  img.style.width = randomSize + 'px';
  img.style.height = randomSize + 'px';
});


// Handle key presses from the physical keyboard
inputField.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    inputField.value += '\n';
    event.preventDefault(); // Prevents the default action of the Enter key (form submission in some cases)
  } else if (event.key === ' ') {
    inputField.value += ' ';
    event.preventDefault(); // Prevents the default action of the Space key (scrolling in some cases)
  } else if (event.key === 'Backspace') {
    inputField.value = inputField.value.slice(0, -1); // Remove the last character
    event.preventDefault(); // Prevents the default backspace behavior
  }
});
