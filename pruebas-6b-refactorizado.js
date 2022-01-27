function probarValidarNumeroIngresadoComoSalario(){
    console.assert(
        validarNumeroIngresadoComoSalario(0) === "Debe ingresar su salario o borrar el campo si esta de mas!",
        "probarValidarNumeroIngresadoComoSalario no valido que el numero ingresado sea mayor a cero"
    );
    console.assert(
        validarNumeroIngresadoComoSalario(6.98) === "Debe ingresar su salario o borrar el campo si esta de mas!",
        "probarValidarNumeroIngresadoComoSalario no valido que el numero ingresado sea entero"
    );
    console.assert(
        validarNumeroIngresadoComoSalario(1500) === "",
        "probarValidarNumeroIngresadoComoSalario fallo la validacion con un numero valido"
    )    
}

probarValidarNumeroIngresadoComoSalario();
