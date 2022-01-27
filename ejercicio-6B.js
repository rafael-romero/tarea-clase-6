let cantidadCasilleros = 1;

const $botonAgregarCasilleroSalario = document.querySelector(
  "#agregar-casillero-salario"
);
$botonAgregarCasilleroSalario.onclick = function () {
  const $inputCasilleroSalario = document.createElement("input");
  $inputCasilleroSalario.type = "number";
  $inputCasilleroSalario.id = `salario-integrante-${cantidadCasilleros + 1}`;
  $inputCasilleroSalario.value = "0";
  $inputCasilleroSalario.className = "salario";
  const $br = document.createElement("br");
  $br.id = `br${cantidadCasilleros + 1}`;
  const $formularioIngreso = document.querySelector(
    "#formulario-ingreso-salarios"
  );
  $formularioIngreso.appendChild($inputCasilleroSalario);
  $formularioIngreso.appendChild($br);
  cantidadCasilleros++;
  return false;
};

const $botonEliminarCasilleroSalario = document.querySelector(
  "#eliminar-casillero-salario"
);
$botonEliminarCasilleroSalario.onclick = function () {
  eliminarCasilleroSalario();
  if (cantidadCasilleros > 1) {
    cantidadCasilleros--;
  }
};

function eliminarCasilleroSalario() {
  const $formularioIngreso = document.querySelector(
    "#formulario-ingreso-salarios"
  );
  if (cantidadCasilleros > 1) {
    const $casilleroABorrar = document.querySelector(
      `#salario-integrante-${cantidadCasilleros}`
    );
    const $separador = document.querySelector(`#br${cantidadCasilleros}`);
    $formularioIngreso.removeChild($separador);
    $formularioIngreso.removeChild($casilleroABorrar);
    $casilleroABorrar.remove();
  } else {
    alert("Estas intentando SACAR un casillero que no AGREGASTE");
  }
  return false;
}

function mostrarSalarios(salario) {
  const salarios = [];
  for (let i = 0; i < salario.length; i++) {
    let unSalario = Number(salario[i].value);
    if (unSalario > 0) {
      salarios.push(unSalario);
    }
  }
  return salarios;
}

function calcularMayorSalario(salarios) {
  let salarioMayor = salarios[0];
  for (i = 1; i < salarios.length; i++) {
    if (salarios[i] > salarioMayor) {
      salarioMayor = salarios[i];
    }
  }
  return salarioMayor;
}

function calcularMenorSalario(salarios) {
  let salarioMenor = salarios[0];
  for (i = 1; i < salarios.length; i++) {
    if (salarios[i] < salarioMenor) {
      salarioMenor = salarios[i];
    }
  }
  return salarioMenor;
}

function calcularPromedioAnual(salarios) {
  let totalSalarios = 0;
  for (i = 0; i < salarios.length; i++) {
    totalSalarios += salarios[i];
  }
  return totalSalarios / salarios.length;
}

function calcularPromedioMensual(salarios) {
  const MESES_EN_UN_ANIO = 12;
  return calcularPromedioAnual(salarios) / MESES_EN_UN_ANIO;
}

const $datos = document.querySelector("#datos");
$datos.style.display = "none";

const $botonCalcular = document.querySelector("#calcular");
$botonCalcular.onclick = function () {
  const $salarios = document.querySelectorAll(".salario");
  const salarios = mostrarSalarios($salarios);
  $datos.style.display = "block";
  document.querySelector("#mayor-salario").textContent =
    calcularMayorSalario(salarios);
  document.querySelector("#menor-salario").textContent =
    calcularMenorSalario(salarios);
  document.querySelector("#salario-anual-promedio").textContent =
    calcularPromedioAnual(salarios).toFixed(2);
  document.querySelector("#salario-mensual-promedio").textContent =
    calcularPromedioMensual(salarios).toFixed(2);
  return false;
};
