var currentLanguage = localStorage.getItem("oispaF1Language") || "fi";

var translations = {
  fi: {
    title: "Oispa F1-kuski",
    score: "MM-pisteet",
    best: "Parhaat MM-pisteet",
    instructions: "Yhdistä samanlaiset kuskit saadaksesi paremman kuljettajan!",
    credits: "Oispa F1-kuski by <strong>Stumblerx.</strong>",
    codeCredit: 'Koodi käyttää <a href="http://oispakalussa.tk/" target="_blank">Oispa KaLussa</a>.<br />pelin koodia, kiitos heille mahtavasta koodista!',
    images: "Kuvat: Googlen kuvahaku.",
    pitButton: "Käy varikolla",
    pitDescription: "Kun käyt varikolla, menetät 1000 pistettä ja sillä välin mekaanikot vievät pois heikot kuskisi.",
    helpButton: "OHJEET",
    continueButton: "Jatka peliä",
    retryButton: "Yritä uudestaan",
    gameOver: "Hävisit!"
  },
  en: {
    title: "If I was F1-driver",
    score: "WDC-points",
    best: "Most WDC-points",
    instructions: "Combine same drivers to get more powerful driver!",
    credits: "If I was F1-driver by <strong>Stumblerx.</strong>",
    codeCredit: 'Code is using <a href="http://oispakalussa.tk/" target="_blank">Oispa KaLussa</a> games code, thank you for a great code!',
    images: "Images from Google.",
    pitButton: "Pit stop",
    pitDescription: "When you use the pits you lose 1000 points and mechanics take out all your weak drivers.",
    helpButton: "INSTRUCTIONS",
    continueButton: "Keep playing",
    retryButton: "Try again",
    gameOver: "You lost"
  }
};

var popupSayings = {
  fi: [
    "Parabolica!", "Paalupaikka!", "Ferrarii!", "Shamppanjaa!", "Softeilla!",
    "Mersu <3", "Verstappen!", "Hamilton!", "Monacoon!", "Podium!",
    "We are the champions", "Yksi kierros vielä!", "Box box!"
  ],
  en: [
    "Parabolica!", "Pole position!", "Ferrari!", "Champaigne!", "Slipstream!",
    "Merc <3", "Tu tu du Max Verstappen!", "Hamilton!", "To Monaco!", "Podium!",
    "We are the champions", "One more lap!", "Box box!"
  ]
};

function getPopupSayings() {
  return popupSayings[currentLanguage];
}

function applyLanguage(language) {
  currentLanguage = language === "en" ? "en" : "fi";
  localStorage.setItem("oispaF1Language", currentLanguage);
  document.documentElement.lang = currentLanguage === "en" ? "en" : "fi";

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    var key = element.getAttribute("data-i18n");
    if (translations[currentLanguage][key] !== undefined) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll("[data-i18n-score]").forEach(function (element) {
    var key = element.getAttribute("data-i18n-score");
    element.setAttribute("data-score-label", translations[currentLanguage][key]);
  });

  document.querySelectorAll(".language-button").forEach(function (button) {
    button.classList.toggle("active", button.getAttribute("data-language") === currentLanguage);
  });

  document.querySelector(".score-container").style.setProperty("--score-label", '"' + translations[currentLanguage].score + '"');
  document.querySelector(".best-container").style.setProperty("--best-label", '"' + translations[currentLanguage].best + '"');
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".language-button").forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-language"));
    });
  });
  applyLanguage(currentLanguage);
});
