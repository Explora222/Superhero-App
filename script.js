const heroInfo = {
  "Spiderman": "Bitten by a radioactive spider, Peter Parker gains superhuman strength and agility.",
  "Wonder Woman": "An Amazonian warrior princess with strength, combat skills, and the Lasso of Truth.",
  "Captain America": "Steve Rogers is a super-soldier and leader of the Avengers with an indestructible shield.",
  "Iron Man": "Tony Stark is a genius billionaire who fights evil in a high-tech armored suit.",
  "Captain Marvel": "Carol Danvers possesses cosmic powers and is one of the most powerful heroes in the universe.",
  "Black Panther": "T'Challa, king of Wakanda, uses advanced tech and warrior skills to protect his people."
};

const cards = document.querySelectorAll('.hero-card');
const modal = document.getElementById('modal');
const heroNameEl = document.getElementById('hero-name');
const heroInfoEl = document.getElementById('hero-info');
const closeBtn = document.getElementById('close-btn');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const hero = card.dataset.hero;
    heroNameEl.textContent = hero;
    heroInfoEl.textContent = heroInfo[hero] || "Info coming soon!";
    modal.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});
