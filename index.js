const KEY = "JHGEJSADKLGKLSFDSFFJ"

window.onload = function() {
  var body = document.getElementsByTagName('body');

  chrome.storage.sync.get([KEY], function(result) {
    const enabled = !!result[KEY]

    if(enabled) {
      body[0].innerHTML = `
      <div style="width: 100vw; height: 100vh; display: flex; justify-content:center; align-items: center">
        <img src="http://placekitten.com/480/480" alt="cat" />
        ${enabled}
      </div>`;
    }
  });
};