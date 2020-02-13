<script>
import Documents from './components/Documents.vue'
import { default as documentList } from './assets/data/documents.json'

export default {
  name: 'app',
  components: {
    Documents
  },
  data() {
    return {
      documentList
    }
  },
  mounted() {
    console.log(this.documentList, 'documents')
  },
}
</script>

<template>
  <div id="app">
    <Documents :documents="documentList"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
