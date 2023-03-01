// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Ciclo For
for(let i = 0 ; i < 5 ;i++){
    const number= Number(prompt('numero'));
    console.log(number);
}

// Ciclo While
let count=0;
while(count<5){
    const numberTwo= Number(prompt('numero'));
    console.log(numberTwo);
    count++;
}