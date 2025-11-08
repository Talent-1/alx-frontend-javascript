# frontend-javascript

ALX TypeScript project — exploring core TypeScript concepts including basic types, interfaces, classes, functions, generics, namespaces, declaration merging, and DOM manipulation. All code is written in .ts and tested with Jest, following ALX best practices for frontend development.

## 0x04. TypeScript

## 📘 Project Overview

In this project, I explored the basics of **TypeScript** and how it integrates into frontend JavaScript development.  
I learned to write type-safe and maintainable code, define interfaces and classes, and compile TypeScript using Webpack.  

Each task helped me build a stronger understanding of how TypeScript improves JavaScript development through static typing, better tooling, and structured code.

---

## 🎯 Learning Objectives

By the end of this project, I was able to:

- Use basic types in TypeScript  
- Create and extend **Interfaces** and **Classes**  
- Work with the **DOM** using TypeScript  
- Understand and use **Generic types**  
- Organize code using **Namespaces**  
- Merge declarations and use **ambient namespaces**  
- Implement **nominal typing** with brand properties  

---

## 🛠️ Project Requirements

- I used **Visual Studio Code** as my main editor.  
- Every file ends with a new line and compiles with no TypeScript warnings or errors.  
- The TypeScript scripts are tested using **Jest (v24.9.\*)**.  
- Each task directory contains its own configuration files:  
  - `package.json`  
  - `.eslintrc.js`  
  - `tsconfig.json`  
  - `webpack.config.js`

---

## ⚙️ Configuration Setup

For every task, I copied the required configuration files into the appropriate folder and made sure `webpack` was correctly configured to compile TypeScript files from the `/js` directory into `/dist`.

---

## 🚀 Project Structure

0x04-TypeScript/
├── task_0/
│ ├── js/
│ │ └── main.ts
│ ├── package.json
│ ├── tsconfig.json
│ ├── webpack.config.js
│ └── .eslintrc.js
│
├── task_1/
│ ├── js/
│ │ └── main.ts
│ ├── package.json
│ ├── tsconfig.json
│ └── webpack.config.js
│
├── task_2/
│ ├── js/
│ │ └── main.ts
│ ├── package.json
│ ├── tsconfig.json
│ └── webpack.config.js
│
└── ...

---

## 🧩 Tasks I Completed

### **Task 0 – Creating an Interface for a Student**

In this task, I created an interface `Student` with properties for:

- `firstName`
- `lastName`
- `age`
- `location`

Then I created two student objects, stored them in an array, and used TypeScript with Vanilla JavaScript to render a simple table showing each student’s first name and location.  
📁 **File:** `task_0/js/main.ts`

---

### **Task 1 – Building a Teacher Interface**

Here, I defined a `Teacher` interface that includes:

- `firstName`, `lastName` (read-only)
- `fullTimeEmployee` (boolean)
- `yearsOfExperience` (optional)
- `location` (string)
- Dynamic properties such as `contract: boolean`

📁 **File:** `task_1/js/main.ts`

---

### **Task 2 – Extending Teacher and Creating Classes**

I extended the `Teacher` interface into a new interface `Directors` that adds `numberOfReports`.  
I also implemented:

- `printTeacher()` function with its interface
- A `StudentClass` with methods `workOnHomework()` and `displayName()`

📁 **File:** `task_1/js/main.ts`

---

### **Task 3 – Advanced Types**

In this part, I created two interfaces, `DirectorInterface` and `TeacherInterface`, each defining their respective methods.  
I then built two classes (`Director` and `Teacher`) that implement these interfaces and a `createEmployee()` function that returns one of the two classes based on salary input.

📁 **File:** `task_2/js/main.ts`

---

### **Task 4 – String Literal Types**

Here, I created a type `Subjects` that can only be `"Math"` or `"History"`, and a function `teachClass()` that prints which class is being taught.  

📁 **File:** `task_2/js/main.ts`

---

### **Task 5 – Ambient Namespaces**

For this task, I built type definitions for a mock CRUD library:

- Defined types `RowID` and `RowElement`
- Declared ambient definitions in `crud.d.ts`
- Used all functions (`insertRow`, `updateRow`, `deleteRow`) in `main.ts`

📁 **Files:**  

- `task_3/js/interface.ts`  
- `task_3/js/crud.d.ts`  
- `task_3/js/main.ts`

---

### **Task 6 – Namespaces and Declaration Merging**

I learned how to merge declarations using namespaces.  
Inside a namespace called `Subjects`, I created:

- A `Teacher` interface  
- A base `Subject` class  
- Three subclasses: `Cpp`, `Java`, and `React`

Each subclass implemented methods `getRequirements()` and `getAvailableTeacher()`.

📁 **Files:** in `task_4/js/subjects/`

---

### **Task 7 – Brand Convention & Nominal Typing**

In the final task, I explored nominal typing by creating interfaces:

- `MajorCredits`
- `MinorCredits`

Each had a `credits` field and a brand property to differentiate between them.  
I also implemented:

- `sumMajorCredits()`  
- `sumMinorCredits()`

📁 **File:** `task_5/js/main.ts`

---

## ▶️ How I Run Each Task

1. I move into the task directory:

   ```bash
   cd task_0


Then I install all dependencies:

npm install

I build the TypeScript files:

npm run build

To test it in the browser, I start the development server:

npm run start-dev

I always make sure the console prints:

No type errors found.

🧠 What I Learned

Through this project, I learned that:

TypeScript improves code readability and reduces runtime bugs.

Interfaces make object structure clear and enforce consistency.

Declaration merging allows me to extend and organize code efficiently.

Working with namespaces and ambient declarations helps when using external libraries.

Nominal typing adds safety when handling types that look similar but are conceptually different.
