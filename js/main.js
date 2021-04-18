let nroCliente = 6;

for(let i = 1; i < nroCliente; i++){
    let nombreDelCliente = prompt ('Bienvenido a la estética BeautyCenter, ¿nos indicas tu nombre?');
    let diaDelTurno = prompt('Ingresa el día de la semana que quéres tu turno'); 
    let numeroTelefonico = Number(prompt('Ingresa tu número de telf para contactarte'));
    if (numeroTelefonico > 10){
        alert('¡Listo, ' + nombreDelCliente + '¡ Reservaste tu turno con éxito');
        console.log("Cliente Nro " + i + " Registrado con éxito");
    } else{
        alert('Lo siento, intenta registrarte de nuevo');
        console.log("Error al registrar usuario Nro" + i);
    }
}