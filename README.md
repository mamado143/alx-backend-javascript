0x04. Typescript
JavaScript
TypeScript
 Weight: 1
 Project over - took place from Jul 3, 2024 6:00 AM to Jul 4, 2024 6:00 AM
 Manual QA review was done on Jul 13, 2024 11:16 AM
In a nutshell…
Manual QA review: 0.0/67 mandatory
Altogether:  0.0%
Mandatory: 0.0%
Optional: no optional tasks
Overall comment:
Project was failed automatically.



Resources
Read or watch:

TypeScript in 5 minutes
TypeScript documentation
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Basic types in Typescript
Interfaces, Classes, and functions
How to work with the DOM and Typescript
Generic types
How to use namespaces
How to merge declarations
How to use an ambient Namespace to import an external library
Basic nominal typing with Typescript
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
All your files will be transpiled on Ubuntu 18.04
Your TS scripts will be checked with jest (version 24.9.* )
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the ts extension when possible
The Typescript compiler should not show any warning or error when compiling your code
Configuration Files
Please use these files for the following tasks

package.json
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
tsconfig.json
Click to show/hide file contents
webpack.config.js
Click to show/hide file contents
Tasks
0. Creating an interface for a student
mandatory
Score: 0.0% (Checks completed: 0.0%)
Copy the following configuration files (provided above) into the task_0 directory: package.json, .eslintrc.js, tsconfig.json, webpack.config.js

Write your code in the main.ts file:

Write an interface named Student that accepts the following elements: firstName(string), lastName(string), age(number), and location(string)
Create two students, and create an array named studentsList containing the two variables
Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
Each row should contain the first name of the student and the location
Requirements:

When running, Webpack should return No type errors found.
Every variable should use TypeScript when possible.
