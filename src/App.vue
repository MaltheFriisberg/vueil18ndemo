<template>
  <div id="app">
    <button @click="switchLanguage">switch language</button>
    <p>{{ $t('hello') }}</p>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    switchLanguage : function() {
      let locale = this.$i18n.locale;
      if(locale==="en") {
        this.$i18n.locale = "da";
        return;
      }
      this.$i18n.locale = "en";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
