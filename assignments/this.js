/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Alone or in a function, the "this" keyword by default will bind to the Global object {Window}. 
* 2. In a method, the "this" keyword by default will bind to the owner of the method. Dot notation is used to invoke the method.
* 3. When using a constructor function with the "this" keyword, it is important to note the callsite being used. The ".bind()" method is used to apply the correct context to "New" objects.
* 4. To bind properties from one object to a different object, the ".call()" and ".apply()" methods can be invoked. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

let thing = this;
function thingFunction() {
  return this;
}
console.log(thing);
console.log(thingFunction());

// Principle 2

// code example for Implicit Binding

const home = {
  room1: "kitchen",
  room2: "bedroom",
  room3: "bathroom",
  clean: function() {
    return `clean the ${this.room1}`;
  }
}
console.log(home.clean());

// Principle 3

// code example for New Binding

function AddOn(room) {
  this.room = room;
  this.build = function() {
    console.log(`${this.room} was built!`);
  }
}

const porch = new AddOn('room4');
const pool = new AddOn('room5');

porch.build();
pool.build();

// Principle 4

// code example for Explicit Binding

const school = {
  room1: "classroom",
  room2: "cafeteria",
  room3: "gymnasium"
}

console.log(home.clean.call(school));