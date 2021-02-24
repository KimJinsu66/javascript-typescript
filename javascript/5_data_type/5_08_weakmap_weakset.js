/*
  written by : Jinsu Kim
  created : 2021.02.23
  updated : 2021.02.23
  information : weakMap and weakSet
*/

// 맵과 위크맵의 첫번 째 차이 : 위크맵의 키가 반드시 객체여야 한다!
// 위크맵과 위크셋의 가장 큰 단점은 반복 작업이 불가능하다.
// 위크맵과 위크셋은 객체와 함께 추가, 데이터를 저장하는 용도로 사용된다.

let jinsu = { name: "Jinsu" };

let weakMap = new WeakMap();
weakMap.set(jinsu, "...");

jinsu = null; // 참조를 덮어씀
// jinsu를 나타내는 객체는 메모리에서 지워진다!!

// 맵과 위크맵의 두번 째 차이 : keys(), values(), entries()메소드를 지원하지 않는다.
// 아래와 지원하는 메소드를
weakMap.get(key);
weakMap.set(key, value);
weakMap.delete(key);
weakMap.has(key);

/*
위크맵은 어떤 경우에 사용??
  부차적인 데이터를 저장할 곳이 필요 할 때 활용된다!
  위크맵을 사용해 사용자 방문 횟수를 저장하면 visitsCountMap을 수동으로 청소해줄 필요 X  
*/

weakMap.set(Kim, "비밀문서");
// Kim 사망하면, 비밀문서는 자동으로 파기됩니다.
let visitsCountMap = new WeakMap(); // 맵에 사용자의 방문 횟수를 저장함

// 사용자가 방문하면 방문 횟수를 늘려줍니다.
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

/* 2. 캐싱할 때 사용된다. 
  map을 사용하면 객체가 없어지면 cache를 수동으로 청소해줘야한다.
  but 위크맵을 하면 객체가 메모리에서 삭제되면 캐시에 저장된 결과 역시 메모리에서 자동 삭제됨
*/


// 위스셋(WeakSet) : 
// set 과 WeakSet의 차이점 : 객체만 저장할 수 있다는 점이 다르다(원시값 저장 불가능)

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John이 사이트를 방문합니다.
visitedSet.add(pete); // 이어서 Pete가 사이트를 방문합니다.
visitedSet.add(john); // 이어서 John이 다시 사이트를 방문합니다.

// visitedSet엔 두 명의 사용자가 저장될 겁니다.

// John의 방문 여부를 확인해보겠습니다.
alert(visitedSet.has(john)); // true

// Mary의 방문 여부를 확인해보겠습니다.
alert(visitedSet.has(mary)); // false

john = null;

// visitedSet에서 john을 나타내는 객체가 자동으로 삭제됩니다.