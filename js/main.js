//Repetición de cards

let Acumular = ``
let i = 0
for(i; i<5; i++){
    Acumular += `<div class="card">
    <div class="container">
      <h4><b>Tomas Cueto</b></h4>
      <p>Estudiante</p>
    </div>
  </div>`;
}
document.write(Acumular);

//Switch

let edad = parseInt(prompt("Ingresa tu edad"));
switch (edad){
    case 0:
        alert("Es imposible, refrescá");
        break;
    case 16:
        alert("Felicitaciones, ya podes votar");
        break;
    default:
        alert("Mira vos");
        break;
}

