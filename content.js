let shiftPressed = false;

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    shiftPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "Shift") {
    shiftPressed = false;
  }
});

document.addEventListener("click", function (event) {
  if (shiftPressed) {
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
