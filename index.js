if (sessionStorage.getItem("pageLoaded")) {
    // The page has been loaded before (reloaded)
    // Add your JavaScript code here that you want to run on reload.
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + dice1 +".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + dice2 +".png");

    if (dice1 > dice2){ 
        document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"; 
    }

    else if (dice1 < dice2){
        document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"; 
    }

    else {
        document.querySelector("h1").innerHTML = "Draw!"; 
    }        
} 
else {
    // The page is being loaded for the first time
    // The normal HTML will show (Reload to play)
}

// Set a flag in sessionStorage to indicate that the page has been loaded
sessionStorage.setItem("pageLoaded", "true");