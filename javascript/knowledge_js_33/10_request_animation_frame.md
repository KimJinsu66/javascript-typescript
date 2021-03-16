### 📅 created : 2021.03.02
### 📅 updated : 2021.03.02
### 📝 content : setTimeout, setInterval, requestAnimationFrame

---

## 📝 setTimeout, setInterval

- [예전에 정리했던 github 주소 참고하기](https://github.com/KimJinsu66/javascript-typescript/blob/main/javascript/6_function_advance/6_08_settimeout_setinterval.md)

- [소스코드](https://github.com/KimJinsu66/javascript-typescript/blob/main/javascript/6_function_advance/6_08_settimeout_setinterval.js)

## 📝 requestAnimationFrame

```js
requestAnimationFrame(반복할 함수)
```

✏️ 장점

- 브라우저가 프레임 초기 단계에 맞춰 애니메이션 코드를 실행시킴으로써 애니메이션이 더 부드럽게 동작
- setInterval이나 setTimeout은 프레임을 신경쓰지 않고 동작
  - 애니메이션 코드가 50ms가 걸린다고 가정하면 16.6ms동안 프레임을 찍어내지 못해 뚝뚝 끊기는 현상이 발생

---

📰 참조

1. https://steadev.tistory.com/51
  - 동영상이 있는 참조 사이트
