chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "checkModifiers") {
    sendResponse({shiftKey: event.shiftKey});
  }
});

document.addEventListener('click', function(event) {
  if (event.shiftKey) {
    const link = event.target.closest('a');
    if (link) {
      event.preventDefault();
      const finickyUrl = 'finicky://' + link.href.replace(/^https?:\/\//, '');
      window.location.href = finickyUrl;
    }
  }
});
