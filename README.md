# React-Native-Test
React Native를 공부하며 필수 기능들을 테스트한 App이다. 공부하며 정리한 개념 및 사용법을 정리한다.
  
  
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
  

## 개발 환경 구축하기 (Windows OS)
### 1. Node.js 설치하기

[https://nodejs.org/ko/](https://nodejs.org/ko/) 사이트 접속 후 Node.js  LTS 설치파일 다운 후 설치를 진행한다.

### 2. 자바 JDK 설치
[Java VS Code 설치방법(Window)](https://www.notion.so/626bfc93780b48318769851dbbe7fba2)를 참고하여  15버전 설치를 진행한다. (17버전 호환안됨)
  
### 3. React Native 설치하기
명령 프롬프트 실행 후 `npm install -g react-native-cli`  입력  

### 4. Android Studio 설치하기
Android를 개발하기 위해서는 Android Studio, ios 개발을 위해서는 Xcode가 필요하다.(Xcode는 Mac에서만 설치 가능)  
Android Studio은 [https://developer.android.com/studio](https://developer.android.com/studio) 사이트에서 다운로드 받는다.
  
### 5. 에뮬레이터 생성하기
Android 설치 후 메인화면 More Actions → Virtual Device Manager → Create Device → 필요한 스펙에 맞게 생성  

### 6. Android SDK 설정하기
메인 화면 Move Actions → SDK Manager → SDK Platforms 탭에서 Show Package Details 체크 후 아래와 같이 설치(사용하는 버전 체크할 것)
- `Android SDK Platform 29`
- `Intel x86 Atom_64 System Image` or `Google APIs Intel x86 Atom System Image`  

### 7. Android 환경변수 설정
1\) 시스템 환경 변수 편집 → 환경변수 → 시스템 변수 새로만들기 클릭 후
- 변수 이름 : ANDROID_HOME
- 변수 값 : 안드로이드 sdk 설치 경로  

2\) 시스템 변수 → Path 선택 후 편집 → platform-tools 경로 추가
예시) C:\Users\Jinseok\AppData\Local\Android\Sdk\platform-tools

### 8. 프로젝트 생성하기
1\) VS Code 실행 → Terminal → New Terminal 실행  

2\) `npm i -g react-native-cli` 실행  

3\) 프로젝트 생성  
(기본) `npx react-native init 프로젝트명`  
(타입스크립트) `npx react-native init 프로젝트명 --template react-native-template-typescript`  
타입 스크립트를 사용하기 위해서는 최초 한번 설치를 진행해야 된다. (`npm install -g typescript`로 설치)  
프로젝트 생성 시 npm 오류가 발생한다면 C:\Users\사용자명\AppData\Local\npm-cache  파일을 삭제 후 다시 진행한다.

### 9. React native App 실행하기  
1\) 프로젝트 폴더로 이동(File → Open Folder → 생성한 프로젝트 폴더 선택)  

2\) `npx react-native start` 실행  
(만약에 에뮬이 실행되지 않는다면 Android Studio에서 프로젝트 실행 후 생성한 에뮬 실행)  

3\) 터미널 창을 하나 더 생성하여 `npx react-native run-android` 실행  
(이 명령어를 먼저 입력하면 자동으로 `npx react-native start` 구문이 처리되기에 이전단계를 생략하고 이 구문만 입력해도 됨)


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
