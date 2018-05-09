function register() {
	let fname = document.getElementById("f-name").value;
	let lname = document.getElementById("l-name").value;
	let month = document.getElementById("month").value;
	let day = document.getElementById("day").value;
	let year = document.getElementById("year").value;
	let email = document.getElementById("email").value;
	let pass = document.getElementById("pass").value;
	
	
}

function show() {
	var passField = document.getElementById("pass");
	if(passField.getAttribute("type") == "password") {
		passField.setAttribute("type", "text");
	} else {
		passField.setAttribute("type", "password");
	}
}