
var buttons_list = document.querySelectorAll(".drum");

for (var i = 0; i < buttons_list.length; i++) {
    buttons_list[i].addEventListener("click", function() {
        var audio;

        var crash = new Audio("./sounds/crash.mp3");
        var kick = new Audio("./sounds/kick-bass.mp3");
        var snare = new Audio("./sounds/snare.mp3");
        var tom1 = new Audio("./sounds/tom-1.mp3");
        var tom2 = new Audio("./sounds/tom-2.mp3");
        var tom3 = new Audio("./sounds/tom-3.mp3");
        var tom4 = new Audio("./sounds/tom-4.mp3");

        switch (this.innerHTML) {
            case "w":
                crash.play();
                break;

            case "a":
                kick.play();
                break;

            case "s":
                snare.play();
                break;

            case "d":
                tom1.play();
                break;

            case "j":
                tom2.play();
                break;

            case "k":
                tom3.play();
                break;

            case "l":
                tom4.play();
                break;

            default:
                break;
        }

        animate(this.innerHTML);
    });
}

addEventListener("keypress", function(event) {
    var crash = new Audio("./sounds/crash.mp3");
    var kick = new Audio("./sounds/kick-bass.mp3");
    var snare = new Audio("./sounds/snare.mp3");
    var tom1 = new Audio("./sounds/tom-1.mp3");
    var tom2 = new Audio("./sounds/tom-2.mp3");
    var tom3 = new Audio("./sounds/tom-3.mp3");
    var tom4 = new Audio("./sounds/tom-4.mp3");

    switch (event.key) {
        case "w":
            crash.play();
            break;

        case "a":
            kick.play();
            break;

        case "s":
            snare.play();
            break;

        case "d":
            tom1.play();
            break;

        case "j":
            tom2.play();
            break;

        case "k":
            tom3.play();
            break;

        case "l":
            tom4.play();
            break;

        default:
            // sad_horn.play();
            break;
    }

    animate(event.key);
});

function animate(event) {
    document.querySelector('.' + event).classList.add("pressed");
    setTimeout(function () {
        document.querySelector('.' + event).classList.remove("pressed");
    }, 120);
}