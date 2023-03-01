function mostrar_datos() {
	var datos = document.getElementById( 'user-info' );
	var buttonOcultar = document.getElementById( 'ocultar-info' );
	var buttonMostrar = document.getElementById( 'mostrar-info' );

	if( ! datos.classList.contains( 'mostrar' ) ) {
		datos.classList.add( 'mostrar' );

		if( ! buttonOcultar.classList.contains( 'mostrar' ) ) {
			buttonOcultar.classList.add( 'mostrar' );
		}

		if( ! buttonMostrar.classList.contains( 'ocultar' ) ) {
			buttonMostrar.classList.add( 'ocultar' );
		}
	}
}

function ocultar_datos() {
	var datos = document.getElementById( 'user-info' );
	var buttonOcultar = document.getElementById( 'ocultar-info' );
	var buttonMostrar = document.getElementById( 'mostrar-info' );

	if( datos.classList.contains( 'mostrar' ) ) {
		console.log("Chequeo que existe la clase");
		datos.classList.remove( 'mostrar' );

		if( buttonOcultar.classList.contains( 'mostrar' ) ) {
			buttonOcultar.classList.remove( 'mostrar' );
		}

		if( buttonMostrar.classList.contains( 'ocultar' ) ) {
			buttonMostrar.classList.remove( 'ocultar' );
		}
	}
}
