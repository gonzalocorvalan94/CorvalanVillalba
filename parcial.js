const prompt = require('prompt-sync')();

/* Se simula un juego en el que los jugadores intentan adivinar un numero secreto
Se genera un numero secreto entre 1 y 50
Simular que 4 jugadores intentan adivinarlo con intentos aleatorios
Cada uno tiene hasta 10 intentos
El que adivina primero gana

*/

let players = [];
let intentosJ1 = [];
let intentosJ2 = [];
let intentosJ3 = [];
let intentosJ4 = [];
let numSecreto = 0;

function Adivinanza() {
  numSecreto = Math.floor(Math.random() * 51) + 1;
  console.log('El numero secreto era ' + numSecreto); //Es para chequear. En el juego real no deberia estar
}

function jugadores() {
  for (let i = 0; i < 4; i++) {
    players[i] = prompt(`Jugador ${i + 1} ingrese su nombre: `);
  }
}

console.log(`
  Adivina el numero

  Tendras 10 intentos para adivinar el número secreto entre 1 y 50.
  Debe ingresar números (1-50). De lo contrario perderá un intento.

  Comencemos!

  `);

function juego() {
  for (let i = 0; i < 10; i++) {
    intentosJ1[i] = Number(
      prompt(`(Intento ${i + 1}).  ${players[0]}, ingrese un valor: `)
    );

    if (intentosJ1[i] === numSecreto) {
      console.log(`Correcto!🥳🎈 Ganaste ${players[0]}`);
      break;
    } else if (intentosJ1[i] !== numSecreto && isNaN(intentosJ1[i])) {
      console.log('Has ingresado un valor incorrecto. Perdiste un turno');
    } else {
      console.log('❌ Incorrecto!');
    }

    intentosJ2[i] = Number(
      prompt(`(Intento ${i + 1}). ${players[1]}, ingrese un valor: `)
    );

    if (intentosJ2[i] === numSecreto) {
      console.log(`Correcto!🥳🎈 Ganaste ${players[1]}`);
      break;
    } else if (intentosJ2[i] !== numSecreto && isNaN(intentosJ2[i])) {
      console.log('Has ingresado un valor incorrecto. Perdiste un turno');
    } else {
      console.log('❌ Incorrecto!');
    }

    intentosJ3[i] = Number(
      prompt(`(Intento ${i + 1}). ${players[2]}, ingrese un valor: `)
    );

    if (intentosJ3[i] === numSecreto) {
      console.log(`Correcto! 🥳🎈 Ganaste ${players[2]}`);
      break;
    } else if (intentosJ3[i] !== numSecreto && isNaN(intentosJ3[i])) {
      console.log('Has ingresado un valor incorrecto. Perdiste un turno');
    } else {
      console.log('❌ Incorrecto!');
    }

    intentosJ4[i] = Number(
      prompt(`(Intento ${i + 1}). ${players[3]}, ingrese un valor: `)
    );

    if (intentosJ4[i] === numSecreto) {
      console.log(`Correcto! 🥳🎈 Ganaste ${players[3]}`);
      break;
    } else if (intentosJ4[i] !== numSecreto && isNaN(intentosJ4[i])) {
      console.log('Has ingresado un valor incorrecto. Perdiste un turno');
    } else {
      console.log('❌ Incorrecto!');
    }
    if (intentosJ4[9] !== numSecreto && i === 9) {
      console.log(
        'El juego ha terminado. Nadie ganó. El número era ' + numSecreto
      );
    }
  }
}

Adivinanza();
jugadores();
juego();
