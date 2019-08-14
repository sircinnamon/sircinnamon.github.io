function transition_headshot() {
	headshot_div = document.getElementById("headshot");
	headshot_div.classList.add("blur");
	// console.log("BLURRING")
	//wait transition time
	setTimeout(() => {
		document.querySelector(".overlay").classList.add("transparent");
		// console.log("HIDING")
		setTimeout(() => {
			headshot_div.classList.remove("blur");
			// console.log("UNBLURRING")
		}, 175)
	}, 525);
}

document.querySelector("body").onload = () => {
	setTimeout(() => {
		transition_headshot()
	}, 200)
}

headshot_div = document.getElementById("headshot");
running_timer = null
function toggle_overlay() {
	headshot_div = document.getElementById("headshot");
	headshot_div.classList.add("blur");
	// console.log("BLURRING")
	//wait transition time
	setTimeout(() => {
		if(document.querySelector(".overlay").classList.contains("transparent")){
			document.querySelector(".overlay").classList.remove("transparent");
		} else {
			document.querySelector(".overlay").classList.add("transparent");
		}
		setTimeout(() => {
			headshot_div.classList.remove("blur");
			// console.log("UNBLURRING")
		}, 175)
	}, 525);
}
headshot_div.ontouchstart = () => {toggle_overlay()}
headshot_div.onmouseover = () => {toggle_overlay()}