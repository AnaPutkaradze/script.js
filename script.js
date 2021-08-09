// Task 1
let cars = ['audi', 'bmw', 'lexus', 'volkswagen', 'porsche', 'audi'];

for (let x=1; x < cars.length; x++) {
    console.log(cars[x]);
}

// Task 2
let names = ['Giorgi', 'Ia', 'Lana', 'Keira', 'ani', 'Eva'];

for (let x = 0; x < names.length; x++) {
    if(names[x].length > 3) {
        console.log(names[x]);
    }
}

// Task 3
let number = [2, 9, 16, 29, 59, 100, 4387, 4860];
for (let x=0; x < number.length; x++) {
    if(number[x] % 2 == 0) {
        console.log('Even number: ' + number[x])
    } else {
        console.log('Odd number: ' + number[x]);
    }
}

// Task 4
let numbers= [15, 67, 100, 5, 7, [80, 500] ]; 

console.log(numbers[5][1]);

// Task 5
var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);

// Task 6
let array = ['Tommy', 25, 'September', 1989];
for (let x=0; x < array.length; x++) {
        console.log(array[x]);
    }

// Task 7
let name = ['Sandro', 'Demetre', 'Natia', 'Giorgi', 'Sandro', 'Tekla', 'nika'];
if (name.length == 5 && name[name.length - 1] == 'Nika') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (name.length == 7 || name[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");
}

// // Task 8
// 6 === “6”
// დააბრუნებს false რადგან არ ხდება ტიპების კონვერტაცია, string ვერ გადავა რიცხვში