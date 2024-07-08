var rainButton = document.getElementById('rainButton');
var summerButton = document.getElementById('summerButton');
var snowButton = document.getElementById('winterButton');
var volumeControl = document.getElementById('volumeControl');
var sounds = {
    rain: new Audio('assets/sounds/rain.mp3'),
    summer: new Audio('assets/sounds/summer.mp3'),
    snow: new Audio('assets/sounds/winter.mp3'),
};
var currentSound = null;
function playSound(sound, backgroundImage) {
    if (currentSound && currentSound !== sound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
    if (currentSound === sound && !sound.paused) {
        sound.pause();
    }
    else {
        sound.volume = parseFloat(volumeControl.value);
        sound.play();
        document.body.style.setProperty('--background-image', backgroundImage);
    }
    currentSound = sound;
}
function updateSliderBackground() {
    var value = (volumeControl.valueAsNumber - parseFloat(volumeControl.min)) / (parseFloat(volumeControl.max) - parseFloat(volumeControl.min)) * 100;
    volumeControl.style.setProperty('--range-percent', "".concat(value, "%"));
}
rainButton.addEventListener('click', function () { return playSound(sounds.rain, 'url("assets/rainy-bg.jpg")'); });
summerButton.addEventListener('click', function () { return playSound(sounds.summer, 'url("assets/summer-bg.jpg")'); });
snowButton.addEventListener('click', function () { return playSound(sounds.snow, 'url("assets/winter-bg.jpg")'); });
volumeControl.addEventListener('input', function () {
    if (currentSound) {
        currentSound.volume = parseFloat(volumeControl.value);
    }
    updateSliderBackground();
});
window.addEventListener('load', updateSliderBackground);
