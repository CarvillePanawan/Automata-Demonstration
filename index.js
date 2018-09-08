var fname;
var lname;
var month;
var day;
var year;
var email;
var pass;

function register() {
	fname = document.getElementById("f-name").value;
	lname = document.getElementById("l-name").value;
	month = document.getElementById("month").value;
	day = document.getElementById("day").value;
	year = document.getElementById("year").value;
	email = document.getElementById("email").value;
	pass = document.getElementById("pass").value;
}

var aFname = fname;
var aLname = lname;
var aMonth = month;
var aDay = day;
var aYear = year;
var aEmail = email;
var aPass = pass;

function automaton(aEmail) {
	var qReject = 11;
	var cState = 0;
	var cChar;
	var cIndex = 0;
	var regex = /^[a-zZ-a0-9]+/;
	
	while(cIndex < aEmail.length && cState != qReject) {
		cChar = aEmail.charAt(cIndex++);
		
		if(cState==0 && cChar==regex) {
			cState = 1;
		} else if(cState==1 && cHar==regex) {
			cState = 2;
			document.write(cState);
		} else if(cState==1 && char=='.') {
			cState = 11;
			document.write(cState);
		} else if(cState==2 && cChar==regex) {
			cState = 3;
			document.write(cState);
		} else if(cState==2 && cChar=='.') {
			cState = 7;
			document.write(cState);
		} else if(cState==3 && cChar==regex) {
			cState = 4;
			document.write(cState);
		} else if(cState==3 && cChar=='.') {
			cState = 8;
			document.write(cState);
		} else if(cState==4 && cChar==regex) {
			cState = 5;
			document.write(cState);
		} else if(cState==4 && cChar=='.') {
			cState = 9;
			document.write(cState);
		} else if(cState==5 && cChar==regex) {
			cState = 6;
			document.write(cState);
		} else if(cState==5 && cChar=='.') {
			cState = 10;
			document.write(cState);
		} else if(cState==6 && cChar==regex) {
			cState = 6;
			document.write(cState);
		} else if(cState==6 && cChar=='.') {
			cState = 10;
			document.write(cState);
		} else if(cState==7 && cChar==regex) {
			cState = 4;
			document.write(cState);
		} else if(cState==7 && cChar=='.') {
			cState = 11;
			document.write(cState);
		} else if(cState==8 && cChar==regex) {
			cState = 5;
			document.write(cState);
		} else if(cState==8 && cChar=='.') {
			cState = 11;
			document.write(cState);
		} else if(cState==9 && cChar==regex) {
			cState = 6;
			document.write(cState);
		} else if(cState==9 && cChar=='.') {
			cState = 11;
			document.write(cState);
		} else if(cState==10 && cChar==regex) {
			cState = 6;
			document.write(cState);
		} else if(cState==10 && cChar=='.') {
			cState = 11;
			document.write(cState);
		} else {
			cState = 11;
			document.write(cState);
		}
    }
}

function show() {
	var passField = document.getElementById("pass");
	if(passField.getAttribute("type") == "password") {
		passField.setAttribute("type", "text");
	} else {
		passField.setAttribute("type", "password");
	}
}