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
          key: 'deleted',
          value: 'inactive',
        },
        {
          name: 'Redacted',
          key: 'redacted_at',
          value: 'inactive',
        },
        // Commented out to demonstrate ease of adding another filter
        // {
        //   name: 'Has Folder',
        //   key: 'folder',
        //   value: 'inactive',
        // },
      ],
      keys: ['title', 'filename', 'redacted_at', 'deleted', 'folder', 'redaction_layer_count'],
    }
  },
  computed: {
    filteredDocuments() {
      // Filter out duplicates
      let documents = Array.from(new Set(this.documentList.map((doc) => doc.id)))
        .map((id) => this.documentList.find((doc) => doc.id === id))

      // Apply selected filters
      const truthyFilters = this.generateSelectedFilters(this.filters, true)
      const falsyFilters = this.generateSelectedFilters(this.filters, false)

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
      const index = this.filters.findIndex(filter => filter.key === key)
      this.clearFilters(index)
      if (this.filters[index].value === 'inactive') {
        this.filters[index].value = true
      } else if (this.filters[index].value) {
        this.filters[index].value = !this.filters[index].value
      } else {
        this.filters[index].value = 'inactive'
      }
    },
    clearFilters(exclude = null) {
      const cleared = this.filters.map((filter, i) => {
        exclude === null || exclude !== i ? filter.value = 'inactive' : ''
        return filter
      })
      this.filters = cleared
    },
    generateSelectedFilters(filters, type) {
      return filters.filter((filter) => filter.value === type).map((value) => value.key)
    }
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
