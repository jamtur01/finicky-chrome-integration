document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("enableExtension");
  const optionsButton = document.getElementById("openOptions");

  chrome.storage.sync.get("enabled", (data) => {
    checkbox.checked = data.enabled !== false;
  });

  checkbox.addEventListener("change", () => {
    chrome.storage.sync.set({ enabled: checkbox.checked });
  });

  optionsButton.addEventListener("click", () => {
    chrome.runtime.openOptionsPage();
  });
});
