//eliminar span
function removeMessage(_inputID){
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling != null)
	{
		elemento.parentNode.removeChild(elemento.nextSibling);
	}
}
//crear mensaje y span
function createMessage(_inputID, _message){
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling == null)
	{
		//El span no existe
		var span = document.createElement('span');
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		//El span ya existe
		if(elemento.nextSibling.tagName == 'SPAN')
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);

			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
		}
	}
}
//convertir mayuscula
function primeraMayus(nombre){
    var nombreArray = nombre.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayuscula = primeraLetra.toUpperCase();
    var cortePalabra = false;

    for(var i=1;i<nombreArray.length;i++){

        if(cortePalabra)
        {
            primeraMayuscula += nombreArray[i].toUpperCase();
            cortePalabra = false;
        }
        else
        {
            primeraMayuscula+=nombreArray[i];
            if(nombreArray[i] == " ")
                cortePalabra = true;
        }
    }
    return primeraMayuscula;
}
//validacion de nombres
function validacionNombre(inputID){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
    var nombre = document.getElementById(inputID);

    var texto1="Campo requerido";
    var texto2="No se acepta numeros";

    if(nombre.value!="")
    {
        nombre.value=primeraMayus(nombre.value);
        if(/([0-9])/g.test(nombre.value))
        {
           createMessage(inputID,texto2);
        }
        else{
            removeMessage(inputID);
        }
    }
    else
    {
        createMessage(inputID,texto1);
    }
}
//validacion de apellidos
//validacion de correo
function validacionEmail(event){
    var email = $("input-email");
    var texto5="Verifique su e-mail";
console.log("hshshsh");
    if (/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email.value))
        {
            removeMessage("input-email");
        }

     else{
         if (email.value.length>=0)
          {
            createMessage("input-email",texto5);
          }
     }
}
//validacion de contraseña
function validacionPassword(event){
    var password = document.getElementById("input-password");
    var texto6="La contraseña debe tener al menos 6 caracteres";
 //El campo password debe tener al menos 6 caracteres
  //El campo password no puede ser igual a "password" ó "123456" ó "098754"

        if(password.value === "123456" || password.value == "098754"|| password.value.length <=6)
            {
                createMessage("input-password",texto6);
            }
        else
        {
            removeMessage("input-password");
        }

  }
//validacion de optiones
function validateOption(event){
    var tipo= document.getElementById("select");
    var texto7="Debes seleccionar al menos un tipo de bici"

    if(tipo.value == 0)
    {
        createMessage("select",texto7)
    }
    else
    {
        removeMessage("select")
    }
  }
//validacion totall
function validateForm(){
    validateOption();
    validacionPassword();
    validacionEmail();
    validacionNombre("name");
		validacionNombre("lastname");
  }
