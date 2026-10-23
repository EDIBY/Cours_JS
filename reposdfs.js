let jour = "mardi"

switch(jour){
    case "lundi" : 
    console.log(`C'est le debut de la semaine`);
    break;
    case "mardi": 
    console.log(`Jour ordinaire`);
    break;
    case "mercredi": 
    console.log(`Jour ordinaire`);
    break;
    case "jeudi": 
    console.log(`Jour ordinaire`);
    break;
    case "vendredi": 
    console.log(`C'est le debut weekend`);
    break;
    case "samedi": 
    console.log(`2eme jou de Weekend`);
    break;
    case "dimanche": 
    console.log(`Jour de repos`);
    break;   
    default : console.log(`Ce n'est pas un jour`)
}