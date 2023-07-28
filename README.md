# JavaScript Project Scaffolding
*자바스크립트 프로젝트 환경 구성 스케폴딩*

> **Note**: 해당 문서는 자바스크립트 프로젝트에 필요한 기본적인 환경 구성을 위한 [스케폴딩](https://www.wisewiredbooks.com/term-dict/common/scaffolding.html) 자료입니다. 

---


패키지 설치 항목
- [live-server](https://www.npmjs.com/package/live-server)
- [json-server](https://www.npmjs.com/package/json-server)
- [prettier](https://www.npmjs.com/package/prettier)
- [prettier-plugin-tailwindcss](https://www.npmjs.com/package/prettier-plugin-tailwindcss)
- [tailwindcss](https://www.npmjs.com/package/tailwindcss)
- [postcss-import](https://www.npmjs.com/package/postcss-import)
- [npm-run-all](https://www.npmjs.com/package/npm-run-all)


---

## live-server

```
로컬 환경을 실제 서버처럼 작동시켜 웹 개발을 도와주는 패키지로서 사용자가 직접 호스트,포트번호 를 바꿔서 클라이언트 서버를 구동시키고자 할때 사용됩니다.

```

---
## json-server

```
로컬 데이터 서버를 위한 패키지 모듈로서 DB와 API서버를 생성해주는 패키지 입니다.
백엔드 개발에서 실제 DB와 API Server가 구축될 때까지 프론트엔드 개발에 임시적으로 사용할 mock data를 생성하기 위해 사용됩니다.

```
---
## prettier

```
협업을 위해 formatter 기능을 활용해 코드의 통일성을 유지시켜주는 패키지 입니다.
ESLint가 코드의 퀄리티를 일관적으로 유지시켜준다면, Prettier는 일관적인 코드 스타일을 유지할 수 있게 도와줍니다. 

```
---
## prettier

```
협업을 위해 formatter 기능을 활용해 코드의 통일성을 유지시켜주는 패키지 입니다.
ESLint가 코드의 퀄리티를 일관적으로 유지시켜준다면, Prettier는 일관적인 코드 스타일을 유지할 수 있게 도와줍니다. 

```

---
## prettier-plugin-tailwindcss

```
tailwind가 가지고 있는 Automatic class sorting 기능을 prettier의 기능을 활용해 자동 포멧이 일어날 수 있도록 도와주는 플러그인 패키지 입니다.

```
[Automatic class sorting](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

---
## tailwindcss

```
utility-first를 지향하는 CSS의 프레임워크으로 미리 세팅된 유틸리티 클래스를 활용하여 HTML 코드 내에서 스타일링을 가능하게 하는 style 패키지 입니다.
tailwind가 제공하는 유틸리티 클래스들을 다양하게 조합하면 추가적인 CSS코드 작성 없이 스타일링이 가능합니다.

```
[Tailwind](https://tailwindcss.com/)

---
## postcss-import

```
자바스크립트 기반의 플러그인을 사용하여 css 기능을 자동화 시키는 도구로 postcss가 가지고 있는 플러그인 환경을 사용해 css를 사용할 수 있습니다.
css의 import 기능과 tailwind의 css 병합을 위해 사용됩니다.

```
[postcss](https://postcss.org/)



---

## START

> **Note**: 해당 프리셋은 node_modules를 내장하고 있지 않습니다. 다운받아 그대로 사용할 경우 `npm install` 을 하신 후 사용해 주세요.

<br/>

### 백엔드 서버 실행
```bash
npm run serve:backend
```
<br/>

### 프론트 서버 실행
```bash
npm run serve:frontend
```
<br/>

### tailwind 실행
```bash
npm run tailwind
```
<br/>

### 동시 실행
```bash
npm run start
```







**[⬆ back to top](#JavaScript-Project-Scaffolding)**















