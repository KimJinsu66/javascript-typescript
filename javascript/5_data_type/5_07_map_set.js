/*
  written by : Jinsu Kim
  created : 2021.02.22
  updated : 2021.02.22
  information : map and set
*/

// map은 키에 다양한 자료형을 허용한다.

let map = new Map();

// map.set(key, value);
map.set('1',  'str1');
map.set(1,    'num1');
map.set(true, 'bool1');

// map.get(key) key에 해당하는 값을 반환(key가 없으면 undefined)
console.log( map.get(1) );

// map.size
console.log( map.size );

// map은 key로 객체를 허용한다
let jinsu = { name: "Jinsu" };
let visitsCountMap = new Map();

visitsCountMap.set(jinsu, 123);
console.log( visitsCountMap.get(jinsu) );

// map은 set을 호출할 때 마다 맴 자신이 호출 되기 때문에 체이닝 가능
map.set('2', 'str2').set(2, 'num2').set(false, 'bool2');


// keys and values
console.log(map.keys());
console.log(map.values());

// forEach도 지원한다.
map.forEach( (value, key, map) => {
  console.log(`${key}, ${value} print`);
});

// 객체를 맵으로 바꾸는 방법 Object.entries();
let obj = {
  name: "Jinsu",
  age: 26
};

let mapChangeObject = new Map(Object.entries(obj));
console.log( mapChangeObject.get('name') );

// 맵을 객체로 바꾸는 방법 Object.Entries

map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

obj = Object.fromEntries(map.entries()); // 맵을 일반 객체로 변환 (*)

// obj = { banana: 1, orange: 2, meat: 4 }
console.log(obj.orange); // 2

// set은 중복을 허용하지 않는 값을 모아놓은 특별한 컬렉션 & set에 키가 없는 값이 저장된다.
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 중복된 값은 저장되지 않는다.
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

// set.has(value) set내에 값이 존재하면 true 아니면 false
// set.clear()    set을 비운다
// set.size       set에 몇 개의 값이 있는지 return