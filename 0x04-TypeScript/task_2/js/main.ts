// creating Directorinterface interface

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
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

function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    return new Director();
}

const emp1 = createEmployee(200);
const emp2 = createEmployee(1000);
const emp3 = createEmployee("500");

console.log("---Employee 1---");
console.log(emp1.workFromHome());
console.log(emp1.getCoffeeBreak());
if (emp1 instanceof Teacher) console.log(emp1.workTeacherTasks());

console.log("---Employee 2---");
console.log(emp2.workFromHome());
console.log(emp2.getCoffeeBreak());
if (emp2 instanceof Director) console.log(emp2.workDirectorTasks());

console.log("---Employee 3---");
console.log(emp3.workFromHome());
console.log(emp3.getCoffeeBreak());
if (emp3 instanceof Director) console.log(emp3.workDirectorTasks());