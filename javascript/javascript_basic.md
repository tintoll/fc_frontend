## 강의 자료

- https://learnjs.vlpt.us/

## 논리연산자 우선 순위

```javascript
// NOT !
// AND &&
// OR ||
// 위의 순선대로 우선순위가 높음
const value = !( true && false || true && false || !false);
// !( true && false || true && false || true)
// !( false || false || true)
// !( true)
// false
```

