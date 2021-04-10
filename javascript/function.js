//Function
//- fundamental building block in the program
//- subprogram con be used multiple times
//- performs a task or calculates a value

//1. Function declaration
//function name(param1, param2) {body ... return;}
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS

function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('hello');
log(1234);


//2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


//3.Default parameters (Added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi');


//4.Rest parameters (Added in ES6)
function printAll(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}


printAll('dream','coding','hee');


//5.Local scope
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum: ${sum(1,2)}`);

//7.Early return , early exit
//bad
function upgradeUSer(user){
    if(user.point > 10){
        //long upgrade logic...
    }
}

//good
function upgradeUSer(user){
    if(user.point <= 10){
        return;
    }
    //long upgrade logic...
}


//First-class function
//functions are reated like any other variable
//can be assigned as a value to variable
//can be passed as an argument to other functions/
//can be returned by another function

//1.Function expression
//a function declaration can be called earlier than it is defiend. (hoisted)
//a function expression is created when the execution reaches it.
const print = function(){
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('yes!');
};
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

//Arrow function
//always anonymous
const simplePrint = function(){
    console.log('simplePrint');
};

const simplePrint2 = () => console.log('simplePrint');
const add = (a,b) => a+b;
const simpleMultiply = (a,b) =>{
    return a*b;
};
console.log(simpleMultiply(2,3));

//IIFE: Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();

//Quiz time
//function calculate(command, a, b)
//command: add, substract, divied, multiply, remainder

const calculate = (command, a, b) =>{
    switch(command){
        case 'add':
            return a+b;
            break;
        case 'sub':
            return a-b;
            break;
        case 'div':
            return a/b;
            break;
        case 'mul':
            return a*b;
            break;
        case 'remainder':
            return a%b;
            break;
        default:
            throw Error('unknown command');
    }
};

console.log(calculate('mul', 4, 2));