chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'setPlaybackSpeed' && request.speed) {
    console.log('Received setPlaybackSpeed message:', request.speed);
    chrome.tabs.executeScript({
      code: `document.getElementsByTagName("video")[0].playbackRate = ${request.speed};`
    }, function (result) {
      if (chrome.runtime.lastError) {
        console.error('Failed to execute script:', chrome.runtime.lastError);
        sendResponse({ success: false, message: chrome.runtime.lastError.message });
      } else {
        console.log('Playback speed set successfully:', request.speed);
        sendResponse({ success: true });
      }
    });
  }
});