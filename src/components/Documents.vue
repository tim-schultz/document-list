<script>
export default {
  name: 'Documents',
  props: {
    documents: Array,
    sort: String,
  },
  data() {
    return {
      headings: ['Title', 'File', 'Radacted At', 'Deleted', 'Folder', 'Redaction Layer']
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
          <td class="border px-4 py-2">
            {{ document.title }}
          </td>
          <td class="border px-4 py-2">
            {{ document.filename }}
          </td>
          <td class="border px-4 py-2">
            {{ document.redacted_at | moment("dddd, MMMM Do YYYY") }}
          </td>
          <td class="border px-4 py-2">
            {{ document.deleted }}
          </td>
          <td class="border px-4 py-2">
            {{ document.folder }}
          </td>
          <td class="border px-4 py-2">
            {{ document.redaction_layer_count }}
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
