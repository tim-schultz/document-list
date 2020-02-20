<script>
export default {
  name: 'Documents',
  props: {
    documents: Array,
  },
  data() {
    return {
      headings: ['Title', 'File', 'Radacted At', 'Deleted', 'Folder', 'Redaction Layer'],
      documentKeys: ['title', 'filename', 'redacted_at', 'deleted', 'folder', 'redaction_layer_count']
    }
  },
}
</script>

<template>
  <div class="m-4">
    <table class="table-auto">
      <thead>
        <tr>
          <th
            class="px-4 py-2 text-left"
            v-for="(heading, i) in headings"
            :key="i"
          >
            {{ heading }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="document in documents"
          :key="document.id"
        >
          <td 
            v-for="key in documentKeys"
            :key="key"
            class="border px-4 py-2"
          >
            <span v-if="key === 'redacted_at' && document[key]">
              {{ document[key] | moment("dddd, MMMM Do YYYY") }}
            </span>
            <span v-else>
              {{ document[key] }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.data > div {
  width: auto;
  display: inline-block;
  text-align: left;
}
</style>
