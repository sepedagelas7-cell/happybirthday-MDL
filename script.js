// ================= AUTOPLAY MUSIC FIX =================
window.addEventListener('load', () => {

  const music = document.getElementById('bgMusic');

  music.play().catch(() => {
    // kalau autoplay diblokir, aktifkan saat klik pertama
    document.body.addEventListener('click', () => {
      music.play();
      music.muted = false;
    }, { once: true });
  });

  music.muted = false;
});


// ================= FLOATING HEARTS =================
const heartsContainer = document.getElementById("hearts");

const heartIcons = ["💜","✨","🌙","🎉","🌸"];

function spawnHearts(){

  for(let i = 0; i < 20; i++){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML =
      heartIcons[Math.floor(Math.random() * heartIcons.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 30 + 20) + "px";
    heart.style.animationDuration = (Math.random() * 6 + 4) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 8000);
  }
}

spawnHearts();


// ================= GIFT CLICK =================
const gift = document.getElementById("gift");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

gift.addEventListener("click", () => {

  const lid = document.querySelector(".lid");
  if(lid){
    lid.style.transform = "translateY(-25px) rotate(-12deg)";
  }

  popup.style.display = "flex";

  createConfetti();
});


// CLOSE POPUP
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === popup){
    popup.style.display = "none";
  }
});


// ================= CONFETTI (OPTIMIZED FIX) =================
function createConfetti(){

  const icons = ["💜","✨","🎉","🌸"];

  for(let i = 0; i < 15; i++){

    const confetti = document.createElement("div");

    confetti.innerHTML =
      icons[Math.floor(Math.random() * icons.length)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-20px";
    confetti.style.fontSize = (Math.random() * 20 + 15) + "px";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    document.body.appendChild(confetti);

    let posY = -20;
    const speed = Math.random() * 4 + 3;

    function fall(){

      posY += speed;

      confetti.style.transform =
        `translateY(${posY}px) rotate(${posY * 2}deg)`;

      if(posY < window.innerHeight){
        requestAnimationFrame(fall);
      } else {
        confetti.remove();
      }
    }

    requestAnimationFrame(fall);
  }
}


// ================= HEART EXPLOSION =================
function createHeartExplosion(x, y){

  const icons = ["💜","💖","💗","💞","💘","✨"];

  for(let i = 0; i < 25; i++){

    const heart = document.createElement("div");

    heart.innerHTML =
      icons[Math.floor(Math.random() * icons.length)];

    heart.style.position = "fixed";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 120 + 50;

    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;

    heart.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${dx}px, ${dy}px)`, opacity: 0 }
    ], {
      duration: 800,
      easing: "ease-out"
    });

    setTimeout(() => heart.remove(), 800);
  }
}


// ================= CLICK IMAGE EXPLOSION =================
const clickImg = document.getElementById("clickImg");

if(clickImg){

  clickImg.addEventListener("click", (e) => {

    const rect = clickImg.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    createHeartExplosion(x, y);
  });

}
