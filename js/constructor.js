function Dog(name, color, age){                 // Fonction constructeur, sert d'usine pour crée plusieurs objets

    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function(){ // on peut mettre une méthode dans la fonction constructeur, qui sera définie par une autre fonction
        console.log('Wouaf')
    }
}

let petitCaniche = new Dog("choupette", "brown", 15);
let grosChien = new Dog("jes", "white", 5)

// console.log(Dog);
petitCaniche.aboie();