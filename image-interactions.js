
// homepage variable
let images = document.querySelectorAll(".image-container>a>img");
console.log(images);
let titles = document.querySelectorAll(".image-text")

//functions to change a CSS property (opacity)
function changeOpacity(){
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = "0.5";
        images[i].nextElementSibling.style.color = "gray";//change the text color to gray along with the image
      }
    this.style.opacity = '1';
    this.nextElementSibling.style.color = "white";
    } 

function resetOpacity() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = "1";
        images[i].nextElementSibling.style.color = "white"; //reset the text color to white
      }
    }


// event listeners for hover on
for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("mouseover", changeOpacity);
}

// event listeners for hover off
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseout", resetOpacity);
}


//intro page variable
let introImg = document.querySelector("#info-pic");
let prev = document.querySelector(".left-button");
let next = document.querySelector(".right-button");

let currentState = 0; //set a counter of img

//functions to update page content (change image by clicking button)
function changeImg(direction) {
  if (direction === "prev") {
    if (currentState === 1) {
      introImg.src = "info/info-400.png";
      introImg.srcset = "info/info-800.png 800w, info/info-1200.png 1200w";

      currentState = 0;
      prev.style.cursor = "not-allowed";
      prev.style.color = "lightgray";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";
    }

    else if (currentState === 2) {
      introImg.src = "info/info2-400.png";
      introImg.srcset = "info/info2-800.png 800w, info/info2-1200.png 1200w";
      currentState = 1;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";
    }

  } else if (direction === "next") {
    if (currentState === 0) {
      introImg.src = "info/info2-400.png";
      introImg.srcset = "info/info2-800.png 800w, info/info2-1200.png 1200w";
      currentState = 1;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "pointer";
      next.style.color = "lightblue";

    } else if (currentState === 1) {
      introImg.src = "info/info3-480.png";
      introImg.srcset = "info/info3-720.png 720w, info/info3-960.png 960w";
      currentState = 2;
      prev.style.cursor = "pointer";
      prev.style.color = "lightblue";
      next.style.cursor = "not-allowed";
      next.style.color = "lightgray";
    }
  }
}

//determine the direction
next.addEventListener("click", function () {
  if (currentState !== 2){
  changeImg("next");}
});

prev.addEventListener("click", function () {
  if (currentState !== 0){
  changeImg("prev");}
});

// Only shadow when mouse hover
next.addEventListener("mouseover", function () {
  next.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
});

next.addEventListener("mouseout", function () {
  next.style.textShadow = "none";
});

prev.addEventListener("mouseover", function () {
  prev.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
});

prev.addEventListener("mouseout", function () {
  prev.style.textShadow = "none";
});

