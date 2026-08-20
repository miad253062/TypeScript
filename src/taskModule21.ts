const printUser = (name: string, age: number) : string => {
    return `${name} is ${age} years old.`
}


const productDescription = (name: string, price: number, isAvailable: boolean): string =>{
    return `${name} cost ${price} and is available: ${isAvailable}`
}


const totalStudent = (students: string[]): string => {
    return `Total students ${students.length}`
}


const userInfo = (info: [string, number]) => {
    return `${info[0]} is ${info[1]} years old.`
}


const userProfile = (details: {name: string, email?: string}) : string => {
    if(!details['email']){
        return `Name: ${details.name}, Email: Not provided`
    }
    return `Name: ${details.name}, Email: ${details.email}`
}

const isEven = (num: number): boolean => {
    return num % 2 === 0;
}


const sumOfNumbers = (...rest: number[]): number => {
    let sum: number = 0;
    for(const num of rest){
        sum+=num
    }
    return sum;
}


const mergeArr = (arr1: number[], arr2: number[]): number[] => {
    return [...arr1, ...arr2];
}


const positiveOrNot = (num: number): string => {
    return (num >= 0)? "Positive" : "Negative"
}


const defaultValue = (name: string = 'Guest'): string => {
    return name;
}


const typeCheck = (value: unknown): string => {
    if(typeof value === 'string'){
        return value;
    }
    return "Not a string"
}

const userDetails = (user: {name: string, age: number, email: string, skills: string[], active: boolean}): string => {
    const {name, age, email, skills, active} = user
    return `Name: ${name}\nAge: ${age}\nEmail: ${email}\nSkills: ${skills}\nActive: ${active}`
}
