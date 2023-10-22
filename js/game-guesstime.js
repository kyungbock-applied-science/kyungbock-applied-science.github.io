const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const resulttxt = document.getElementById("result");

var timeStarted = 0;
var timeStopped = 0;

function startclicked()
{
	timeStarted = Date.now();
	startbtn.disabled = true;
	stopbtn.disabled = false;

	resulttxt.innerText = "속으로 10 초를 센 뒤 중지 단추를 누릅니다.";
}

function stopclicked()
{
	timeStopped = Date.now() - timeStarted;
	startbtn.disabled = false;
	stopbtn.disabled = true;

	resulttxt.innerText = Math.ceil(timeStopped / 10) / 100 + " 초 걸렸습니다. 오차: " + Math.ceil(Math.abs(timeStopped / 1000 - 10) * 100) / 100 + " 초";
}
