### 📅 created : 2021.03.02
### 📅 updated : 2021.03.02
### 📝 content : 메시지 큐와 이벤트

---

## 📝 Event Loop

✏️ JS는 C++, Ruby, Python같은 언어와 달리 `싱글 스레드 언어` 이다.

📜 싱글 스레드 언어

- 한번에 한가지 일만 할 수 있다.
- 멀티 쓰레딩을 복잡하게 이용할 필요가 없다.
- but 복잡한 작업을 수행할 수 없다는 의미이기도 하다

📜 JS Runtime

JS는 두개의 메인 컴포넌트를 갖는다

- Heap(힙) : 메모리 할당(혹은 취소)
- Call Stack : 현재 프로그램의 어디에 위치하는지 기록

밑에 있는 js브라우저 사진의 동작을 잘 이해하자

![js브라우저 사진](https://d6vdma9166ldh.cloudfront.net/media/images/9aacbcd0-44c5-45e1-b3eb-be84a2eb99d8.png)

---

📰 참조

1. https://www.zeolearn.com/magazine/understanding-the-javascript-event-loop
2. https://muang-kim.tistory.com/250
3. https://github.com/ShigatsuEl/33-js-concepts-review/blob/master/Concept9/Concept9.md
