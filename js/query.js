$(document).ready(function()
    {
    $("#name").keyup(validacionNombre);
    $("#lastname").keyup(validacionApellido);
    $("#input-email").keyup(validacionEmail);
    $("#input-password").keyup(validacionPassword);
    $("#select").keyup(validateOption)
});

function validacionNombre(){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
    var nombre = $("#name").val();

    //var texto1="Campo requerido";
    //var texto2="No se acepta numeros";

    if(nombre.length==0)
    {
        $("#name").after("<span>Campo requerido </span>")
    }
    else
    {
        //createMessage(inputID,texto1);
        $(".name-container  span").remove();
    }
}

function validacionApellido(){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
    var apellido = $("#lastname").val();

    //var texto1="Campo requerido";
    //var texto2="No se acepta numeros";

    if(apellido.length==0)
    {
       $("#lastname").after("<span>Campo requerido </span>") 
    }
    else
    {
        $(".lastname-container  span").remove();
    }
}

//validacion email
function validacionEmail(){
    var email = $("#input-email").val();
    //var texto5="Verifique su e-mail";
//console.log("hshshsh");
    if (/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email))
        {
            $(".email-container  span").remove();
            //removeMessage("#input-email");
        }

     else{
         if (email.length>=0)
          {
            $("#input-email").after("<span>Campo requerido </span>")
          }
     }
}
//validacion de contraseña
function validacionPassword(){
    var password = $("#input-password").val();
    //var texto6="La contraseña debe tener al menos 6 caracteres";
 //El campo password debe tener al menos 6 caracteres
  //El campo password no puede ser igual a "password" ó "123456" ó "098754"

        if(password === "123456" || password == "098754"|| password.length <=6)
            {
                $("#input-password").after("<span>Campo requerido </span>")
            }
        else
        {
            $(".form-group  span").remove();
        }

  }
//validacion de optiones
function validateOption(){
    var tipo= $("#select").val();
    //var texto7="Debes seleccionar al menos un tipo de bici"

    if(tipo == 0)
    {
        //createMessage("#select",texto7)
        $("#select").after("<span>Campo requerido </span>")
    }
    else
    {
        //removeMessage("#select")
        $(".form-group  span").remove();
    }
  }
//validacion totall
function validateForm(){
    validateOption();
    validacionPassword();
    validacionNombre();
    validacionApellido();
    validacionEmail();
    //validacionNombre("#name");
    //validacionNombre("#lastname");
  }
