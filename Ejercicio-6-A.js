function crearEdadFamiliares(numero){
    for(i = 0; i < numero; i++){
        labelFamiliar = document.createElement('label');
        textoEdadFamiliar = document.createTextNode(`Edad familiar nº${i+1}`);

        input = document.createElement('input');
        input.type = Number;
        input.id = `input-familiar-${[i]}`;
        input.class = 'input-familiar';

        elementoMain = document.querySelector('main');

        br = document.createElement('br');

        labelFamiliar.appendChild(textoEdadFamiliar);
        labelFamiliar.appendChild(input);
        labelFamiliar.appendChild(br);
        elementoMain.appendChild(labelFamiliar);
    }    
}


$botonSiguiente = document.querySelector('#siguiente');

$botonSiguiente.onclick = function(){
    const $cantidadFamiliares = document.querySelector('#cantidad-familiares')
    const cantidadFamiliares = Number($cantidadFamiliares.value);
    
    crearEdadFamiliares(cantidadFamiliares);

    return false
}

function mostrarEdades(listaNodos){
    const edades = [];
    for(i = 0; i < listaNodos.length; i++){
        edades.push(Number(listaNodos[i].innerText));
    }
    return edades
}

function calcularEdadMayor(edades){
    let numeroMayor = edades[0];
    for(i = 1; i < edades.length; i++){
        if (edades[i] > numeroMayor){
            numeroMayor = edades[i];
        }
    }
    return numeroMayor
}

function calcularEdadMenor(edades){
    let numeroMenor = edades[0];
    for(i = 1; i < edades.length; i++){
        if (edades[i] < numeroMenor){
            numeroMenor = edades[i];
        }
    }
    return numeroMenor
}

function calcularEdadPromedio(edades){
    let totalEdades = 0;
    for (i = 0; i < edades.length; i++){
        totalEdades+=edades[i];
    }
    return totalEdades/edades.length
}


$botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
    const $edadesFamiliares = document.querySelectorAll('.input-familiar')
    const edadFamiliares = mostrarEdades($edadesFamiliares);
    
    document.querySelector('#menor-edad').textContent = calcularEdadMenor(edadFamiliares);
    document.querySelector('#mayor-edad').textContent = calcularEdadMayor(edadFamiliares);
    document.querySelector('#promedio-edad').textContent = calcularEdadPromedio(edadFamiliares);
    return false
}

