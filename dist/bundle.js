/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("\nconst volumeControl = document.getElementById('volumeControl');\nconst sounds = {\n    sun: {\n        element: document.getElementById('sunButton'),\n        audio: new Audio('assets/sounds/summer.mp3'),\n        background: 'url(\"assets/summer-bg.jpg\")'\n    },\n    rain: {\n        element: document.getElementById('rainButton'),\n        audio: new Audio('assets/sounds/rain.mp3'),\n        background: 'url(\"assets/rainy-bg.jpg\")'\n    },\n    snow: {\n        element: document.getElementById('snowButton'),\n        audio: new Audio('assets/sounds/winter.mp3'),\n        background: 'url(\"assets/winter-bg.jpg\")'\n    }\n};\nlet currentSound = null;\nfunction playSound(sound) {\n    if (currentSound && currentSound !== sound.audio) {\n        currentSound.pause();\n        currentSound = sound.audio;\n    }\n    if (currentSound === sound.audio && !sound.audio.paused) {\n        sound.audio.pause();\n    }\n    else {\n        sound.audio.volume = parseFloat(volumeControl.value);\n        sound.audio.play();\n        document.body.style.setProperty('--background-image', sound.background);\n    }\n    currentSound = sound.audio;\n}\nfunction updateSliderBackground() {\n    const value = (volumeControl.valueAsNumber - parseFloat(volumeControl.min)) / (parseFloat(volumeControl.max) - parseFloat(volumeControl.min)) * 100;\n    volumeControl.style.background = `linear-gradient(to right, #007BFF ${value}%, #ddd ${value}%)`;\n}\nfunction addEventListeners() {\n    Object.values(sounds).forEach((sound) => {\n        sound.element.addEventListener('click', () => playSound(sound));\n    });\n    volumeControl.addEventListener('input', () => {\n        if (currentSound) {\n            currentSound.volume = parseFloat(volumeControl.value);\n        }\n        updateSliderBackground();\n    });\n    window.addEventListener('load', updateSliderBackground);\n}\naddEventListeners();\n\n\n//# sourceURL=webpack://weather_sounds/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/
/******/ })()
;
