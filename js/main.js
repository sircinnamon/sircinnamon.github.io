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
		}, 500)
	}, 500);
}

document.querySelector("body").onload = () => {
	transition_headshot()
}