var optionsListPre = ["!help", "!setAlerts", "!toxic", "!debug", "!repeat", "!rule", "!uptime", "!flags", "!watch", "/server info", "/server activity", "/user info", "/user warnings"];
var optionsList = [];

optionsListPre.forEach((e, i) => {
	optionsList.push(e);
	optionsList.push("");
});

var inOption = 0;

var typeBackI = 0;

var toSlice = 1;

var typing = 0;

function typeDelete() {
	typing = 1;
	if (document.getElementById("commandExamples").innerHTML != "&nbsp;") {
		document.getElementById("commandExamples").innerHTML = optionsList[inOption].slice(0, Number('-' + toSlice));
		toSlice++;
		setTimeout(typeDelete, 100);
	} else {
		inOption++;
		toSlice = 1;
		typing = 0;
		if(inOption > optionsList.length - 1) {
			inOption = 0;
		}
	}
}

function typeBack() {
	typing = 1;
	if (typeBackI < optionsList[inOption].length) {
		document.getElementById("commandExamples").innerHTML += optionsList[inOption].charAt(typeBackI);
		typeBackI++;
		setTimeout(typeBack, 100);
	} else {
		typeBackI = 0;
		typing = 0;
	}
}

setInterval(() => {
	if(typing == 0) {
		typeDelete();
	}
	if(typing == 0) {
		typeBack();
	}
}, 500)

setInterval(() => {
	if(!document.getElementById("commandExamples").innerHTML.length > 0) {
		document.getElementById("commandExamples").innerHTML = "&nbsp;";
	}
}, 0)