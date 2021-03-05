### 📅 created : 2021.03.04
### 📅 updated : 2021.03.04
### 📝 content : 팩토리 와 클래스

---

## 📝 클래스

```js
class Person {

  constructor(name) {
		this._name = name;
	}

	sayHi() {
		console.log(`Hi! ${this._name}`);
	}

	get name() {
		return this._name;
	}

	set name(name) {
		return this._name = name;
	}
}

// create instance
const jinsu = new Person('Jinsu');
jinsu.sayHi(); // Hi! Jinsu
```

### 📋 class

- 클래스 몸체에는 메소드만 선언 가능하다
- 클래스도 함수의 한 종류이다.
- private, public, protected 키워드와 같은 접근 제한자 지원 X
- 

### 📋 constructor(생성자)

- 클래스 바디에 클래스 필드(멤버 변수)를 선언하면 문법에러 발생
- 클래스의 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다

### 📋 getter, setter

✏️ getter
- getter은 클래스 필드에 접근할 때 마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용
- getter은 메소드 이름 앞에 `get`을 사용해 정의
- getter은 이름 그대로 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 함!

✏️ setter
- 클래스 필드에 값을 할당할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용
- setter는 메소드 이름 앞에 `set`을 이용해 정의
- 메소드 이름은 클래스 필드 이름처럼 사용할 것

### 📋 정적 메소드(static)

- 정적 메소드는 클래스의 인스턴스가 아닌 클래스 이름으로 호출한다
- 클래스의 인스턴스를 생성하지 않아도 호출 가능

### 📋 클래스 상속

✏️ extends 키워드
- 부모 클래스를 상속받는 자식 클래스를 정의 할때 사용한다

✏️ super 키워드
- super 키워드는 부모 클래스를 참조(Reference)할 대 또는 부모 클래스의 constructor을 호출 할 때 사용한다

## 📝 팩터리

✏️ (새로운) 객체를 리턴하는 함수이다.(클래스나 생성자 함수는 아니라는 점에 주의!)
JS는 모든 함수가 return 할 수 있는데 이 때 new 키워드가 없으면 팩토리 함수 이다.

- JS에서 팩토리 함수는 매력적이다
- 클래스와 new 키워드의 복잡함 없이 객체 인스턴스를 쉽게 생성 할 수 있다.


## 📝 class vs factory

```js
// class
class TodoModel {
    constructor(){
        this.todos = [];
        this.lastChange = null;
    }
    
    addToPrivateList(){
        console.log("addToPrivateList"); 
    }

    add() { console.log("add"); }
    reload(){}
}

// factory
function TodoModel(){
    var todos = [];
    var lastChange = null;
        
    function addToPrivateList(){
        console.log("addToPrivateList"); 
    }

    function add() { console.log("add"); }
    function reload(){}
    
    return Object.freeze({
        add,
        reload
    });
}
```

### 📋 캡슐화(Encapsulation)

내부 변수, 감추고 싶은 함수에 접근 가능한지 여부를 확인

- class: 접근 가능
- factory: 접근 불가능

### 📋 불변성(Immutable API)

한번 정의된 기능(함수)는 변경되지 않아야 합니다

- class: 함수 변경가능
- factory : 함수 변경 불가능


### 📋 메모리

- 메모리 소비에 있어서 class 방식이 factory 보다 우수하다.
- but 수천개의 동일한 객체를 만들 때 factory 함수의 메모리 비용이 많이 드는 것을 볼 수 있다.

### 📋 결론

factory 함수를 쓰도록 하자!

---

📰 참조

- https://corock.tistory.com/472
- https://steemit.com/kr/@wonsama/javascript-class-vs-factory
- https://ui.toast.com/weekly-pick/ko_20160905