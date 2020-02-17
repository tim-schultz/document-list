<script>
import Documents from './components/Documents.vue'
import Filters from './components/Filters'
import { default as documentList } from './assets/data/documents.json'

export default {
  name: 'app',
  components: {
    Documents,
    Filters,
  },
  data() {
    return {
      documentList,
      filters: [
        {
          name: 'Deleted',
          type: Boolean,
          value: null,
          key: 'deleted',
        },
        {
          name: 'Redacted',
          type: Date,
          value: null,
          key: 'redacted_at',
        },
        {
          name: 'Redaction Layer',
          type: Number,
          value: null,
          key: 'redaction_layer_count',
        },
      ],
      keys: ['title', 'filename', 'redacted_at', 'deleted', 'folder', 'redaction_layer_count'],
      activeFilter: null,
    }
  },
  mounted() {
    console.log(this.documentList, 'documents')
  },
  computed: {
    filteredDocuments() {
      return this.documentList.filter((document) => document[this.activeFilter])
    },
  },
  methods: {
    updatedFilter(key) {
      this.activeFilter = key
    },
  },
}
</script>

<template>
  <div id="app">
    <Filters
      @filterUpdated="updatedFilter"
      :filters="filters"
    />
    <Documents :documents="filteredDocuments" />
  </div>
</template>

<style src="./main.css">
