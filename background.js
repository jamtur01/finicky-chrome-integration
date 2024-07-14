// Initialize extension state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get(["modifierKey", "enabled"], (data) => {
    if (!data.modifierKey) {
      chrome.storage.sync.set({ modifierKey: "Shift" });
    }
    if (data.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true });
    }
  });
});

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.enabled) {
    updateIcon(changes.enabled.newValue);
  }
});

// Function to update the extension icon
function updateIcon(enabled) {
  const path = enabled
    ? {
        16: "icons/eight16.png",
        32: "icons/eight32.png",
        128: "icons/eight128.png",
      }
    : {
        16: "icons/eight16-disabled.png",
        32: "icons/eight32-disabled.png",
        128: "icons/eight128-disabled.png",
      };

  chrome.action.setIcon({ path: path });
}

// Initialize icon state
chrome.storage.sync.get("enabled", (data) => {
  updateIcon(data.enabled !== false);
});

// Optional: Listen for tab updates to refresh content script
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.startsWith("http")
  ) {
    chrome.tabs
      .sendMessage(tabId, { action: "checkStatus" })
      .catch((error) => console.log("Error sending message to tab:", error));
  }
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "sendToFinicky",
    title: "Send to Finicky",
    contexts: ["link"],
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "sendToFinicky") {
    const finickyUrl = "finicky://" + info.linkUrl.replace(/^https?:\/\//, "");
    chrome.tabs.update(tab.id, { url: finickyUrl });
  }
});
