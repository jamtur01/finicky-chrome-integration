document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("modifierKey");

  chrome.storage.sync.get("modifierKey", (data) => {
    select.value = data.modifierKey || "Shift";
  });

  select.addEventListener("change", () => {
    chrome.storage.sync.set({ modifierKey: select.value });
  });
});
