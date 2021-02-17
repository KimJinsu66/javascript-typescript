// constructor & new

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

console.log(user.name);    // Jack
console.log(user.isAdmin); // false

/*
  위의 코드의 동작은 아래와 같이 움직인다.
  1. 빈 객체를 만들어 this에 할당
  2. 함수 본문을 실행
  3. this에 새로운 프로퍼티를 추가해 this를 수정
  4. this를 반환합니다.
*/

/*
  모든 함수는 생성자 함수가 될 수 있다.
  new를 붙여 실행한다면 어떤 함수라도 위에 언급된 알고리즘이 실행됨
  첫글짜가 대문자는 생성자 함수라는 공통의 약속을 잊지 않도록 하자!
*/

function Calculator() {
  this.read = function() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  };

  this.sum = function() {
    return this.x + this.y;
  };

  this.mul = function() {
    return this.x * this.y;
  };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );