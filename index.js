const KEY = "JHGEJSADKLGKLSFDSFFJ"

const CAT_IMAGES_COUNT = 20

window.onload = function() {
  var body = document.getElementsByTagName('body');

  chrome.storage.sync.get([KEY], function(result) {
    // judges as enabled when the value is empty since it must be right after installing the extension
    const enabled = result[KEY] || result[KEY] === undefined

    const catImageIndex= Math.floor(Math.random() * (CAT_IMAGES_COUNT - 1)) + 1  
    const path = chrome.runtime.getURL(`/cat_images/${catImageIndex}.jpeg`)

    if(enabled) {
      body[0].innerHTML = `
      <div style="width: 100vw; height: 100vh; display: flex; justify-content:center; align-items: center">
        <img src="${path}" alt="cat" />
      </div>`;
    }
  });
};