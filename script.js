
console.log("Script started");
// Variable track number of clicks
let clicks = 0;

// variable to store click display h1
let clickDisplay = document.getElementById("click-display");

// set inital text
clickDisplay.innerText = "Clicks: " + clicks;

// callled when the potato is clicked
function handleClick() {
    console.log("Click");

    // Add one to click count
    clicks = clicks + 1;

    // Update display
    clickDisplay.innerText = "Clicks: " + clicks;

    if (clicks == 10) {
        alert(" you have reached 10 clicks");
    }
}