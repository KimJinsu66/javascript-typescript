### 🙋‍♂️ written by : Jinsu Kim
### 📅 created : 2021.02.27
### 📅 updated : 2021.02.27
### 📝 content : call / apply와 데코레이터, 포워딩

> 이번 챕터는 함수 간에 호출을 어떻게 포워딩(forwarding)하는지, 함수를 어떻게 데코레이팅(decorating) 하는지에 대해 알아본다

## 📝 Decorator

### 📋 Decorator의 정의

- 코드의 일부를 다른 코드에 데코레이트(장식) 하는 것처럼 감싸는 것으로 `함수 합성`이나 `고차원 함수`라고 표현되어진다.


## 📝 코드 변경 없이 캐싱 기능 추가하기

```js
function slow(x) {
  // CPU 집약적인 작업이 여기에 올 수 있습니다.
  alert(`slow(${x})을/를 호출함`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {    // cache에 해당 키가 있으면
      return cache.get(x); // 대응하는 값을 cache에서 읽어옵니다.
    }

    let result = func(x);  // 그렇지 않은 경우엔 func를 호출하고,

    cache.set(x, result);  // 그 결과를 캐싱(저장)합니다.
    return result;
  };
}

slow = cachingDecorator(slow);

console.log( slow(1) ); // slow(1)이 저장되었습니다.
console.log( "다시 호출: " + slow(1) ); // 동일한 결과

console.log( slow(2) ); // slow(2)가 저장되었습니다.
console.log( "다시 호출: " + slow(2) ); // 윗줄과 동일한 결과
```
