  // AUTOPLAY FIX
    window.addEventListener('load', () => {

      const music = document.getElementById('bgMusic');

      // coba autoplay
      music.play();

      // unmute setelah play
      music.muted = false;

      // fallback jika browser blokir
      document.body.addEventListener('click', () => {
        music.play();
        music.muted = false;
      }, { once:true });

    });

// FLOATING HEARTS

const hearts =
document.getElementById("hearts");

for(let i = 0; i < 20; i++){

  const heart =
  document.createElement("div");

  heart.classList.add("heart");

  const icons = ["💜","✨","🌙","🎉","🌸"];

  heart.innerHTML =
  icons[Math.floor(Math.random() * icons.length)];

  heart.style.left =
  Math.random() * 100 + "vw";

  heart.style.fontSize =
  Math.random() * 30 + 20 + "px";

  heart.style.animationDuration =
  Math.random() * 6 + 4  + "s";

  hearts.appendChild(heart);
}

// GIFT CLICK

const gift =
document.getElementById("gift");

const popup =
document.getElementById("popup");

const closeBtn =
document.getElementById("closeBtn");

gift.addEventListener("click", () => {

  // OPEN LID
  const lid =
  document.querySelector(".lid");

  lid.style.transform =
  "translateY(-25px) rotate(-12deg)";

  // SHOW POPUP
  popup.style.display = "flex";

  // CONFETTI
  createConfetti();
});

// CLOSE

closeBtn.addEventListener("click", () => {

  popup.style.display = "none";
});

// OUTSIDE CLICK

window.addEventListener("click", (e) => {

  if(e.target === popup){

    popup.style.display = "none";
  }
});

// CONFETTI

function createConfetti(){

  for(let i = 0; i < 150; i++){

    const confetti =
    document.createElement("div");

    confetti.innerHTML =
    ["💜","✨","🎉","🌸"][Math.floor(Math.random() * 4)];

    confetti.style.position = "fixed";

    confetti.style.left =
    Math.random() * window.innerWidth + "px";

    confetti.style.top =
    "-20px";

    confetti.style.fontSize =
    Math.random() * 20 + 15 + "px";

    confetti.style.zIndex = "999";

    document.body.appendChild(confetti);

    let topPos = -20;

    const speed =
    Math.random() * 5 + 3;

    const fall = setInterval(() => {

      topPos += speed;

      confetti.style.top =
      topPos + "px";

      confetti.style.transform =
      `rotate(${topPos * 2}deg)`;

      if(topPos > window.innerHeight){

        clearInterval(fall);

        confetti.remove();
      }

    },20);
  }

/////

function createHeartExplosion(x, y){

  const hearts = ["💜","💖","💗","💞","💘","✨"];

  for(let i = 0; i < 25; i++){

    const heart = document.createElement("div");
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.position = "fixed";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    // arah random
    const angle = Math.random() * 2 * Math.PI;
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

    setTimeout(() => {
      heart.remove();
    }, 800);
  }
}

const clickImg = document.getElementById("clickImg");

clickImg.addEventListener("click", (e) => {

  const rect = clickImg.getBoundingClientRect();

  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  createHeartExplosion(x, y);

});


}
