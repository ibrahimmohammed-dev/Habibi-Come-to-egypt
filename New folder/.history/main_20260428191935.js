const selected = { days: null, type: null };

const plans = {
  "1-history": [
    { title: "Cairo in a Day", places: ["🏛 The Great Pyramids", "🏺 Egyptian Museum", "🕌 Khan El Khalili"] }
  ],
  "1-nature": [
    { title: "Red Sea Escape", places: ["🤿 Ras Mohammed Reserve", "🏖 Sharm El Sheikh Beach", "🐠 Snorkeling Tour"] }
  ],
  "1-mix": [
    { title: "Best of Cairo", places: ["🏛 Pyramids of Giza", "🌊 Nile Corniche", "🕌 Al Azhar Mosque"] }
  ],
  "3-history": [
    { title: "Ancient Cairo", places: ["🏛 Pyramids & Sphinx", "🏺 Egyptian Museum"] },
    { title: "Upper Egypt", places: ["🛕 Luxor Temple", "⚱️ Valley of the Kings"] },
    { title: "Aswan", places: ["🛶 Philae Temple", "🌅 Nubian Village", "🏞 Aswan Dam"] }
  ],
  "3-nature": [
    { title: "Sinai Adventure", places: ["⛰ Mount Sinai", "🌿 St. Catherine Monastery"] },
    { title: "Red Sea Day", places: ["🤿 Ras Mohammed", "🐠 Coral Reefs Tour"] },
    { title: "Desert Safari", places: ["🏜 White Desert", "🌄 Black Desert", "🌙 Bedouin Camp"] }
  ],
  "3-mix": [
    { title: "Cairo Highlights", places: ["🏛 Pyramids", "🏺 Museum", "🕌 Old Cairo"] },
    { title: "Luxor Temples", places: ["🛕 Karnak Temple", "⚱️ Valley of the Kings"] },
    { title: "Hurghada", places: ["🏖 Beach Day", "🤿 Diving", "🛥 Boat Trip"] }
  ],
  "7-history": [
    { title: "Giza & Cairo", places: ["🏛 Pyramids", "🏺 Egyptian Museum"] },
    { title: "Old Cairo", places: ["🕌 Al Azhar", "⛪ Coptic Cairo", "🏰 Saladin Citadel"] },
    { title: "Alexandria", places: ["📚 Bibliotheca Alexandrina", "🏛 Catacombs"] },
    { title: "Luxor Day 1", places: ["🛕 Karnak Temple", "🛕 Luxor Temple"] },
    { title: "Luxor Day 2", places: ["⚱️ Valley of Kings", "🗿 Colossi of Memnon"] },
    { title: "Aswan", places: ["🛶 Philae Temple", "🌅 Nubian Village"] },
    { title: "Abu Simbel", places: ["🗿 Abu Simbel Temples", "🚢 Nile Cruise"] }
  ],
  "7-nature": [
    { title: "Cairo", places: ["🌊 Nile River Walk", "🌿 Al Azhar Park"] },
    { title: "Sinai", places: ["⛰ Mount Sinai", "🌿 St. Catherine"] },
    { title: "Sharm El Sheikh", places: ["🤿 Ras Mohammed", "🐠 Coral Gardens"] },
    { title: "Hurghada", places: ["🏖 Red Sea Beach", "🛥 Island Tour"] },
    { title: "White Desert", places: ["🏜 White Desert NP", "🌄 Black Desert"] },
    { title: "Siwa Oasis", places: ["🏊 Cleopatra Spring", "🌴 Date Farms"] },
    { title: "Wadi El Rayan", places: ["💧 Waterfalls", "🦅 Bird Watching"] }
  ],
  "7-mix": [
    { title: "Cairo Classics", places: ["🏛 Pyramids", "🏺 Museum"] },
    { title: "Old Cairo", places: ["🕌 Khan El Khalili", "🏰 Citadel"] },
    { title: "Red Sea", places: ["🤿 Snorkeling", "🏖 Beach"] },
    { title: "Luxor", places: ["🛕 Karnak", "⚱️ Valley of Kings"] },
    { title: "Aswan", places: ["🛶 Philae", "🌅 Nubian Village"] },
    { title: "Desert Day", places: ["🏜 White Desert", "🌙 Bedouin Camp"] },
    { title: "Alexandria", places: ["📚 Bibliotheca", "🌊 Corniche"] }
  ]
};

function selectOpt(btn, group) {
  document.querySelectorAll(`#${group}-group .opt-btn`).forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selected[group] = btn.dataset.val;
}

function generatePlan() {
  if (!selected.days || !selected.type) {
    alert('Please select number of days and trip type first!');
    return;
  }

  const key = `${selected.days}-${selected.type}`;
  const plan = plans[key];

  const grid = document.getElementById('days-grid');
  const title = document.getElementById('result-title');
  const result = document.getElementById('tp-result');

  const typeLabel = { history: 'Historical', nature: 'Nature', mix: 'Mixed' }[selected.type];
  title.innerHTML = `Your <span>${selected.days}-Day ${typeLabel}</span> Egypt Journey`;

  grid.innerHTML = plan.map((day, i) => `
    <div class="day-card">
      <div class="day-num">${i + 1}</div>
      <div class="day-info">
        <div class="day-title">${day.title}</div>
        <div class="day-places">
          ${day.places.map(p => `<span class="place-tag">${p}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  result.classList.add('show');
  result.scrollIntoView({ behavior: 'smooth', block: 'start' });
}