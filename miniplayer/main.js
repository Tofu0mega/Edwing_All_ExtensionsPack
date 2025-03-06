const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchYouTube);

function searchYouTube() {
  const searchInput = document.getElementById("search-input").value.trim();
  if (searchInput) {
    const searchUrl = `https://www.youtube.com/results?search_query=${searchInput}`;
    const windowFeatures = "width=400,height=300,resizable=yes";
    window.open(searchUrl, "YouTube", windowFeatures);
  }
}

