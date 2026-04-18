const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

let showingFirst = true;

/* PARALLAX */
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;

  img1.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.3}px))`;
  img2.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.3}px))`;
});

/* TRANSICIÓN AUTOMÁTICA */
setInterval(() => {
  if (showingFirst) {
    img1.style.opacity = "0";
    img2.style.opacity = "1";
  } else {
    img1.style.opacity = "1";
    img2.style.opacity = "0";
  }

  showingFirst = !showingFirst;
}, 3000); // cambia cada 2.5 segundos

/* CARDS */
function flip(card) {
  card.classList.toggle("active");
}

const items = document.querySelectorAll(".carousel-item");
let current = 0;

function updateCarousel() {
  items.forEach((item, index) => {
    item.classList.remove("active", "prev", "next", "hidden");

    if (index === current) {
      item.classList.add("active");
    } else if (index === (current - 1 + items.length) % items.length) {
      item.classList.add("prev");
    } else if (index === (current + 1) % items.length) {
      item.classList.add("next");
    } else {
      item.classList.add("hidden");
    }
  });
}

/* Click para avanzar */
document.querySelector(".carousel").addEventListener("click", () => {
  current = (current + 1) % items.length;
  updateCarousel();
});

/* Inicializar */
updateCarousel();
