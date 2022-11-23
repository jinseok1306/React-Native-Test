# React-Native-Test
React Native를 공부하며 필수 기능들을 테스트한 App입니다. 공부하며 정리한 개념 및 사용법을 정리합니다.
  
  
  
## React Native 개념과 특징
### 1. React Native란?

React Native는 ios 와 Android에서 동작하는 네이티브 모바일 앱을 만드는 자바스크립트 프레임워크이다.  React Native는 사용자 인터페이스를 만드는 페이스북의 Javascript 라이브러리인 React에 기반을 두고 있는데, 브라우저가 아닌 모바일 플랫폼이 타깃이다. 즉 웹 개발자가 익숙한  Javascript를 이용하면서 겉모습과 실제 동작까지 진짜 네이티브인 모바일 앱을 만들 수 있다.

### 2. 장점

- 대상 플랫폼의 표준 렌더링 API를 사용한다.
- React Native는 작성한 마크업을 플랫폼에 따라 그에 상응하는 네이티브 엘리먼트로 전환하며 메인 UI 스레드와 분리되어 실행되기에 앱의 역량을 줄이지 않아도 빠른 성능을 유지할 수 있다.
- 강력한 개발자 도구과 의미있는 오류 메세지를 기본적으로 포함하고 있다.
- 똑똑한 디버깅 도구와 에러 리포팅 기능을 제공한다.
- Javascript 개발 시 선호하는 텍스트 에디터 사용이 가능하다(ios는 xcode, Android 앱은 Android Studoi에 제한되지 않음)
- 코드재사용이 가능하다. React 코드를 작성하는 방법을 아는 개발자라면 누구나 웹, ios, android를 타깃으로 결과물을 만들 수 있다.

### 3. 단점

- 추가적인 레이어가 있기에 디버깅이 간단하지 않다.
- 대상 플랫폼의 새로운 버전이 공개되었을 때 React Native가 이를 모두 지원하는데 까지 시간이 걸린다.
  
  
  
## Template 적용하기
### npm

npm에 등록된 템플릿을 사용하는 방법이다.  npm에 등록된 package는 [https://www.npmjs.com/search?q=react native template](https://www.npmjs.com/search?q=react%20native%20template) 를 참고하면 된다.

```powershell
npx react-native init 프로젝트명 --template 템플릿명
```

### file

로컬경로에 저장된 템플릿을 사용하는 방법이다.

```powershell
npx react-native init 프로젝트명 --template 
file://템플릿 경로
```

### URL

URL 링크를 사용하는 방법으로 주로 GitHub에서 가져올 때 사용한다.
