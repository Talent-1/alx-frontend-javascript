// teacher interface
interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Creating two teacher objects
const teacher1: Teacher = {
    firstName: "Alice",
    lastName: "Johnson",
    fullTimeEmployee: true,
    location: "New York",
    age: 30,
    contract: false,
};

const teacher2: Teacher = {
    firstName: "Bob",
     lastName: "Smith",
     fullTimeEmployee: false,
     location: "California",
    age: 40,
 contract: true
};

console.log(teacher1);



interface Director extends Teacher{
    numberOfReports: number;
}

const director1: Director = {
    firstName: "Charlie",
    lastName: "Brown",
    fullTimeEmployee: true,
    location: "Texas",
    age: 50,
    contract: false,
    numberOfReports: 5
};

const director2: Director = {
    firstName: "Diana",
    lastName: "Prince",
    fullTimeEmployee: true,
    location: "Florida",
    age: 45,
    contract: true,
    numberOfReports: 10
};

console.log(director1); 

// Interface for the arguments required by printTeacher
interface PrintTeacherArgs {
    firstName: string;
    lastName: string;
}

// Interface for the function signature (REQUIRED STEP)
interface printTeacherFunction {
    (nameInfo: PrintTeacherArgs): string;
}

/**
 * Implements the printTeacher function using object destructuring for the arguments.
 * It accepts an object (like Teacher or Director) and returns the formatted name.
 */
function printTeacher({ firstName, lastName }: Teacher): string {
    return `${firstName.charAt(0)}. ${lastName}`;
};



console.log('--- Print Teacher Function Test ---');
// Call sites updated to pass an object argument instead of two strings
console.log(printTeacher(teacher1)); // Output: A. Johnson
