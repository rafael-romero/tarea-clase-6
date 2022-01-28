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
  const $b = document.createElement("b");
  $b.className = "oculto";
  $b.type = "text";
  $b.id = `error-en-negrita-salario-integrante-${cantidadCasilleros + 1}`;
  const $br = document.createElement("br");
  $br.id = `br${cantidadCasilleros + 1}`;
  const $formularioIngreso = document.querySelector(
    "#formulario-ingreso-salarios"
  );
  $formularioIngreso.appendChild($inputCasilleroSalario);
  $formularioIngreso.appendChild($b);
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
    const $advertencia = document.querySelector(
      `#error-en-negrita-salario-integrante-${cantidadCasilleros}`
    );
    const $separador = document.querySelector(`#br${cantidadCasilleros}`);
    $formularioIngreso.removeChild($separador);
    $formularioIngreso.removeChild($advertencia);
    $formularioIngreso.removeChild($casilleroABorrar);
    $casilleroABorrar.remove();
  } else {
    alert("Estas intentando SACAR un casillero que no AGREGASTE");
  }
  return false;
}

function obtenerSalariosDeInputs(salariosDeInputs) {
  const salarios = [];
  for (let i = 0; i < salariosDeInputs.length; i++) {
    salarios.push(Number(salariosDeInputs[i].value));
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

function validarNumeroIngresadoComoSalario(salario) {
  if (salario === 0) {
    return "Debe ingresar su salario o borrar el campo si esta de mas!";
  }
  if (!/^\d+$/.test(salario)) {
    return "Debe ingresar solo numeros enteros!";
  }
  return "";
}

function marcarErroresSalarios(objetoErroresDeSalarios) {
  const llavesErrores = Object.keys(objetoErroresDeSalarios);
  let cantidadDeErrores = 0;
  llavesErrores.forEach(function (llaveError) {
    const errorTextual = objetoErroresDeSalarios[llaveError];
    if (errorTextual) {
      const $inputSalario = document.querySelector(`#${llaveError}`);
      $inputSalario.classList.add("error");
      const $advertenciaEnNegrita = document.querySelector(
        `#error-en-negrita-${llaveError}`
      );
      $advertenciaEnNegrita.className = "";
      $advertenciaEnNegrita.textContent = "ADVERTENCIA: " + errorTextual;
      cantidadDeErrores++;
    } else {
      const $inputCasilleroSalario = document.querySelector(`#${llaveError}`);
      if ($inputCasilleroSalario.classList.contains("error")) {
        $inputCasilleroSalario.classList.remove("error");
        //if (cantidadDeErrores > 0){
        //  cantidadDeErrores--;
        //}
      }
      const $advertenciaEnNegrita = document.querySelector(
        `#error-en-negrita-${llaveError}`
      );
      $advertenciaEnNegrita.className = "oculto";
      $advertenciaEnNegrita.textContent = "";
    }
  });
  return cantidadDeErrores;
}

function calcularYMostrarDatos(salarios) {
  $datos.style.display = "block";
  document.querySelector("#mayor-salario").textContent =
    calcularMayorSalario(salarios);
  document.querySelector("#menor-salario").textContent =
    calcularMenorSalario(salarios);
  document.querySelector("#salario-anual-promedio").textContent =
    calcularPromedioAnual(salarios).toFixed(2);
  document.querySelector("#salario-mensual-promedio").textContent =
    calcularPromedioMensual(salarios).toFixed(2);
}

const $datos = document.querySelector("#datos");
$datos.style.display = "none";
const $botonCalcular = document.querySelector("#calcular");
$botonCalcular.onclick = function () {
  $datos.style.display = "none";
  const $salarios = document.querySelectorAll(".salario");
  const salarios = obtenerSalariosDeInputs($salarios);
  const erroresDeSalarios = {};
  salarios.forEach(function (salario, index) {
    const errorDeSalario = validarNumeroIngresadoComoSalario(salario);
    erroresDeSalarios[`salario-integrante-${index + 1}`] = errorDeSalario;
  });
  const sonValidosLosSalarios = marcarErroresSalarios(erroresDeSalarios) === 0;
  if (sonValidosLosSalarios) {
    calcularYMostrarDatos(salarios);
  }
  return false;
};
