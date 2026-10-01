// ============================================================
// PUBLIC LINKS — ADD YOUR OWN LINKS HERE
// ============================================================
// Example:
// const SCHOOLP3_PLAY_STORE = "https://play.google.com/store/apps/...";
// Leave a link empty ("") if you don't want to show that button.

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-N7Jb8xNANBrNmNqWxZJA2D9OWIydf5jQ7Do58Shk8CUKMQ/viewform?usp=publish-editor";
const SCHOOLP3_PLAY_STORE = "https://play.google.com/store/apps/details?id=com.raunak.schoolp3";
const SCHOOLP3_WEBSITE = "";
const VEHICLE_DIARY_PLAY_STORE = "https://play.google.com/store/apps/details?id=fleet.vehical.manager";
const VEHICLE_DIARY_WEBSITE = "";
const OWPLINKS_WEBSITE = "https://owplinks.in/?i=1";
const OWPLINKS_GITHUB = "";

// Google Form button
const formButton = document.getElementById("projectFormBtn");
if (GOOGLE_FORM_URL) {
  formButton.href = GOOGLE_FORM_URL;
} else {
  formButton.addEventListener("click", function(e) {
    e.preventDefault();
    alert("Add your Google Form link in script.js first.");
  });
}

// Project links
const links = {
  "SchoolP3": [
    ["Play Store ↗", SCHOOLP3_PLAY_STORE],
    ["Website ↗", SCHOOLP3_WEBSITE]
  ],
  "Vehicle Diary": [
    ["Play Store ↗", VEHICLE_DIARY_PLAY_STORE],
    ["Website ↗", VEHICLE_DIARY_WEBSITE]
  ],
  "OWPLinks": [
    ["Visit Website ↗", OWPLINKS_WEBSITE],
    ["GitHub ↗", OWPLINKS_GITHUB]
  ]
};

document.querySelectorAll(".project").forEach(card => {
  const title = card.querySelector("h3")?.textContent.trim();
  const buttons = card.querySelectorAll(".project-link");
  if (!links[title]) return;

  links[title].forEach((item, index) => {
    if (buttons[index] && item[1]) {
      buttons[index].href = item[1];
      buttons[index].target = "_blank";
      buttons[index].rel = "noopener";
      buttons[index].classList.remove("disabled-link");
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
