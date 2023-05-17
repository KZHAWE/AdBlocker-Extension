chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return { cancel: true };
  },
  {
    urls: [
      "*://*.doubleclick.net/*",
      "*://*.googleadservices.com/*",
      // Add more ad domain patterns here
    ]
  },
  ["blocking"]
);
