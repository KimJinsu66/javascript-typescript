// 2021.02.13
// alert, prompt, confirm

alert("자주 사용하는 alert");

// prompt(title, [default]);
prompt("入力してください", "good");

let age = prompt('나이를 입력해주세요');
alert(`당신의 나이는 ${age} 입니다`); // 변수 넣기 위해서는 `` 써야 하는 것에 주의!

// confirm(question);

confirm("삭제하시겠습니까?");