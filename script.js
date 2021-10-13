var screenHeight = screen.height.toString() + "px";
var screenWidth = screen.width.toString() + "px";
document.querySelector(":root").style.setProperty("--device-height", screenHeight);
document.querySelector(":root").style.setProperty("--device-width", screenWidth);

window.onscroll = function () {
  var value = scrollY;
  if (35 - value / 30 > 0) {
    document.getElementsByClassName("child-1-plat")[0].style.width = `${35 - value / 30}%`;
  }
  if (30 - value / 40 > 0) {
    document.getElementsByClassName("child-1-plat")[1].style.width = `${30 - value / 40}%`;
  }
  if (20 - value / 60 > 0) {
    document.getElementsByClassName("child-1-plat")[2].style.width = `${20 - value / 60}%`;
    document.getElementsByClassName("child-1-plat")[2].style.color = `hsl(0, 100%, 100%, ${20 - value / 20}%)`;
  }

  if (value > 200) {
    document.getElementsByClassName("child-1-plat")[2].innerHTML = ``;
  } else {
    document.getElementsByClassName("child-1-plat")[2].innerHTML = `<br>TECHNOLOGY<br>RPG GAMES<br>INDY
    MUSIC<br>CHILLING<br>MINIMAL<br>BLACK<br>SIMPLE<br>NOODLE<br>MARVEL<br>FONT-EN<br>SAD SONG<br>54 WPM<br>RED
    SWITCH<br>SILENT`;
  }

  if (value >= screen.height) {
    document.getElementById("gototop").style.width = "calc(var(--device-width) * 0.03)";
    document.getElementById("gototop").style.height = "calc(var(--device-width) * 0.03)";
    document.getElementById("gototop").style.padding = "12px";
  } else {
    document.getElementById("gototop").style.width = "0px";
    document.getElementById("gototop").style.height = "0px";
    document.getElementById("gototop").style.padding = "0px";
  }
}

var pictureGallery = ["pictures/event/1.png", "pictures/event/2.png", "pictures/event/3.png", "pictures/event/4.png", "pictures/event/5.png", "pictures/event/6.png", "pictures/event/7.png", ];

function pictureToggle(direction) { 
  if (direction == 'back') {
    pictureGallery.unshift(pictureGallery.pop());
  } else if (direction == 'next') {
    pictureGallery.push(pictureGallery.shift());
  }
  document.getElementById("picture").style.backgroundImage = `url(${pictureGallery[0]})`;
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copy to clipboard.");
}