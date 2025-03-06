// // Function to modify the playback speed of the video
// function setPlaybackSpeed(speed) {
//     // Get the video element on the page
//     const videoElement = document.querySelector('video');
  
//     // Check if a video element exists
//     if (videoElement) {
//       // Set the playback speed of the video
//       videoElement.playbackRate = speed;
//       return { success: true };
//     } else {
//       return { success: false, message: 'Video element not found.' };
//     }
//   }
  
//   // Listen for messages from the extension
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     // Check if the message is to modify the playback speed
//     if (request.action === 'setPlaybackSpeed') {
//       const result = setPlaybackSpeed(request.speed);
//       sendResponse(result);
//     }
//   });

function setYouTubePlaybackSpeed(speed) {
    const player = document.querySelector('video');
  
    if (player) {
      player.playbackRate = speed;
      return { success: true };
    } else {
      return { success: false, message: 'YouTube player element not found.' };
    }
  }
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'setPlaybackSpeed') {
      const result = setYouTubePlaybackSpeed(request.speed);
      sendResponse(result);
    }
  });