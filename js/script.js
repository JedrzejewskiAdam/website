function Tracker() {
    var x = document.getElementById("Tracker");
    var y = document.getElementById("menuopen");
    var z = document.getElementById("lastvideo");
    var ytmenu = document.getElementById("ytmenu");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      ytmenu.style.display = "none";
    } else {
      x.style.display = "none";
    }
}

function Menu() {
  var x = document.getElementById("menuopen");
  var y = document.getElementById("Tracker");
  var z = document.getElementById("lastvideo");
  var ytmenu = document.getElementById("ytmenu");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    ytmenu.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

function Lastvideo(){
  var z = document.getElementById("lastvideo");
  var x = document.getElementById("Tracker");
  var y = document.getElementById("menuopen");
  var ytmenu = document.getElementById("ytmenu");
  if (z.style.display === "none") {
    z.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    ytmenu.style.display = "none";
  } else {
    z.style.display = "none";
  }
}

function ytmenu(){
  var ytmenu = document.getElementById("ytmenu");
  var x = document.getElementById("Tracker");
  var y = document.getElementById("menuopen");
  var lastwideo = document.getElementById("lastvideo");
  if (ytmenu.style.display === "none") {
    ytmenu.style.display = "block";
    y.style.display = "none";
    x.style.display = "none";
    lastwideo.style.display = "none";
  } else {
    ytmenu.style.display = "none";
  }
}

function Socialedown(){
    document.getElementById('Social').scrollIntoView();
}