/*
  written by : Jinsu Kim
  created : 2021.02.24
  updated : 2021.02.24
  information : 구조 분해 할당(destructuring assignment)
*/

// 배열 분해하기
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(firstName);
console.log(title);

let user = {
  name: "Jinsu",
  age: 27
};

let {name, age} = user;

console.log("객체에서 변수로")
console.log(name);
console.log(age);

// { 객체 프로퍼티: 목표변수 }
let {name: n, age: a} = user;
console.log( n );
console.log( a );

// 중첩 구조 분해(nested destructuring)

let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true
};

// 코드를 여러 줄에 걸쳐 작성해 의도하는 바를 명확히 드러냄
let {
  size: {                // size는 여기,
    width,
    height
  },
  items: [item1, item2], // items는 여기에 할당함
  title1 = "Menu"         // 분해하려는 객체에 title 프로퍼티가 없으므로 기본값을 사용함
} = options;

console.log(title1);  // Menu
console.log(width);  // 100
console.log(height); // 200
console.log(item1);  // Cake
console.log(item2);  // Donut



// 똑똑한 함수는 전달받은 객체를 분해해 변수에 즉시 할당함
function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
  // title, items – 객체 options에서 가져옴
  // width, height – 기본값
  console.log( `${title} ${width} ${height}` ); // My Menu 200 100
  console.log( items ); // Item1, Item2
}

// 함수에 전달할 객체
options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};
showMenu(options);

// 좀 더 고급과정으로 갔을 때 다시한번 보고 사용할 수 있도록 하면 좋을 것 같다.