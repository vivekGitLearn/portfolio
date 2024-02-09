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
var androidP2=["img/AP_21.jpg","img/AP_22.jpg"];
var androidP3=["img/AP_31.jpg","img/AP_32.jpg"];
var ap1_index=0;
var ap2_index=0;
var ap3_index=0;

function imgNext(id) {
    const img = document.getElementById(id);
    if (id === 'AP1') {
        ap1_index = (ap1_index + 1) % androidP1.length;
        img.src = androidP1[ap1_index];
    } else if (id === 'AP2') {
        ap2_index = (ap2_index + 1) % androidP2.length;
        img.src = androidP2[ap2_index];
    }
    else if (id === 'AP3') {
        ap3_index = (ap3_index + 1) % androidP3.length;
        img.src = androidP3[ap3_index];
    }
}

function imgPrev(id) {
    const img = document.getElementById(id);
    if (id === 'AP1') {
        ap1_index = (ap1_index - 1 + androidP1.length) % androidP1.length;
        img.src = androidP1[ap1_index];
    } else if (id === 'AP2') {
        ap2_index = (ap2_index - 1 + androidP2.length) % androidP2.length;
        img.src = androidP2[ap2_index];
    }
    else if (id === 'AP3') {
        ap3_index = (ap3_index - 1 + androidP3.length) % androidP3.length;
        img.src = androidP3[ap3_index];
    }
}