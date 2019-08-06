## HTML 블록 요소 와 인라인 요소

- 블록 요소
  - div, h1, p
  - 사용가능한 최대 가로 너비를 사용한다. 
  - 크기지정이 가능하다
  - width:100%; height:0; 으로 시작한다. (실제로는 auto이다 )
  - 수직을 쌓인다.
  - margin,padding 속성 사용시 위,아래,좌,우 모두 사용가능하다.
  - display속성의 기본값이 block
  
- 인라인 요소
  - span, img
  - 필요한 만큼의 너비만 사용한다.
  - 크기지정이 불가능하다.
  - width:0; height:0; 으로 시작한다. (실제로는 auto이다 )
  - 수평으로 쌓인다.
  - margin,padding 속성 사용시 좌,우만 사용가능하다.
  - display속성의 기본값이 inline

display 속성을 이용하면 인라인요소를 블록 요소로 블록요소를 인라인 요소로 변경 가능하다 

## 태그들 
#### html

html 에서 사용하는 언어코드는 ISO 639-1 를 따른다. 

- [https://ko.wikipedia.org/wiki/ISO_639-1_%EC%BD%94%EB%93%9C_%EB%AA%A9%EB%A1%9D](https://ko.wikipedia.org/wiki/ISO_639-1_코드_목록)
```html
<html lang="ko">
</html>
```

#### head
문서의 정보를 나타냅니다.

> EUC-KR 과 UTF-8의 차이점
> EUC-KR은 완성형으로 박 영 웅 이렇게 글자가 완성되어 있는 형태이고 UTF-8은 조합형으로 ㅂ ㅏ ㄱ ㅇ ㅕ ㅇ ㅇ ㅜ ㅇ 이렇게 글자들을 조합하여 만들어진다. EUC-KR을 사용하면 글자가 깨지는 현상이 발생할 수 있다.

* `style태그`는 아무 곳에서나 작성은 되지만 head 태그 안에서만 작성하는 습관을 들이자 

  ```html
  <!-- type은 기본으로 정의되어 있어서 작성을 안해줘도 된다.-->
  <style type="text/css">
  </style>
  ```

* `link 태그`도 type을 생략할수 있다. 

  ```html
  <!-- type은 생략 가능하고 type은 MIME 타입들이 들어갈수 있다 -->
  <!-- href에 파일 명만 적어주면 ./가 자동으로 인식이 된다 -->
  <link rel="stylesheet" type="text/css" href="main.css">
  ```

* `base 태그`

  * 문서에 포함된 상대 URL들의 기준 URL을 나타냄

  * html 문서에서 한번만 적용할 수 있어서 적용하면 전체 페이지 상대경로에 다 적용되기 때문에 주의하여 사용해야한다.

    ```html
    <head>
      <!-- link태그의  main.css는 ./css/main.css에서 찾는다. -->
      <base href="./css/">
      <link rel="steylsheet" href="main.css">
    </head>
    ```

#### body
문서의 구조를 나타냅니다.

- `header 태그 `

  - 소개나 탐색을 돕는 그룹을 나타낼때 사용한다.
  - header안에 header, footer태그는 들어 갈 수 없다.

- `footer 태그`

  - 작성자, 저작권 데이터, 관련된 문서의 링크에 대한 정보를 포함한다.
  - footer안에는 header, footer태그는 들어 갈 수 없다. 

- `h1~h6 태그`

  - 문서의 제목을 나타낼때 사용한다. 

  - 제목 폰트의 크기를 줄이기 위해서 낮은 단계를 사용자히 말고 크기를 줄이려면 CSS의 font-size를 이용하자

    - 크기를 지정하는 태그가 아니다.

  - 제목 단계를 건너뛰는 것을 피하자.

    - h1태그 다음에 h3태그가 오지않고 h2태그가 오도록 하자 

    







