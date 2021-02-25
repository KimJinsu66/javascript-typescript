/*
  written by : Jinsu Kim
  created : 2021.02.24
  updated : 2021.02.24
  information : Json과 메소드
*/

let student = {
    name: 'Jinsu',
    age: 27
};

let json = JSON.stringify(student);

console.log(typeof json);
console.log(json);

// JSON.stringify를 사용하면 원하는 값을 JSON으로 직렬화 가능
// JSON.parse를 사용하면 JSON을 본래 값으로 역 직렬화 가능

// 2021.02.24 json 쓸 일이 있으면 다시 공부하기.