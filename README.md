중요 개발 기록 일지
=============

# GitHub 와 연동
<pre>
<code>
# README.md 파일 추가
$ echo "# vue-web" >> README.md
$ git init
# warning: LF will be replaced by CRLF in README.md. 경고 방지
$ git config core.autocrlf true
$ git add .
$ git commit -m 'first commit'
$ git remote add origin https://github.com/wotres/vue-web.git
$ git push -u origin master
</code>
</pre>


# vuex
Vue.js 애플리케이션에 대한 상태 관리 패턴 + 라이브러리  
애플리케이션의 모든 컴포넌트에 대한 중앙 집중식 저장소 역할을 하며 예측 가능한 방식으로 상태를 변경

