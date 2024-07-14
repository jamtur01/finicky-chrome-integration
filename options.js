document.addEventListener("DOMContentLoaded", () => {
  const modifierKeySelect = document.getElementById("modifierKey");
  const status = document.getElementById("status");

  chrome.storage.sync.get("modifierKey", (data) => {
    modifierKeySelect.value = data.modifierKey || "None";
  });

  function saveOptions() {
    chrome.storage.sync.set({ modifierKey: modifierKeySelect.value }, () => {
      status.textContent = "Options saved.";
      setTimeout(() => {
        status.textContent = "";
      }, 2000);
    });
  }

  modifierKeySelect.addEventListener("change", saveOptions);
});
