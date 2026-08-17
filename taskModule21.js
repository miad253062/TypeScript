"use strict";
const printUser = (name, age) => {
    return `${name} is ${age} years old.`;
};
const productDescription = (name, price, isAvailable) => {
    return `${name} cost ${price} and is available: ${isAvailable}`;
};
const totalStudent = (students) => {
    return `Total students ${students.length}`;
};
const userInfo = (info) => {
    return `${info[0]} is ${info[1]} years old.`;
};
const userProfile = (details) => {
    if (!details['email']) {
        return `Name: ${details.name}, Email: Not provided`;
    }
    return `Name: ${details.name}, Email: ${details.email}`;
};
const isEven = (num) => {
    return num % 2 === 0;
};
const sumOfNumbers = (...rest) => {
    let sum = 0;
    for (const num of rest) {
        sum += num;
    }
    return sum;
};
const mergeArr = (arr1, arr2) => {
    return [...arr1, ...arr2];
};
const positiveOrNot = (num) => {
    return (num >= 0) ? "Positive" : "Negative";
};
const defaultValue = (name = 'Guest') => {
    return name;
};
const typeCheck = (value) => {
    if (typeof value === 'string') {
        return value;
    }
    return "Not a string";
};
const user = {
    name: "Amina",
    age: 22,
    email: "amina@email.com",
    skills: ["HTML", "CSS", "TypeScript"],
    active: true
};
const userDetails = (user) => {
    const { name, age, email, skills, active } = user;
    return `Name: ${name}\nAge: ${age}\nEmail: ${email}\nSkills: ${skills}\nActive: ${active}`;
};
console.log(userDetails(user));
