### 📅 created : 2021.03.02
### 📅 updated : 2021.03.02
### 📝 content : JS 엔진

---

## 📝 자바스크립트 엔진

### 📋 Google V8

- 현재 Chrome과 Node.js에서 사용중이다.

✏️ 엔진의 구조 Memory Heap and Call stack

- Memory Heap : 메모리 할당이 일어나는 곳
- Call Stack  : 코드 실행에 따라 호출 스택이 쌓이는 곳
- \+ Event Loop로 Task Queue(Event Queue)들을 관리 할 수 있다.

V8의 경우 웹 브라우저 내부에서 JS 수행속도 개선을 위해 처음 고안되었다.

속도 개선을 위해 인터프리터를 사용하는 대신 JS 코드를 머신코드로 번역 하는 JIT 컴파일러로 구현 됨


#### 📜 스택 오버플로우
- 스택의 사이즈를 초과 했을 때 발생하는 오류이다.
  - 재귀를 잘못 구현했을 때 쉽게 마주할 수 있는 오류

#### 📜 인터프리터

- 인터프리터란 프로그램밍 언어의 소스 코드를 바로 실행하는 컴퓨터 프로그램 또는 환경을 말한다. 
- 컴파일 된 프로그램의 실행 속도보다 느리다.

- 흔히 말하는 스크립트 언어가 대표적이다.
  - 자바스크립트, HTML, SQL, python, ruby 등..

[js구조](../js_image/완전한js.PNG)

위의 사진을 봐보자!

- DOM, Ajax, setTimeout과 같이 브라우저에서 제공하는 API를 Web API라고 한다
- Event Loop가 Call Stack이 비어있는지 아닌지, Task Queue에 Task가 존재하는지 아닌지 판단하는 역할을 맞는다.

---

📰 참조

- https://medium.com/humanscape-tech/javascript-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC%EB%A5%BC-%EC%82%B4%ED%8E%B4%EB%B4%85%EC%8B%9C%EB%8B%A4-aef465c9c43

- https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf

- https://medium.com/@kwangsoo/javascript-interpreter-36d23933ea93

- [자바스크립트는 어떻게 작동하는가~](https://engineering.huiseoul.com/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%98%EB%8A%94%EA%B0%80-v8-%EC%97%94%EC%A7%84%EC%9D%98-%EB%82%B4%EB%B6%80-%EC%B5%9C%EC%A0%81%ED%99%94%EB%90%9C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%9E%91%EC%84%B1%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%8B%A4%EC%84%AF-%EA%B0%80%EC%A7%80-%ED%8C%81-6c6f9832c1d9)