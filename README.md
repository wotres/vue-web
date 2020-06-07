# 중요 개발 기록 일지

## GitHub 와 연동
<pre>
<code>
# README.md 파일 추가
$ echo "# vue-web" >> README.md
$ git init

# warning: LF will be replaced by CRLF in README.md. 경고 방지
$ git config core.autocrlf true
$ git add .
$ git commit -m 'first commit'

# remote 저장소를 origin이란 이름으로 아래 주소에 연결
$ git remote add origin https://github.com/wotres/vue-web.git

# remote 확인 
$ git remote -v

$ git push -u origin master

$ git 
</code>
</pre>

## npm 설정
<pre>
<code>
# node package module 환경 구성
$ npm init

# vue / nuxt 설치
$ vue install vue nuxt

</code>
</pre>

### Nuxt
공식 Vue 가이드라인에 따라 강력한 아키텍처를 제공하도록 설계된 프레임워크
서버사이드 렌더링가능
Vue / Router / vuex 총집합

## vuex
Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리  
애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경

pages/index.vue 메인 시작점 파일 추가
nuxt는 code splitting으로 각각 별개의 페이지들이라 생각

## package.json
<pre>
<code>
# 개발모드로 수행
script {
  "dev": "nuxt"
}

# 서버 실행
$ npm run dev
</code>
</pre>

layouts 폴더 생성
=> 중복된 내용 이 폴더 내부에서 사용
layouts/default.vue 생성

디자인을 위해 vuetify 설치
ajax 통신을 위해 axios 설치
<pre>
<code>
$ npm install vuetify @nuxtjs/vuetify
$ npm install axios @nuxtjs/axios
</code>
</pre>

nuxt.config.js
header 관련 기본 정보 입력
vuetify/axios 모듈 연결

vuetify 를 이용하여 layouts/default.vue 에 툴바 설정
vuetify 는 material design icons 가져다 쓸수 있음
앞에 mdi- 붙여서 원하는 아이콘 호출가능




