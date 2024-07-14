let modifierPressed = false;
let currentModifierKey = "Shift";
let extensionEnabled = true;

chrome.storage.sync.get(["modifierKey", "enabled"], (data) => {
  currentModifierKey = data.modifierKey || "Shift";
  extensionEnabled = data.enabled !== false;
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.modifierKey) {
    currentModifierKey = changes.modifierKey.newValue;
  }
  if (changes.enabled) {
    extensionEnabled = changes.enabled.newValue;
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
  if (extensionEnabled && modifierPressed) {
    const link = event.target.closest("a");
    if (link) {
      event.preventDefault();
      const finickyUrl = "finicky://" + link.href.replace(/^https?:\/\//, "");
      window.location.href = finickyUrl;

      // Reset modifierPressed after opening the link
      modifierPressed = false;
    }
  }
});

// Reset modifierPressed when the window loses focus
window.addEventListener("blur", function () {
  modifierPressed = false;
});
