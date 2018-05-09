function register() {
	var fname = document.getElementById("f-name").value;
	var lname = document.getElementById("l-name").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	var year = document.getElementById("year").value;
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	
	
}

function show() {
	var passField = document.getElementById("pass");
	if(passField.getAttribute("type") == "password") {
		passField.setAttribute("type", "text");
	} else {
		passField.setAttribute("type", "password");
	}
}