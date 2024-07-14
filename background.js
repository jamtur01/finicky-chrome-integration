chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  if (details.frameId !== 0) return; // Only handle main frame navigation

  chrome.tabs.get(details.tabId, function(tab) {
    chrome.windows.get(tab.windowId, function(window) {
      if (window.incognito) {
        // This is a private window, handle differently if needed
        return;
      }

      chrome.tabs.sendMessage(details.tabId, {action: "checkModifiers"}, function(response) {
        if (response && response.shiftKey) {
          // Shift key is pressed, redirect to Finicky
          chrome.tabs.update(details.tabId, {
            url: 'finicky://' + details.url.replace(/^https?:\/\//, '')
          });
        }
      });
    });
  });
});

