document.addEventListener('DOMContentLoaded', function() {
    var openFacebookButton = document.getElementById('Viewer');
    openFacebookButton.addEventListener('click', function() {
      chrome.tabs.create({ url: 'localhost:3000/files' });
    });
  });
  