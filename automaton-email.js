function automaton_e() {
var input = document.getElementById('email').value;
var qReject = 11;
var cState = 0;
var cChar;
var cIndex = 0;
var regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=_-]+$/;
var low_regex = /[a-z]/;
var upper_regex = /[A-Z]/;

if(low_regex.test(input) && upper_regex.test(input) && input.length > 6) {
	while(cIndex < input.length && cState != qReject) {
		cChar = input.charAt(cIndex++);
		if(cState==0 && regex.test(cChar)) {
			cState = 1;
		} else if(cState==0 && cChar=='.') {
			cState = 11;
		} else if(cState==1 & regex.test(cChar)) {
			cState = 2;
		} else if(cState==1 && cChar=='.') {
			cState = 11;
		} else if(cState==2 && regex.test(cChar)) {
			cState = 3;
		} else if(cState==2 && cChar=='.') {
			cState = 7;
		} else if(cState==3 &&  regex.test(cChar)) {
			cState = 4;
		} else if(cState==3 && cChar=='.') {
			cState = 8;
		} else if(cState==4 && regex.test(cChar)) {
			cState = 5;
		} else if(cState==4 && cChar=='.') {
			cState = 9;
		} else if(cState==5 && regex.test(cChar)) {
			cState = 6;
		} else if(cState==5 && cChar=='.') {
			cState = 10;
		} else if(cState==6 && regex.test(cChar)) {
			cState = 6;
		} else if(cState==6 && cChar=='.') {
			cState = 10;
		} else if(cState==7 && regex.test(cChar)) {
			cState = 4;
		} else if(cState==7 && cChar=='.') {
			cState = 11;
		} else if(cState==8 && regex.test(cChar)) {
			cState = 5;
		} else if(cState==8 && cChar=='.') {
			cState = 11;
		} else if(cState==9 && regex.test(cChar)) {
			cState = 6;
		} else if(cState==9 && cChar=='.') {
			cState = 11;
		} else if(cState==10 && regex.test(cChar)) {
			cState = 6;
		} else if(cState==10 && cChar=='.') {
			cState = 11;
		} else {
			cState = 11;
		}
	}
} else {
	cState = 11;
}

if(cState==11) {
	alert("Email is not accepted.");
} else {
	alert("Email accepted.");
}
}