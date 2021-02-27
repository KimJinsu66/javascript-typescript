/*
  written by : Jinsu Kim
  created : 2021.02.26
  updated : 2021.02.26
  content : setTimeout과 setInterval을 이용한 호출 스케줄링 실제 작성한 코드
*/

function sayHi() {
  console.log("Hello Jinsu");
}

setTimeout(sayHi, 2000);


// 2초 간격으로 메시지를 보여줌 & // 5초 후에 정지
let timerId = setInterval(() => console.log("째깍"), 2000);
setTimeout(() => { clearInterval(timerId); console.log('정지'); }, 5000);

// 1초 간격으로 숫자 출력
// setInterval 이용
const printOneNumber = () => {
  console.log(1);
}

let printOneNumberId = setInterval(printOneNumber, 1000);
setTimeout(() => { clearInterval(printOneNumberId); }, 5000);
// setTimeout 이용방법

const printNumbers = (from, to) => {
  let currentN = from;

  setTimeout(function run() {
    console.log(currentN);
    if (currentN < to) {
      setTimeout(run, 1000);
    }
    currentN++;
  }, 1000);
}

printNumbers(5, 10);
