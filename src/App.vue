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
          key: 'deleted',
          value: 'inactive',
        },
        {
          name: 'Redacted',
          type: Boolean,
          key: 'redacted_at',
          value: 'inactive',
        },
      ],
      keys: ['title', 'filename', 'redacted_at', 'deleted', 'folder', 'redaction_layer_count'],
    }
  },
  mounted() {
    console.log(this.documentList, 'documents')
  },
  computed: {
    filteredDocuments() {
      // Filter out duplicates
      let documents = Array.from(new Set(this.documentList.map((doc) => doc.id)))
        .map((id) => this.documentList.find((doc) => doc.id === id))

      // Apply selected filters
      const truthyFilters = this.filters.filter((filter) => filter.value === true).map((value) => value.key)
      const falsyFilters = this.filters.filter((filter) => filter.value === false).map((value) => value.key)

      if (truthyFilters.length > 0) {
        documents = documents.filter((document) => {
          return Object.keys(document).filter((key) => {
            return truthyFilters.includes(key) && document[key]
          }).length > 0
        })
      }

      if (falsyFilters.length > 0) {
        documents = documents.filter((document) => {
          return Object.keys(document).filter((key) => {
            return falsyFilters.includes(key) && (document[key] === false || document[key] === null)
          }).length > 0
        })
      }

      return documents
    },
  },
  methods: {
    updatedFilter(key) {
      // this.clearFilters()
      const index = this.filters.findIndex(filter => filter.key === key)
      if (this.filters[index].value === 'inactive') {
        this.filters[index].value = true
      } else if (this.filters[index].value) {
        this.filters[index].value = !this.filters[index].value
      } else {
        this.filters[index].value = 'inactive'
      }
    },
    clearFilters() {
      const cleared = this.filters.map((filter) => {
        filter.value = 'inactive'
        return filter
      })
      console.log(cleared, 'cleared')
      this.filters = cleared
    },
  },
}
</script>

<template>
  <div id="app">
    <Filters
      @filterUpdated="updatedFilter"
      @clearAll="clearFilters"
      :filters="filters"
    />
    <Documents :documents="filteredDocuments" />
  </div>
</template>

<style src="./main.css">
