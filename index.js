var mySkills = ["Vivek Kumar", "Web Developer", "IoT Developer","Vivek Kumar"];
// Access the div with id "intro"
let introDiv = document.getElementById("intro");

// Function to display text after a delay
function displayAfterDelay(text, delay) {
    setTimeout(function () {
        document.getElementById("intro").innerHTML = text;
    }, delay);
}

// Call the function for each skill with a delay
for (var k = 0; k < 100; k++){
    for (var j = 0; j < mySkills.length; j++) {
        // Multiply delay by (j + 1) to stagger the display
        displayAfterDelay(mySkills[j], 1000 * (j + 1));
    }
}

var androidP1=["img/AP_14.jpg","img/AP_11.jpg","img/AP_12.jpg","img/AP_13.jpg",];
var ap1_index=0;

function imgNext(id) {
    const img = document.getElementById(id);
    ap1_index = (ap1_index + 1) % androidP1.length; // Calculate the next index
    img.src = androidP1[ap1_index]; // Update the source to the next image
}

function imgPrev(id) {
    const img = document.getElementById(id);
    ap1_index = (ap1_index - 1 + androidP1.length) % androidP1.length; // Calculate the previous index
    img.src = androidP1[ap1_index]; // Update the source to the previous image
}
