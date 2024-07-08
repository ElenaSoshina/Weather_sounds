interface Sound {
  element: HTMLButtonElement,
  audio: HTMLAudioElement,
  background: string
}

const volumeControl = document.getElementById('volumeControl') as HTMLInputElement

const sounds: { [key: string]: Sound } = {
  sun: {
    element: document.getElementById('sunButton') as HTMLButtonElement,
    audio: new Audio('assets/sounds/summer.mp3'),
    background: 'url("assets/summer-bg.jpg")'
  },
  rain: {
    element: document.getElementById('rainButton') as HTMLButtonElement,
    audio: new Audio('assets/sounds/rain.mp3'),
    background: 'url("assets/rainy-bg.jpg")'
  },
  snow: {
    element: document.getElementById('snowButton') as HTMLButtonElement,
    audio: new Audio('assets/sounds/winter.mp3'),
    background: 'url("assets/winter-bg.jpg")'
  }
}

let currentSound: HTMLAudioElement | null = null

function playSound(sound: Sound): void {
  if (currentSound && currentSound !== sound.audio) {
    currentSound.pause()
    currentSound = sound.audio
  }
  if (currentSound === sound.audio && !sound.audio.paused) {
    sound.audio.pause()
  } else {
    sound.audio.volume = parseFloat(volumeControl.value)
    sound.audio.play()
    document.body.style.setProperty('--background-image', sound.background)
  }
  currentSound = sound.audio
}

function updateSliderBackground(): void {
  const value = (volumeControl.valueAsNumber - parseFloat(volumeControl.min)) / (parseFloat(volumeControl.max) - parseFloat(volumeControl.min)) * 100;
  volumeControl.style.background = `linear-gradient(to right, #007BFF ${value}%, #ddd ${value}%)`;
}

function addEventListeners(): void {
  Object.values(sounds).forEach((sound: Sound) => {
    sound.element.addEventListener('click', () => playSound(sound))
  })
  volumeControl.addEventListener('input', () => {
    if (currentSound) {
      currentSound.volume = parseFloat(volumeControl.value);
    }
    updateSliderBackground();
  })
  
  window.addEventListener('load', updateSliderBackground);
}
addEventListeners();

