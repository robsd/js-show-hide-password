password = document.getElementById('password');
showHidePassword = document.getElementById('show-hide-password');

showHidePassword.onclick = function() {
	if (password.type == "password") {
		password.type = "text";
		showHidePassword.innerHTML = '<i class="fas fa-eye-slash"></i>';
	}
	else {
		password.type = "password";
		showHidePassword.innerHTML = '<i class="fas fa-eye"></i>';
	}
}