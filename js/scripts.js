//Social Securty Number auto tabbing
function reach3() {
	var input = document.getElementById("ssid3").value;
	if (input.length == 3) {
		document.getElementById("ssid2").focus();
	}
}

function reach2() {
	var input = document.getElementById("ssid2").value;
	if (input.length == 2) {
		document.getElementById("ssid4").focus();
	}
}