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



interface Director extends Teacher {
    numberOfReports: number;
}

// Interface for the arguments required by printTeacher
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Function to print teacher's name in the specified format
// Function to print teacher's name in the specified format
function printTeacher(firstName: string, lastName: string): string {
    const teacher = { firstName, lastName };
    return `${firstName.charAt(0)}. ${lastName}`;
}
console.log(printTeacher("John", "Doe")); // Output: J. Doe
class StudentClass {  
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return "Currently working";
    }
    displayName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

