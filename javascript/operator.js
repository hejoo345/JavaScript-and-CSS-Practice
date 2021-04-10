// 1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`String literals: 1 + 2 =  ${1+2} `);

//2. Numberic operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exponentiation

//3. Increment and decrement operators
let counter =2;
const preIncrement = ++counter;
//counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDEcrement: ${postDecrement}, counter: ${counter}`);


//4. Assignment operators
let x = 3;
let y = 6;
x +=y;
x -=y;
x *=y;
x /=y;

//5. Comparison operators
console.log(10<6); //less than
console.log(10<=6); //less than or equal
console.log(10>6); // 
console.log(10>=6); //


//6. Logical operators: ||(or) , && (and), !(not)
const value1= true;
const value2= 4< 2; //false

// ||(or), finds the first truthy value
console.log(`or: ${value1 || value2|| check()}`);

// &&(and), finds the first falsy value
console.log(`and: ${value1 && value2&& check()}`);

//often used to compress long if-statement
//nullableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for (let i=0; i<10;i++){
        //wasting time
        console.log('힝');//value1이 true 면 힝 안나옴 true 만나는 순간 끝내거든
    }
    return true;
}

//! (not)
console.log(!value1);


//7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 웬만하면 이거 사용
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 =  ellie1;
console.log(ellie1 == ellie2); //각기 다른 reference
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false); //true
console.log('' === false);//false
console.log(null == undefined); //true
console.log(null === undefined);//false


//8.Conditional operators: if
//if, else if, else
const name = 'hee';
//9. Ternary operator: ?
//condition > value1 : value2;
console.log(name === 'hee'? 'yes':'no');


//10.Switch statement
const grade = '4';

switch(grade){
    case '1':
        console.log("x");
        break;
    case '2':
    case '3':
        console.log("아니라고");
        break;
    case '4':
        console.log('정답');
        break;
}


//11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i=3;
while(i>0){
    console.log(`do while: ${i}`);
    i--;
}
//do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while(i>0);

//for loop, for(begin; condition; step)

//nestend loops
for(let i=0;i<3; i++){
    for(let j =0; j<3; j++){
        console.log(`i:${i},j:${j}`);
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let num=0; num<=10;num++){
    if(num%2!=0) continue;
    console.log(num);
}

//Q2. iterate form 0 to 10and print number until reaching 8 (use break)
for(let i=0;i<=10;i++){
    if(i>8) break;
    console.log(i);
}