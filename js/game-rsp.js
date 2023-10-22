const restxt = document.getElementById("result");

function scissorclicked()
{
	var rsp = Math.floor(Math.random() * 3);
	if      (rsp == 0) { restxt.innerText = "AI: 가위, 결과: 무승부"; }
	else if (rsp == 1) { restxt.innerText = "AI: 바위, 결과: 패배"; }
	else               { restxt.innerText = "AI: 보, 결과: 승리"; }
}

function rockclicked()
{
	var rsp = Math.floor(Math.random() * 3);
	if      (rsp == 0) { restxt.innerText = "AI: 가위, 결과: 승리"; }
	else if (rsp == 1) { restxt.innerText = "AI: 바위, 결과: 무승부"; }
	else               { restxt.innerText = "AI: 보, 결과: 패배"; }
}

function paperclicked()
{
	var rsp = Math.floor(Math.random() * 3);
	if      (rsp == 0) { restxt.innerText = "AI: 가위, 결과: 패배"; }
	else if (rsp == 1) { restxt.innerText = "AI: 바위, 결과: 승리"; }
	else               { restxt.innerText = "AI: 보, 결과: 무승부"; }
}
