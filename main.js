// Home work - 1

let age = 30
if (age >= 14 && age <= 90) {
    console.log("в диапазоне 14 или 90");
} else {
    console.log("не в диапазоне этих чисел");
}

// Home work - 2

let a = "";
let b = 7;
let c = 1;
let d = 2;
let result = a || b || c || d;
alert(result);

// Home work - 3

let age1 = 19;
let hasLicense = true;

if (age1 >= 18 && hasLicense) {
    console.log(true);
} else {
    console.log(false);
}

// Home work - 4

let age2 = 18;

if (age2 <18 || age2 >65) {
    console.log("Вы слишком молоды, либо вам нужно отдыхать и не писать код");
} else {
    console.log("Вы подходите для этой задачи");
}