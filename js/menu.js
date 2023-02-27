function buttons(){
    var buttons = document.getElementById("buttons");
    if (buttons.style.display === "none") {
        buttons.style.display = "block";
    } else {
        buttons.style.display = "none";
    }
  }

  
function Arena(){
    var Arena = document.getElementById("Arena");
    var Devices = document.getElementById("Devices");
    var Settings = document.getElementById("Settings");
    var Tournaments = document.getElementById("Tournaments");
    if (Arena.style.display === "none") {
        Arena.style.display = "block";
        Devices.style.display = "none";
        Settings.style.display = "none";
        Tournaments.style.display = "none";
    } else {
        Arena.style.display = "none";
    }
}
function Devices(){
    var Devices = document.getElementById("Devices");
    var Arena = document.getElementById("Arena");
    var Settings = document.getElementById("Settings");
    var Tournaments = document.getElementById("Tournaments");
    if (Devices.style.display === "none") {
        Devices.style.display = "block";
        Arena.style.display = "none";
        Settings.style.display = "none";
        Tournaments.style.display = "none";
    } else {
        Devices.style.display = "none";
    }
}

function Tournaments(){
    var Tournaments = document.getElementById("Tournaments");
    var Arena = document.getElementById("Arena");
    var Settings = document.getElementById("Settings");
    var Devices = document.getElementById("Devices");
    if (Tournaments.style.display === "none") {
        Tournaments.style.display = "block";
        Devices.style.display = "none";
        Settings.style.display = "none";
        Arena.style.display = "none";
    } else {
        Tournaments.style.display = "none";
    }
}


function Settings(){
    var Settings = document.getElementById("Settings");
    var Arena = document.getElementById("Arena");
    var Tournaments = document.getElementById("Tournaments");
    var Devices = document.getElementById("Devices");
    if (Settings.style.display === "none") {
        Settings.style.display = "block";
        Devices.style.display = "none";
        Arena.style.display = "none";
        Tournaments.style.display = "none";
    } else {
        Settings.style.display = "none";
    }
}