module.exports = {
  // 서버 사이드 렌더링으로 사용
  mode: 'universal',
  // 모든 페이지의 head 관련 정보
  head: {
    title: 'VUE-Web',
    // 메타데이터 설정
    meta: [
      // 언어 인코딩 설정
      { charset: 'utf-8' }
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],
  devModules: [
    '@nuxtjs/vuetify'
  ]
  
}