lock = false;
headshot_div = document.getElementById("headshot");
function toggle_overlay() {
	if(lock){return;}
	lock = true;
	document.querySelector(".blurredsvg").classList.remove("transparent");
	start = Date.now()
	// console.log(""+start+" - BLURRING")
	//wait transition time
	setTimeout(() => {
		if(document.querySelector(".svg").classList.contains("transparent")){
			document.querySelector(".svg").classList.remove("transparent");
		} else {
			document.querySelector(".svg").classList.add("transparent");
		}
		// console.log(""+Date.now()-start+" - UNBLURRING")
		document.querySelector(".blurredsvg").classList.add("transparent");
		setTimeout(() => {
			lock = false;
			// console.log(""+Date.now()-start+" - DONE")
		},700)
	}, 700);
}
// console.log(""+Date.now()+" - ADDING EVENTS")
document.querySelector("body").onload = () => {
	// console.log(""+Date.now()+" - LOADED BODY")
	setTimeout(() => {
		// console.log(""+Date.now()+" - START TRANSITION")
		toggle_overlay()
	}, 300)
}

function card_click() {
	project = document.getElementById(this.dataset.project);
	if(project.style.height == project.dataset.height){
		project.style.height = 0;
	} else {
		project.style.height = project.dataset.height;
	}

}

headshot_div.ontouchstart = () => {toggle_overlay()}
headshot_div.onmouseover = () => {toggle_overlay()}
cards = document.getElementsByClassName("cardlink");
for (var i = cards.length - 1; i >= 0; i--) {
	cards[i].addEventListener('click', card_click);
}