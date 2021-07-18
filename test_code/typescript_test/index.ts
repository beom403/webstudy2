const name = "beomjin",
age = 30,
gender = "male";

const sayHi = (name, age, gender) => {
    console.log('Hello ${name}, you are ${age}, you are a ${gender}');
};

// question mark : optional param
// const sayHi = (name, age, gender?) => {
//     console.log('Hello ${name}, you are ${age}, you are a ${gender}');
// };

sayHi(name, age, gender);


export {};
