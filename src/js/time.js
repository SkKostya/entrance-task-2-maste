function setTimePosition() {
	console.log(1);
	var timePosition = document.getElementById( "present" ),
		time = document.getElementById( "time" ),
		t = new Date(),
		clock = t.getHours() + ":" + t.getMinutes(),
		n = t.getHours() - 7,
		m = t.getMinutes();
	
	var x;

	if (t.getHours() >= 9){
		x = n * 65 + m * 1.084;
	}
	else if (t.getHours() == 8){
		x = m * 1.084;
	}
	else if (t.getHours() == 7 && t.getMinutes() > 29){
		x = (m - 29) * 1.084;
	}

	time.innerHTML = clock;
	timePosition.style.left = (x + 235) + "px";
};

module.exports = setTimePosition;
