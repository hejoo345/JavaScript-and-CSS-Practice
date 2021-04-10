//함수 선언
// 함수 호출

function doSomething(add){
    console.log(add);
    console.log(add(2,3));
}

function add(a,b){
    const sum = a+b;
    return sum;
}

doSomething(add);

const addFun =add;
console.log(addFun(1,2)); //3 
