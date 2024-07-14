let modifierPressed = false;
let currentModifierKey = "Shift";

chrome.storage.sync.get("modifierKey", (data) => {
  currentModifierKey = data.modifierKey || "Shift";
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
  if (modifierPressed) {
    const link = event.target.closest("a");
    if (link) {
      event.preventDefault();
      chrome.runtime
        .sendMessage({
          action: "openInFinicky",
          url: link.href,
        })
        .catch((error) =>
          console.log("Error sending message to background:", error)
        );
    }
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "initialize") {
    sendResponse({ status: "initialized" });
  }
});
