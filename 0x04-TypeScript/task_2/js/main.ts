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

class Teacher implements TeacherInterface {
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
    if ( salary < 500) {
        return new Teacher();
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