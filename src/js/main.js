function setTimePosition () {
	console.log(1);
	var timePosition = document.getElementById( "present" ),
		t = new Date(),
		y = (22 - t.getHours())*3600 + t.getMinutes()*60,
		n = t.getHours() - 7,
		m = t.getMinutes();
	
	var x;

	timePosition.style.cssText = "animation-name: timeNow; \
		animation-timing-function: linear; \
		animation-iteration-count: infinite; \
	";
	timePosition.style.animationDuration = y + "s";

	if (t.getHours() >= 9){
		x = n * 65 + m * 0.99;
	}
	else if (t.getHours() == 8){
		x = m * 1.0833;
	}
	else if (t.getHours() == 7 && m > 29){
		x = (m - 29) * 1.0833;
	}
	else if (t.getHours() < 7 || t.getHours() == 23 && m > 20){
		x = 0;
	}

	timePosition.style.left = (x + 235) + "px";
};
setTimePosition ();

function setTime () {
	var	h = new Date(),
		time = document.getElementById( "time" ),
		clock = h.getHours() + ":" + h.getMinutes();

	time.innerHTML = clock;
}
setTime ();
setInterval (setTime, 30000);

var ul = ["Янв", "Фев", "Март", "Апр", "Май", "Июнь", "Июль", "Авг",
		 "Сент", "Окт", "Нояб", "Дек"],
	days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг',
			 'Пятница', 'Суббота'],
	t = new Date(),
	month = t.getMonth(),
	day = days[t.getDay()],
	num = ul[month],
	date = document.getElementById("date"),
	getTime = t.getDate() + " " + num + " &middot; " + day;

date.innerHTML = getTime;