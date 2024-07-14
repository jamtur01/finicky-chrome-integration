chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    tab.url &&
    tab.url.startsWith("http")
  ) {
    chrome.tabs
      .sendMessage(tabId, { action: "initialize" })
      .catch((error) => console.log("Error sending message to tab:", error));
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openInFinicky") {
    chrome.tabs.update(sender.tab.id, {
      url: "finicky://" + request.url.replace(/^https?:\/\//, ""),
    });
  }
});
