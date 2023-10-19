const sttbtn = document.getElementById("start");
const stpbtn = document.getElementById("stop");
const restxt = document.getElementById("result");

var stime = 0;
var etime = 0;

function sclick()
{
	stime = Date.now();
	sttbtn.disabled = true;
	stpbtn.disabled = false;

	restxt.innerText = "속으로 10 초를 센 뒤 중지 단추를 누릅니다.";
}

function eclick()
{
	etime = Date.now() - stime;
	sttbtn.disabled = false;
	stpbtn.disabled = true;

	restxt.innerText = Math.ceil(etime / 10) / 100 + " 초 걸렸습니다. 오차: " + Math.abs(Math.ceil(etime / 10) / 100 - 10) + " 초";
}
