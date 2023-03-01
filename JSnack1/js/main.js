// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Ciclo For
let sum=0;
for(let i = 0 ; i < 5 ;i++){
    const number= Number(prompt('numero'));
    sum += number;
    console.log(number);
}

console.log(sum);

// Ciclo While
let sumTwo=0;
let count=0;
while(count<5){
    const numberTwo= Number(prompt('numero'));
    console.log(numberTwo);
    sumTwo += numberTwo;
    count++;
}

console.log(sumTwo);
