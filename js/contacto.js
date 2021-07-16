
function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function isNormalInteger(str) {
    var n = ~~Number(str);
    return String(n) === str && n >= 0;
}

var enviando = false;
function contacto() {
	if(enviando) return false;
	var errores = false;
	var nombre = $('#name').val().trim();
	var email = $('#email').val().trim();
	var telefono = $('#phone').val().trim();
	var mensaje = $('#message').val().trim();

	console.log(nombre, email, telefono, mensaje);
		
	if(!errores) {
		enviando =true;
	/*	$.post('contacto-ajax.php',{nombre: nombre, email: email, telefono: telefono, mensaje: mensaje},function(data) {
			enviando = false;
			if(data.ok) {
				$('#submitSuccessMessage').removeClass('d-none');
				alert("enviadoooo");
			}else
			{
				alert(" NOOO enviadoooo");
			}
			//$('body').append(data);
		},'json');
	}*/

		cadena = "nombre=" + nombre + "&email=" + email + "&telefono=" + telefono +  "&mensaje=" + mensaje;

	        $.ajax({
	            type: "POST",
	            url: "contacto-ajax.php",
	            data: cadena,
	            success: function (data) {
	                enviando = false;
	                console.log("enviando?");
	                if (data == "1" ) {
	                    $('#submitSuccessMessage').removeClass('d-none');
	                    $('#enviar').addClass('d-none');
	                  
	                } else {
	                    
	                    $('#submitSuccessMessage').removeClass('d-none');
	                    $('#enviar').addClass('d-none');
	                }
	            },
	        });
		
		return false; // siempre false para que no haga el submit real
	}

 }