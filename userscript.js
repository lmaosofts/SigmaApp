// ==UserScript==
// @name         sigma app for bonkios
// @namespace    http://tampermonkey.net/
// @version      -1
// @author       lmaosofts
// @match        https://bonkiscoolsite.neocities.org/os/
// @icon         https://www.example.com/favicon.ico
// @grant        none
// @updateURL    https://lmaosofts.github.io/SigmaApp/userscript.js
// @downloadURL  https://lmaosofts.github.io/SigmaApp/userscript.js
// ==/UserScript==

(function() {
	if(document.querySelector("div#sigmaicon+div#apps"))return // do not add new sigma icon if already present
	var sigmaTmpl = `
<div id="sigmaappwin" class="win7" style="width: 300px; inset: 48px auto auto 563px; height: 332px;">
	<div class="window active" style="max-width: 300px">
		<div class="title-bar">
			<div class="title-bar-text">sigma app</div>
			<div class="title-bar-controls">
				<button onclick="hideappwindow(&quot;sigmaappwin&quot;)" aria-label="Minimize"></button>
				<button aria-label="Maximize"></button>
				<button aria-label="Close"></button>
			</div>
		</div>
		<div class="window-body has-space"></div>
	</div>
</div>
`.slice(1,-1)
	var sigmaOpen = false
	document.getElementById("apps").insertAdjacentHTML("beforeBegin", `<div style="margin-left: 5%; margin-top: 14%; position: absolute; justify-content: center; width: 80px; height: 110px;" id="sigmaicon"><div class="centerdiv"><img style="image-rendering: pixelated; margin-top: 0.3%; width: 64px;" src="https://lmaosofts.github.io/SigmaApp/sigma.png" alt=""></div><p class="icontext">sigma app</p></div>`)
	var icon = document.getElementById("sigmaicon")
	icon.addEventListener("mouseenter", function(e) {
		e.currentTarget.style.backgroundColor = "rgba(160, 160, 160, 0.548)"
	})
	icon.addEventListener("mouseleave", function(e) {
		e.currentTarget.style.removeProperty("background-color")
	})
	// jquery nonsense ahead! (maybe not much)
	var icon$ = $("#sigmaicon") // this is jquerys getElementById
	icon$.draggable({scroll: false})
	icon.addEventListener("click", function(e) {
		if(sigmaOpen)return[showappwindow("sigmaappwin")][-1]
		sigmaOpen = true
		document.getElementById("apps").insertAdjacentHTML("beforeEnd", sigmaTmpl)
		$("#sigmaappwin").draggable({scroll: false})
		var win = document.getElementById("sigmaappwin")
		win.style.position = "absolute"
		win.querySelector("button[aria-label=\"Close\"]").addEventListener("click", function(e) {
			closeappwindow("sigmaappwin")
			sigmaOpen = false
		})
	})
})()