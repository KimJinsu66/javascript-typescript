### 📅 created : 2021.03.03
### 📅 updated : 2021.03.03
### 📝 content : DOM과 Layout Trees + Virtual DOM(가상 돔)

---

## 📝 가상 돔 Virtual DOM

✏️ Virtual DOM 이란 ?

-  가상돔은 쉽게 말해 DOM의 **`자바스크립트 객체로서의 표현`**

- 실제 DOM문서를 추상화한 개념, 변화가 많은 View를 실제 DOM에서 직접 처리하는 것이 아닌 Virtual Dom과 메모리에서 미리 처리하고 저장한 후에 실제 DOM과 동기화하는 프로그래밍 개념

📹 가상 DOM에 대해서 조금 더 공부하게 전에 아래의 유튜브 동영상을 시청해봐주세요!

> [PurelyFunctional tv - React and the Virtual DOM](https://www.youtube.com/watch?v=BYbgopx44vo)

### 📋 사용 이유

DOM의 단점 
- DOM의 가장 큰 단점은 DOM Tree가 수정될 때 마다 렌더트리가 계속해서 실시간으로 갱신된다는 점이다.

- 화면에서 10개의 수정사항이 발생하면 수정할 때 마다 새로운 랜더 트리가 10번 수정되면서 새롭게 만들어지게 된다.

그래서 Virtual DOM을 사용하게 되면?
- Virtual DOM을 활용하면 이러한 불필요한 렌더링 횟수 줄일 수 있다.
- React, Vue 등의 프레임워크들은 화면에 변화가 있을 때 마다 실시간으로 돔 트리를 수정하지 않고 변경사항이 모두 반영된 가상 돔을 만들어낸다
- 그 후 가상 돔을 이용해 한 번만 돔수정을 하게 되고 이는 한 번만 렌더 트리를 만들어내게 된다.

- 결과적으로는 한번만 렌더링하게 됨으로써 불필요한 렌더링 횟수를 줄인다!

### 📋 DOM의 장단점
DOM의 장점

- DOM 관리를 자동화하고 추상화하여 직접 할 필요가 없게 해준다.

- 전체 DOM Tree를 reload하지 않기 위해 변경한 부분과 변경되지 않는 부분을 직접 할 때는 추적해야 하나 이 또한 가상돔이 자동화해준다

- DOM 조작 자페를 포기함으로써 DOM을 수정하는 모든 부분 간의 동기화를 피할 수 있음

- 작은 단위로 쪼개서 필요한 만큼 자주 수정할 수 있다.
```js
const div = { 
  tagName: "div", 
  attributes: { "class": "img" },
  children: [
    { 
      tagName: "div",
      attributes: { "class": "name" },
      textContent: "name" 
    } // end div 
  ] 
} // end div

// 출처: https://code-masterjung.tistory.com/33 [Jacob's Development Blog]
```

💥 주의할 점 : 

가상 돔은 개발자가 작업을 보다 쉽게 할 수 있도록 도와주는 것 뿐이다!

가상돔은 목적을 위한 수단일 뿐이다라는 점을 기억하라고 주의 합시다!

---

📰 참조

- https://code-masterjung.tistory.com/33
- https://noogoonaa.tistory.com/53 
- https://spoit.tistory.com/24