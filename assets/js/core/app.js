console.log(dataUsuario);

// Logica del Login
jQuery('#loginForm').on('submit', function(e){
	e.preventDefault();

	var username = jQuery('#loginUsername').val().trim();
	var password = jQuery('#loginPassword').val().trim();

	if(!username) {
		alert('Por favor ingrese un nombre de usuario');
		return false;
	}

	if(!password) {
		alert('Por favor ingrese una contraseña');
		return false;
	}

	var loginFlag = false;

	dataUsuario.forEach(function(usuario, index) {
		if(usuario.usuario == username && usuario.contrasenia == password){
			alert('Hola ' + usuario.nombre + ', bienvenido a la aplicación!');
			loginFlag = true;
		}
	});

	if(loginFlag == false) {
		alert('Su usuario no existe en nuestra aplicación');
	}



});