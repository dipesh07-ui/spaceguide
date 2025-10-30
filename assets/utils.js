const facts = [
  "India was the first Asian nation to reach Mars orbit on its first attempt.",
  "The Milky Way galaxy is estimated to contain 100–400 billion stars.",
  "A day on Venus is longer than a year on Venus!",
  "Black holes can warp space and time itself.",
  "ISRO launched 104 satellites on a single rocket in 2017, setting a world record.",
  "Pluto, once a planet, is now considered a dwarf planet.",
  "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "The observable universe is about 93 billion light-years in diameter.",
  "The largest volcano in the Solar System is Olympus Mons on Mars.",
  "You are made of star stuff—many elements in your body formed inside stars."
];

function showRandomFact() {
  const factBox = document.getElementById('fun-fact');
  if (!factBox) return;
  const randomIdx = Math.floor(Math.random() * facts.length);
  factBox.textContent = facts[randomIdx];
}

document.addEventListener('DOMContentLoaded', showRandomFact);
