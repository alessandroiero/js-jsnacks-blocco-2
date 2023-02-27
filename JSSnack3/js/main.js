// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
'use strict';

let nomi= ['Giovanni','Francesco','Roberto','Alessandro','Filippo'];
let cognomi=['cognome1','cognome2','cognome3','cognome4','cognome5'];

for(let i=0; i<3;i++){
    const randomNomi = nomi[Math.floor(Math.random() * nomi.length)];
    const randomCognomi = cognomi[Math.floor(Math.random() * cognomi.length)];
    console.log(randomNomi,randomCognomi);
};






