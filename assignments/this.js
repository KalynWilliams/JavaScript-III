/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - for building methods
* 2. Explicit Binding - for functions
* 3. 'new' Keyword Binding - for creating new objects
* 4.  Window Binding - When no other binding method is used,
                      "this" defaults to the window/global scope.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayWowzers(wowzers) {
   console.log(this.wowzers)
}

 sayWowzers("wowzers");


// Principle 2

// code example for Implicit Binding
const myObject = {
    name: "Jhin",
    greeting: "Hello summoner, my name is ",
    speak: function(){
        console.log(this.greeting + this.name);
    }
}
myObject.speak();

// Principle 3

// code example for New Binding
let Food = function(name, type, color){
    this.name = name;
    this.type = type;
    this.color = color;
}
let banana = new Food("Banana","Fruit","Yellow");
let carrot = new Food("Carrot","Vegetable","Orange");
console.log(banana);
console.log(carrot);


// Principle 4

// code example for Explicit Binding
let sayName = function(){
    console.log(this.name);
}
let jhin = {
    name: 'Khada Jhin',
    age: 21
}
sayName.call(jhin);
