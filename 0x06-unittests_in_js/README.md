# Unittests
Curriculum
Short Specializations
Average: 89.77%
0x06. Unittests in JS
UnitTests
Back-end
JavaScript
ES6
NodeJS
ExpressJS
Mocha
 Weight: 1
 Project over - took place from Aug 21, 2024 6:00 AM to Aug 23, 2024 6:00 AM
 An auto review will be launched at the deadline
In a nutshell…
Auto QA review: 0.0/64 mandatory
Altogether:  0.0%
Mandatory: 0.0%
Optional: no optional tasks


Resources
Read or watch:

Mocha documentation
Chai
Sinon
Express
Request
How to Test NodeJS Apps using Mocha, Chai and SinonJS
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to use Mocha to write a test suite
How to use different assertion libraries (Node or Chai)
How to present long test suites
When and how to use spies
When and how to use stubs
What are hooks and when to use them
Unit testing with Async functions
How to write integration tests with a small node server
Requirements
All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the js extension
When running every test with npm run test *.test.js, everything should pass correctly without any warning or error
Tasks
0. Basic test with Mocha and Node assertion library
mandatory
Score: 0.0% (Checks completed: 0.0%)
Install Mocha using npm:

Set up a scripts in your package.json to quickly run Mocha using npm test
You have to use assert
Create a new file named 0-calcul.js:

Create a function named calculateNumber. It should accepts two arguments (number) a and b
The function should round a and b and return the sum of it
Test cases

Create a file 0-calcul.test.js that contains test cases of this function
You can assume a and b are always number
Tests should be around the “rounded” part
Tips:

For the sake of the example, this test suite is slightly extreme and probably not needed
However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases
Requirements:

You have to use assert
You should be able to run the test suite using npm test 0-calcul.test.js
Every test should pass without any warning
Expected output

> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
>
Run test

bob@dylan:~$ npm test 0-calcul.test.js

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
