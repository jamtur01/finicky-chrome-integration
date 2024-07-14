document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("modifierKey");
  const status = document.getElementById("status");

  chrome.storage.sync.get("modifierKey", (data) => {
    select.value = data.modifierKey || "Shift";
  });

  select.addEventListener("change", () => {
    chrome.storage.sync.set({ modifierKey: select.value }, () => {
      status.textContent = "Options saved.";
      setTimeout(() => {
        status.textContent = "";
      }, 2000);
    });
  });
});
