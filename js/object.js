let dog = {                         // Déclare un object #1
    name: "Choupette",
    age: 15,
    color: "Brown",
}; 

let dog = new Object();             // Déclare un object #2
dog.name = "choupette";
dog.color = "brown";
dog.age = 15;
dog.aboie = function(number)

{   while(number > 0){

        console.log(number.toString() + " Wafwaf")              // Parametres de la méthode aboie (function)
        number--
    }
}; 

dog.aboie(4);











for(var property in dog){          // Boucle for qui crée une variable des propriétés dans dog
    console.log(dog[property]);
};
