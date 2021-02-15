const KEY = "JHGEJSADKLGKLSFDSFFJ"

window.onload = function() {
  chrome.storage.sync.get([KEY], function(result) {
    const enabled = !!result[KEY]

    const iconPath = enabled ? "cat_disabled.png" : "cat_enabled.png"
    chrome.browserAction.setIcon({path: iconPath}, () => {
      chrome.storage.sync.set({[KEY]: !enabled}, () => window.close());
    });
  });
};