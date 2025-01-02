// selects all buttons

var allButtons = document.querySelectorAll(".drum");


// ieterate and check for clicks

for (var i = 0; i < allButtons.length; i++) {

    allButtons[i].addEventListener("click", switchSounds);
}


// makes sound for each button clicked

function switchSounds () {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
}


//detects keyboard press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});


// function to make sound

function makeSound(key) {
    switch (key) {

        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        default: console.log(buttonInnerHTML);
    }
}

// fucntion to animate buttons when pressed or clicked

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    // waits for about 0.1s to retuen to the original style
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
