
/*
Excercise 1

Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
        {
            oberwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt"
        }
    ]
}

for (let v of Object.values(person3)) {
    if (Array.isArray(v)) {
        for (let item of v) {
            if (typeof item === 'string') {
                console.log(item);
            } else {
                for (let [key, value] of Object.entries(item)) {
                    console.log('My favorite shake at ${key} is ${value}');
                }
            }
        }
    } else {
        console.log('My favorite ${v} is/are ${Object.keys(person3)[Object.values(person3).indexOf(v)]}');
    }
}
    
/*
Excercise 2

Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
    return `${this.name} is ${this.age} years old`

    }
    this.addAge = () => {
    age = this.age
    console.log('another year older')
    age ++
    console.log(`${this.name} is now ${age} years old`)
    }

    this.addAge2 = (incrementation) => {
    ageNow = age + incrementation
    console.log(`${this.name} aged ${incrementation} years and is now ${ageNow} years old`)
}
}   


let maggy = new Person('Maggy', 33)
console.log(maggy.printInfo())
maggy.addAge()

let bob = new Person('Bob', 23)
console.log(bob.printInfo())
bob.addAge2(3)



/* Exercise 3

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Word"
*/


const checkStrLength = (string) => {
  return new Promise((resolve, reject) => {
    if (string.length > 10) {
      resolve("Big word");
    } else {
      resolve("Small Number");
    }
  });
};

checkStrLength("Hello JavaScript")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

/*
Codewars 1: Cat years, Dog years

Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

function humanYearsCatYearsDogYears(humanYears) {
  let catYears, dogYears;
  
  if (humanYears === 1) {
    catYears = 15;
    dogYears = 15;
  } else if (humanYears === 2) {
    catYears = 24;
    dogYears = 24;
  } else {
    catYears = 24 + 4 * (humanYears - 2);
    dogYears = 24 + 5 * (humanYears - 2);
  }
  
  return [humanYears, catYears, dogYears];
}

// Example usage:
let ages = humanYearsCatYearsDogYears(3);
console.log(ages);


/*
Codewars 2: Removing Elements
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

//Example:
//["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/


function removeEveryOther(arr){
    for (let i = 1; i < arr.length; i += 1){
      arr.splice(i, 1)
    }
    return arr
  }

  console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep", "remove", 'keep']))