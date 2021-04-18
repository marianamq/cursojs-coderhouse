let nombreDelCliente = prompt ('Bienvenido a la estética BeautyCenter, ¿nos indicas tu nombre?');
let diaDelTurno = prompt('Ingresa el día de la semana que quéres tu turno'); 
let diaDeLaSemanaDisponible = 'Viernes';
let numeroTelefonico = Number(prompt('Ingresa tu número de telf para contactarte'));


if(diaDelTurno === diaDeLaSemanaDisponible && numeroTelefonico > 10){
    console.log("¡Listo, " + nombreDelCliente + "! Tu turno ha sido reservado");
} else{
    console.log("Lo sentimos, hubo un error en el ingreso de datos, intenta nuevamente");
} 
