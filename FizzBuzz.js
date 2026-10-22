for (let nombre = 1; nombre <= 30; nombre++)  { // parcoure les nombres de 1 à 30
    if (nombre % 3 === 0 && nombre % 5 === 0) { // test si le nombre est divisible par 3 et 5
            console.log("FizzBuzz"); // Affiche "FizzBuzz" si le nombre est divisible par 3 et 5
        } else if (nombre % 3 === 0) { // test si le nombre est divisible par 3
            console.log("Fizz"); // Affiche "Fizz" si le nombre est divisible par 3
        } else if (nombre % 5 === 0) { // test si le nombre est divisible par 5
            console.log("Buzz");
        } 
    else {
        console.log(nombre); }// Affiche le nombre si il n'est pas divisible par 3 ou 5
}