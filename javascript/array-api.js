// Q1. make a string out of an array => "join"
{
    const fruits = ['apple', 'banana', 'orange'];
    //console.log(fruits.toString());

    const result = fruits.join('|'); //"join" string으로 바꿔줌 괄호안은 구분자
    console.log(result);
  }
  
  // Q2. make an array out of a string => "split"
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // console.log(Array(fruits));

    const result = fruits.split(',');
    console.log(result);


  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1] => "reverse"
  {
    const array = [1, 2, 3, 4, 5];
    // console.log(array.reverse());
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements => "slice"
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5); //splice는 배열 자체를 수정 slice는 원하는 부분만
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90 => "find"
  {
      const result = students.find((student) =>student.score === 90);
      console.log(result);

  }
  
  // Q6. make an array of enrolled students => "filter"
  {
      const result = students.filter((student)=> student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores => "map"
  // result should be: [45, 80, 90, 66, 88]
  //배열안에 있는 요소들을 우리가 원하는 함수를 이용해서
//   다른 방식의 데이터를 만들고 싶을 때
  {
      const result = students.map((student) => student.score);
      console.log(result);

  }
  
  // Q8. check if there is a student with the score lower than 50 => "some"
  {
      // console.clear();
      const result = students.some((student)=> student.score < 50);
      console.log(result); //true

      const result2 = students.every((student)=> student.score < 50);
      console.log(result2); //false

  }
  
  // Q9. compute students' average score => "reduce"
  //배열 하나하나를 돌면서 값을 누적할 때
  {
      const result = students.reduce((prev, curr)=>{
        console.log('-------------');
          console.log(prev);
          console.log(curr);
          return prev + curr.score;
      },0);
      console.log(result);


      const result2 = students.reduce((prev,curr) => prev+curr.score,0);
      console.log(result2 / students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map((student)=>student.score)
      .filter((score)=>score >= 50)
      .join();
      console.log(result);

  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map((student) => student.score)
      .sort((a,b)=>b-a) //이렇게 하면 내림차순
      .join(); //string으로 변환
      console.log(result);

  }