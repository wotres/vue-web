<template>
  <v-app>
    <div>
      <v-toolbar dark>
        <v-toolbar-title>
          <nuxt-link style="text-decoration: none" to="/"><span style="color:white; font-weight:bold">HOME</span></nuxt-link>
        </v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-text-field label='검색' hide-details prepend-icon="mdi-magnify" :style="{ display: 'flex', alignItems: 'center' }"/>
          <v-btn text nuxt to="/login" :style="{ display: 'flex', alignItems: 'center'}">
            <div>로그인</div>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
  </v-app>
</template>
<script>
export default {
  
}
</script>
<style>
</style>