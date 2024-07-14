// Initialize extension state
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.get("modifierKey", (data) => {
    if (data.modifierKey === undefined) {
      chrome.storage.sync.set({ modifierKey: "None" });
    }
  });

  // Create context menu item
  chrome.contextMenus.create({
    id: "openInFinicky",
    title: "Open in Finicky",
    contexts: ["link"],
  });
});

// Handle context menu item click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openInFinicky") {
    const finickyUrl = "finicky://" + info.linkUrl.replace(/^https?:\/\//, "");
    chrome.tabs.update(tab.id, { url: finickyUrl });
  }
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
