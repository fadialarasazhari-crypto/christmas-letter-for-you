/* =====================
   CHRISTMAS LOVE LETTER
   Interactive JavaScript
   ===================== */

// ================= MUSIC CONTROL =================
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
let isPlaying = false;

music.volume = 0.25;

musicBtn.addEventListener('click', () => {
  if (!isPlaying) {
    music.play();
    musicBtn.innerText = '⏸️';
  } else {
    music.pause();
    musicBtn.innerText = '🎵';
  }
  isPlaying = !isPlaying;
});

// ================= SCROLL TO LETTER =================
const openLetterBtn = document.getElementById('open-letter-btn');
const letterSection = document.getElementById('love-letter');

openLetterBtn.addEventListener('click', () => {
  letterSection.scrollIntoView({ behavior: 'smooth' });
});

// ================= REVEAL ON SCROLL =================
const revealElements = document.querySelectorAll('section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - 120) {
      section.classList.add('reveal-active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ================= TYPEWRITER EFFECT =================
const letterParagraphs = document.querySelectorAll('.letter-text p');
let delay = 0;

letterParagraphs.forEach((p) => {
  const text = p.innerHTML;
  p.innerHTML = '';
  p.style.opacity = 1;

  let index = 0;

  setTimeout(() => {
    const typing = setInterval(() => {
      if (index < text.length) {
        p.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(typing);
      }
    }, 18);
  }, delay);

  delay += text.length * 18 + 300;
});

// ================= SNOW EFFECT =================
const snowContainer = document.createElement('div');
snowContainer.classList.add('snow-container');
document.body.appendChild(snowContainer);

for (let i = 0; i < 40; i++) {
  const snow = document.createElement('span');
  snow.classList.add('snowflake');
  snow.style.left = Math.random() * 100 + 'vw';
  snow.style.animationDuration = 5 + Math.random() * 10 + 's';
  snow.style.opacity = Math.random();
  snow.style.fontSize = 10 + Math.random() * 20 + 'px';
  snow.innerText = '❄';
  snowContainer.appendChild(snow);
}

// ================= CSS FOR SNOW & REVEAL =================
const style = document.createElement('style');
style.innerHTML = `
  section {
    opacity: 0;
    transform: translateY(40px);
    transition: all 1.2s ease;
  }

  .reveal-active {
    opacity: 1;
    transform: translateY(0);
  }

  .snow-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999;
  }

  .snowflake {
    position: absolute;
    top: -10px;
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes fall {
    to {
      transform: translateY(110vh);
    }
  }
`;

document.head.appendChild(style);
