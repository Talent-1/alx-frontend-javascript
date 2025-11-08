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



interface DirectorProperties extends Teacher {
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

// creating Directorinterface interface

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }
    workDirectorTasks(): string {
        return "Working on director tasks";
    }
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class TeacherClass implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }
    getCoffeeBreak(): string {
        return "No coffee break available";
    }
    workTeacherTasks(): string {
        return "Getting to work";
    }
}

function createEmployee(salary: number | string): Director | TeacherClass {
    if (typeof salary === "number" && salary < 500) {
        return new TeacherClass();
    }
    return new Director();
}

console.log('---Employee Factory Tests---')
// Test Case 2: Salary >= 500 (Expected: Director)
const employee2 = createEmployee(500);
console.log(`\nSalary 500 (Type: ${(employee2.constructor as any).name})`);
if (employee2 instanceof Director) {
    console.log(`Work Director Tasks: ${employee2.workDirectorTasks()}`); // Should be 'Getting to director tasks'
}

// Test Case 3: Salary is a string (Expected: Director)
const employee3 = createEmployee('$1000');
console.log(`\nSalary $1000 (Type: ${(employee3.constructor as any).name})`);
console.log(`Get Coffee Break: ${employee3.getCoffeeBreak()}`); // Should be 'Getting a coffee break'

// Test Case 4: Testing the Teacher's unique method
const employee4 = createEmployee(300);
console.log(`\nSalary 300 (Type: ${(employee4.constructor as any).name})`);
if (employee4 instanceof TeacherClass) {
    console.log(`Work Teacher Tasks: ${employee4.workTeacherTasks()}`); // Should be 'Getting to work'
}