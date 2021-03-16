### 📅 created : 2021.03.04
### 📅 updated : 2021.03.04
### 📝 content : this, call, apply, bind

---

## 📝 this

✏️ 현재의 실행 컨텍스트를 기반으로 호출자가 누구인지를 나타내는 식별자

웹 브라우저의 console 에서 this를 검색하면 window가 출력된다.

함수를 어떤 객체의 메서드로 호출하면 this의 값은 그 객체를 사용한다

```js
let user = {
    name: "jinsu",
    getName: function() {
      return this.name;
    }
};
user.getName(); // jinsu
```

- 함수가 정의된 방법이나 위치에 전혀 영향을 받지 않는다.
- 어디로 부터 호출되었는지가 중요하다

아래의 예시를 한번 봐보자

```js
var obj = {
  foo: function(){
    console.log(this);
  }
}

var fn = obj.foo;
console.log(fn();) // 결과 값은 window가 나왔다.
```

아래의 결과값은 window가 나왔다 왜 ??
obj.foo는 현재 함수이지만 `var fn`은 현재 window에서 선언되어 있기 때문이다.
### 📋

```js
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2() {
  this.a = 37;
  return {a: 38};
}

o = new C2();
console.log(o.a); // 38
```

function도 객체이기 때문에 생성자로 생성할 수 가 있는 것 같다

함수를 `new`키워드와 함께 생성자로 사용하면 this는 새로 생긱 객체에 묶인다.

## 📝 call or apply

✏️ this의 값을 한 문맥에서 다른 문맥으로 넘기려면 call, apply를 사용하여야 한다

```js
var user = {name: 'Jinsu'};

var name = 'Kim';

function printName() {
  return this.name;  
}

printName();           // 'Kim'
printName.call(user);  // 'Jinsu'
printName.apply(user); // 'Jinsu'
```

call과 apply의 차이점 ?

```js
var example = function (a, b, c) {
  return a + b + c;
};
example(1, 2, 3);
example.call(null, 1, 2, 3);
example.apply(null, [1, 2, 3]);
```

call은 함수와 똑같이 인자를 넣고
apply는 인자를 하나로 묶어 배열로 만들어 넣는다

언제 사용 할까 ?

- 함수의 arguments를 조작할 때 사용한다
  - arguments는 함수라면 처음부터 갖고 있는 숨겨진 속성(유사 배열이라는 점에 주의)


## 📝 bind

✏️ 함수가 가리키는 this만 바꾸고 호출하지 않는다

아래 예시를 살펴보자
```js
var obj = {
  string: 'zero',
  yell: function() {
    alert(this.string);
  }
};

var obj2 = {
  string: 'what?'
};

var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'
```

yell2에 object.yell을 obj2에 bind 하여 obj2에서도 yell 함수를 사용할 수 있게 되었다.

---

📰 참조

- https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd
