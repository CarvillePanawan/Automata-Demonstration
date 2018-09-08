function automaton_p() {
var input = document.getElementById('pass').value;
var qReject = 9;
var cState = 0;
var cChar;
var cIndex = 0;
var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=_-]+$/;
var low_regex = /[a-z]/;
var upper_regex = /[A-Z]/;

if(low_regex.test(input) && upper_regex.test(input) && input.length > 8) {
	while(cIndex < input.length && cState != qReject) {
		cChar = input.charAt(cIndex++);
		if(cState==0 && regex.test(cChar)) {
			cState = 1;
		} else if(cState==1 && regex.test(cChar)) {
			cState = 2;
		} else if(cState==2 && regex.test(cChar)) {
			cState = 3;
		} else if(cState==3 && regex.test(cChar)) {
			cState = 4;
		} else if(cState==4 && regex.test(cChar)) {
			cState = 5;
		} else if(cState==5 && regex.test(cChar)) {
			cState = 6;
		} else if(cState==6 && regex.test(cChar)) {
			cState = 7;
		} else if(cState==7 && regex.test(cChar)) {
			cState = 8;
		} else {
			cState = 9;
		}
	}
} else {
	cState = 9;
}

if(cState==9) {
	alert("Password is not accepted.");
} else {
	alert("Password accepted.");
}
}