// Initialize images in an array
var picPaths = ['linux-game.webp','bro linux.webp','what-is-linux.png'];
// An index to track the contender image 
var imageIndex = 0;
var bannerImage; 

// An event callback for starting the interval
function startInterval() {
 setInterval(displayNextImage, 5000);
}

function displayNextImage() {
  bannerImage.src = picPaths[imageIndex];
  if(imageIndex === (picPaths.length-1)) {
    imageIndex = 0;
  }
  else {
    imageIndex = imageIndex + 1;
  }
}

window.onload=function() {
 bannerImage = document.getElementById('TheImg');
 startInterval();
}