const dropbox = document.getElementById("dropbox");

dropbox.addEventListener("dragover", function(event) {
  event.preventDefault();
  event.stopPropagation();
});

dropbox.addEventListener("dragenter", function(event) {
  event.preventDefault();
  event.stopPropagation();
});

dropbox.addEventListener("drop", function(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const file = event.dataTransfer.files[0];
  
  if (file) {
    const url = URL.createObjectURL(file);

    const link = document.createElement("a");
    link.href = url;

    // Specify the download folder within the user's Downloads folder
    const downloadsFolder = "";
    link.setAttribute("download", downloadsFolder + file.name);

    document.body.appendChild(link);
    link.click();
    
    setTimeout(function() {
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }, 0);
  }
});