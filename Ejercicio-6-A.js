function crearEdadFamiliares(numero){
    for(i = 0; i < numero; i++){
        labelFamiliar = document.createElement('label');
        textoEdadFamiliar = document.createTextNode(`Edad familiar nº${i+1}`);

        input = document.createElement('input');
        input.type = Number;
        input.id = `input-familiar-${[i]}`;

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