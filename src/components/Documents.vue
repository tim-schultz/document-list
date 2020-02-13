<script>
export default {
  name: 'Documents',
  props: {
    documents: Array
  },
  data() {
    return {
      headings: ['Title', 'File', 'Radacted At', 'Folder', 'Redaction Layer']
    }
  },
}
</script>

<template>
  <div>
    <div
      v-for="(heading, i) in headings"
      :key="i"
    >
      {{ heading }}
    </div>
    <div
      v-for="document in documents"
      :key="document.id"
      class="flex flex-wrap justify-between"
    >
      <div>
        {{ document.title }}
      </div> 
      <div>
        {{ document.filename }}
      </div>
      <div>
        {{ document.redacted_at }}
      </div>
      <div>
        {{ document.deleted }}
      </div>
      <div>
        {{ document.folder }}
      </div>
      <div>
        {{ document.redaction_layer_count }}
      </div>
      <pre>{{document}}</pre>
    </div>
  </div>
</template>

<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
