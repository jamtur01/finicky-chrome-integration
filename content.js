let modifierPressed = false;
let currentModifierKey = "None";

chrome.storage.sync.get("modifierKey", (data) => {
  currentModifierKey = data.modifierKey || "None";
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.modifierKey) {
    currentModifierKey = changes.modifierKey.newValue;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === currentModifierKey) {
    modifierPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === currentModifierKey) {
    modifierPressed = false;
  }
});

document.addEventListener("click", function (event) {
  if (currentModifierKey === "None" || modifierPressed) {
    const link = event.target.closest("a");
    if (link) {
      event.preventDefault();
      const finickyUrl = "finicky://" + link.href.replace(/^https?:\/\//, "");
      window.location.href = finickyUrl;
    }
  }
});

// Reset modifier state when the window loses focus
window.addEventListener("blur", function () {
  modifierPressed = false;
});
