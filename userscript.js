// ==UserScript==
// @name         sigma app for bonkios
// @namespace    http://tampermonkey.net/
// @version      -1
// @author       lmaosofts
// @match        https://bonkiscoolsite.neocities.org/os/
// @icon         https://www.example.com/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
	if(document.querySelector("div#sigmaicon+div#apps"))return // do not add new sigma icon if already present
	document.getElementById("apps").insertAdjacentHTML("beforeBegin", `<div style="margin-left: 5%; margin-top: 14%; position: absolute; justify-content: center; width: 80px; height: 110px;" id="sigmaicon"><div class="centerdiv"><img style="image-rendering: pixelated; margin-top: 0.3%; width: 64px;" src="https://lmaosofts.github.io/SigmaApp/sigma.png" alt=""></div><p class="icontext">sigma app</p></div>`)
	var icon = document.getElementById("sigmaicon")
})()