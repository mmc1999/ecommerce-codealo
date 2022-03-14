export const validationForm = (form) => {
    let errors = {};
    let expresiones = {
        name: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,
        email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        numeroCelular: /[0-9]{8}/,
        adressHome:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/,
        codigoPos: /^[0-9]{4}/,
        ciudad:/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ0-9]+$/,
        tarjetaNumber:/5[1-5][0-9]{14}$/,
        safeNumber:/[0-9]{3}/
    } 
    //NAME
    if(!form.nombre) {
        errors.nombre= "el campo esta vacio"
    } else if(!expresiones.name.test(form.nombre)){
        errors.nombre = "el nombre no es valido"
    }

    //EMAIL
    if(!form.mail) {
        errors.email= "el campo esta vacio"
    } else if(!expresiones.email.test(form.mail)){
        errors.email= "el email no es valido"
    }

    //CELULAR
    if(!form.numero) {
        errors.numeroCelular= "el campo esta vacio"
    } else if(!expresiones.numeroCelular.test(form.numero)){
        errors.numeroCelular= "el numero ingresado no es valido"
    }

    //DIRECCION DE CASA
    if(!form.adressHome) {
        errors.adressHome= "el campo esta vacio"
    } else if(!expresiones.adressHome.test(form.adressHome)){
        errors.adressHome= "La calle ingresada no es valida"
    }

    //CODIGO POSTAL
    if(!form.codigoPostal) {
        errors.codigoPostal= "el campo esta vacio"
    } else if(!expresiones.codigoPos.test(form.codigoPostal)){
        errors.codigoPostal= "El codigo postal ingresado no es valido"
    }

    //ciudad
    if(!form.ciudad) {
        errors.ciudad= "el campo esta vacio"
    } else if(!expresiones.ciudad.test(form.ciudad)){
        errors.ciudad= "El codigo postal ingresado no es valido"
    }

    //pais
    if(!form.pais) {
        errors.pais= "el campo esta vacio"
    } else if(!expresiones.name.test(form.pais)){
        errors.pais = "el pais ingresado no es valido"
    }

    //tarjetaNumber
    if(!form.tarjetaNumber) {
        errors.tarjetaNumber= "el campo esta vacio"
    } else if(!expresiones.tarjetaNumber.test(form.tarjetaNumber)){
        errors.tarjetaNumber = "La tarjeta ingresada no es valida"
    }

    //safeNumber
    if(!form.safeNumber) {
        errors.safeNumber= "el campo esta vacio"
    } else if(!expresiones.safeNumber.test(form.safeNumber)){
        errors.safeNumber = "La seguro ingresado no es valido"
    }

    return errors
    
}