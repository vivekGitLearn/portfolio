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