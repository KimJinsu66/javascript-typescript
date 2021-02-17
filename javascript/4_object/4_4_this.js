// method 와 this

// 일반적인 example
let user_john = {
  name: "John",
  age: 30
}

user_john.sayHi = () => {
  console.log("Hello!");
};

user_john.sayHi();

// this example

let user_kim = {
  name: "Kim",
  age: 27,
  
  // this는 현재 객체를 나타낸다.
  sayHi() {
    console.log(this.name);
  }
}

user_kim.sayHi();

/*
  js의 this는 다른 프로그래밍 언어의 this와 다르다!
  js에서는 모든 함수에 this를 사용 가능하다.
  js의 this는 점 앞의 객체가 무엇인가에 따라 자유롭게 결정된다!
  함수를 만들어 여러객체에서 재사용할 수 있다는 장점 but 이것이 실수로 이루어질 수 있다.
*/

//예시
let user1 = { name: "Jin" };
let user2 = { name: "Su"  };

// arrow function은 안된다. 결과값 undefined
const sayHello = () => {
  console.log(this.name);
}

user1.func = sayHello;
user2.func = sayHello;

user1.func();
user2.func();

function sayHello2() {
  console.log(this.name);
}

user1.f = sayHello2;
user2.f = sayHello2;

user1.f();
user2.f();

// 체이닝 예제

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    console.log( this.step );
    return this;
  }
};

ladder.up().up().up().down().showStep();