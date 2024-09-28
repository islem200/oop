//Factory Function
//function createCircle(raduis,color,){}

//Constructor Function
//circle properties:radius, color, coord
//circle methods:
// function Circle(radius, color){
//     this.radius=radius;
//     this.color=color;

//     this.draw=function(){
//         console.log('draw');

//     };
// }
// const other=new Circle(7,'red');
// const other2=new Circle(10,'blue');

// console.log(other);
// console.log(other2);

// class Car{
//     constructor(color, price, manufacturer, brand){
//         this.color = color;
//         this.price = price;
//         this.manufacturer = manufacturer;
//         this.brand = brand;
//     }
//     accelerate(){
//         console.log('accelerate');
//     }
//     stop(){
//         console.log('Stop');
//     }
// }
// const car1 = new Car('red', 25000, 'Ford', 'Focus');
// const car2 = new Car('blue', 25000, 'BMW', 'X5')
// console.log(car1);
// console.log(car2)

// class Circle{
//     constructor(radius, color, coord){
//         this.radius = radius;
//         this.color = color;
//         this.coord = coord;
//     }
//     draw(){

//         console.log('draw');
//     }
//     area(){
//         console.log('area');

//     }
//     squeez(){

//         console.log('squeez')
//     }

// }
// const circle1 = new Circle(10, 'red', {x:10, y:12})
// const circle2 = new Circle(20, 'blue', {x:15, y:14})
// console.log(circle1);
// console.log(circle2);



// class Vehicle {
//   constructor(color, Manufacturer, price, speed, age, weight) {
//     this.color = color;
//     this.Manufacturer = Manufacturer;
//     this.price = price;
//     this.speed = speed;
//     this.age = age;
//     this.weight = weight;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   move() {
//     console.log("move");
//   }
// }
// class aircraft extends Vehicle {
//   constructor(wheels, engine, wings) {
//     this.wheels = wheels;
//     this.engine = engine;
//     this.wings = wings;
//   }
//   fly() {
//     console.log("fly");
//   }
// }
// class car extends Vehicle {
//   constructor(color, Manufacturer, price, speed, age, weight, wheels, engine) {
//     super(color, Manufacturer, price, speed, age, weight);
//     this.wheels = wheels;
//     this.engine = engine;
//   }
// }
// const result = new car("red", "BMW", 30000, 180, 5, 600, 4, 1);
// console.log(result);



// Classe Product pour représenter un produit avec id, nom et prix
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Classe ShoppingCartItem pour représenter un élément du panier avec le produit et la quantité
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total d'un élément (produit * quantité)
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Classe ShoppingCart pour gérer les éléments du panier
class ShoppingCart {
    constructor() {
        this.items = []; // Tableau d'instances de ShoppingCartItem
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity,0);
    }

    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    // Méthode pour supprimer un élément du panier (par ID)
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les éléments du panier
    displayCart() {
        if (this.items.length === 0) {
            console.log("Votre panier est vide.");
        } else {
            console.log("Contenu du panier :");
            this.items.forEach(item => {
                console.log(`Produit : ${item.product.name} - Quantité : ${item.quantity} - Total : ${item.getTotalPrice()}€`);
            });
        }
    }

    // Méthode pour obtenir le prix total de tous les éléments du panier
    getTotalCartPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}

// Exemple de test

// Créer des produits
const product1 = new Product(1, "Ordinateur portable", 800);
const product2 = new Product(2, "Smartphone", 500);

// Créer un panier d'achat
const cart = new ShoppingCart();

// Ajouter des éléments au panier
cart.addItem(product1, 1); // 1 ordinateur portable
cart.addItem(product2, 2); // 2 smartphones

// Afficher le panier
cart.displayCart(); // Afficher les produits dans le panier

// Obtenir le total des éléments dans le panier
console.log(`Total des éléments dans le panier : ${cart.getTotalItems()}`);

// Obtenir le prix total du panier
console.log(`Prix total du panier : ${cart.getTotalCartPrice()}€`);

// Supprimer un élément du panier
cart.removeItem(1); // Supprimer l'ordinateur portable

// Afficher à nouveau le panier
cart.displayCart();
