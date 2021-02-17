// new Object();, {};
let user  = new Object();
let user2 = {};

let john = {
  name: "John",
  age: 30
};

john.country = "America";
console.log(john.name);
console.log(john.age);
console.log(john.country);

// 프로퍼티 값을 기존 변수에서 받아와 사용하는 경우

function makeUser(name, age) {
	return {
		name: name,
		age: age
		// 등등
	};
}

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permision1과 permission2의 프로퍼티를 john에 복사한다

Object.assign(john, permissions1, permissions2);

console.log(john);
