//Declaracion de variables globales

let btnCalcular = document.getElementById('btn-Calcular')

const calcular = () => {

    // Declaracion de varaibles locales
    let sueldo = document.getElementById('sueldo').value
    let hijos = document.getElementById('hijos').value
    let antiguedad = document.getElementById('antiguedad').value
    let hsExtras = document.getElementById('hsExtras').value
    let jubilacion = sueldo * 11 / 100;
    let pami = sueldo * 11 / 100;
    let presentismo = sueldo * 11 / 100;
    let obraSocial = sueldo * 3 / 100;
    let sindicato = sueldo * 3 / 100;
    let asignacion = 0;
    let total1 = 0;


    console.log('sueldo basico', sueldo);
    console.log('hijos', hijos);
    console.log('antiguedad', antiguedad);
    console.log('horas extras', hsExtras);
    console.log('jubilacion', jubilacion);
    console.log('Pami', pami);
    console.log('presentismo', presentismo);
    console.log('obra Social', obraSocial);
    console.log('sindicato', sindicato);
    console.log('asignacion', asignacion);

    //Calculo la asignacion en funcion del sueldo ingresado
    if (sueldo >= 3000 && sueldo <= 30999) {
        asignacion = 2000;
    } else if (sueldo >= 31000 && sueldo <= 45999) {
        asignacion = 1300;
    } else if (sueldo >= 46000 && sueldo <= 52999) {
        asignacion = 1300;
    } else if (sueldo >= 53000 && sueldo <= 110000) {
        asignacion = 400;
    };

    console.log('actualizacion de asignacion', asignacion);

    //Calculo el monto segun la antiguedad

    if (antiguedad >= 1 && antiguedad < 5) {
        antiguedad = 114;
    } else if (antiguedad >= 5 && antiguedad < 10) {
        antiguedad = 134;
    } else if (antiguedad >= 10 && antiguedad < 20) {
        antiguedad = 164;
    } else if (antiguedad >= 20 && antiguedad < 25) {
        antiguedad = 184;
    } else if (antiguedad >= 25 && antiguedad < 30) {
        antiguedad = 195;
    } else if (antiguedad >= 30 && antiguedad < 40) {
        antiguedad = 217;
    } else if (antiguedad > 40) {
        antiguedad = 300;
    };

    console.log('actualizacion de antiguedad', antiguedad);

    let asignacionHijos = hijos * asignacion;

    let descuentos = jubilacion + pami + obraSocial + sindicato;

    let adiciones = antiguedad + asignacionHijos + presentismo + hsExtras;

    let total = (sueldo - descuentos) + adiciones;

    total1 = total;


    console.log('este es el total1', total1);

    //Muestro los valores calculados en la tabla

    document.getElementById('sueldoTabla').innerHTML = ' $' + total1;
    document.getElementById('jubilacionTabla').innerHTML = ' - $' + jubilacion;
    document.getElementById('pamiTabla').innerHTML = ' - $' + pami;
    document.getElementById('obraSocialTabla').innerHTML = ' - $' + obraSocial;
    document.getElementById('cuotaSindicalTabla').innerHTML = ' - $' + sindicato;
    document.getElementById('antiguedadTabla').innerHTML = antiguedad;
    document.getElementById('hijosTabla').innerHTML = hijos;
    document.getElementById('hsExtrasTabla').innerHTML = hsExtras;
    document.getElementById('presentismoTabla').innerHTML = presentismo;
    document.getElementById('asignacionHijosTabla').innerHTML = asignacionHijos;

};

// Declaracion eventos
btnCalcular.addEventListener('click', calcular);