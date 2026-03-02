console.log("Script started");


let clicks = 0;

// variable to store click display h1
let clickDisplay = document.getElementById("click-display");
``
// set inital text
clickDisplay.innerText = "Clicks: " + clicks;

// callled when the potato is clicked
function hanfClick() {
    console.log("click");

    // Add one to click count
    clicks = clicks + 1;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;
}