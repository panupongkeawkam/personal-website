var screen_height = screen.height.toString() + "px";
var screen_width = screen.width.toString() + "px";
console.log(screen_width);
document.querySelector(":root").style.setProperty("--device-height", screen_height);
document.querySelector(":root").style.setProperty("--device-width", screen_width);