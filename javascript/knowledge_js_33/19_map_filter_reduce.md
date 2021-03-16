### 📅 created : 2021.03.05
### 📅 updated : 2021.03.05
### 📝 content : map, filter, reduce

---

## 📝 map

✏️ 요소를 일괄적으로 변경한다
인자 값 : currentValue, index, array

```js
let numbers = [1, 2, 3, 4, 5]
let doubleNumbers = number.map((n) => n * 2);

doubleNumbers // [2, 4, 6, 8, 10]
```

## 📝 filter

요소를 걸러내어 배열로 true / false 반환, 없으면 빈 배열

```js
let numbers = [1, 2, 3, 4, 5]
let evenNumbers = number.filter((n) => n % 2 === 0)

evenNumbers // [2, 4]
```


## 📝 reduce

reducer은 한국말로 변형 하는 것을 말한다.

reduce 기본 문법 : 
```js
배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
```

💥 누적값이라는 점에 주의!

덧셈 예시
```js
oneTwoThree = [1, 2, 3]
result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);
// 0 1 0
// 1 2 1
// 3 3 2
result; // 6
```

map 처럼도 쓸 수 있다

```js
const numbers = [1, 2, 3, 4, 5 ,6 ,7, 8, 9, 10];
const doubleNumbers = numbers.reduce((acc, cur) => {
    acc.push(cur * 2);
    return acc;
}, []);
doubleNumbers
```

---

📰 참조
- https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d
- https://brunch.co.kr/@swimjiy/15
- [[번역] 당신의 자바스크립트를 간소화하세요 — .map(), .reduce(), 그리고 .filter() 를 통해서](https://medium.com/@saerombang11/%EB%B2%88%EC%97%AD-%EB%8B%B9%EC%8B%A0%EC%9D%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%A5%BC-%EA%B0%84%EC%86%8C%ED%99%94%ED%95%98%EC%84%B8%EC%9A%94-map-reduce-%EA%B7%B8%EB%A6%AC%EA%B3%A0-filter-%EB%A5%BC-%ED%86%B5%ED%95%B4%EC%84%9C-b2ace180d157)
- https://velog.io/@decody/map-%EC%A0%95%EB%A6%AC
