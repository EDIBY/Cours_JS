let epargne = 4000; // montant epargné chaque semaine
let compteuresemaine = 1; // compte les semaines
while (epargne <=50000) {
    compteuresemaine = compteuresemaine + 1; // ajoute une semaine
    epargne += 4000; // ajoute l'épargne de la semaine
}
console.log(`le montant total épargné est : ${epargne}.`); // Affiche le montant total épargné
console.log(`le nombre de semaine est : ${compteuresemaine}.`); // Affiche le nombre de semaines nécessaires pour atteindre 50 000