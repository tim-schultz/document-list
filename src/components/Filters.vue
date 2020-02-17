<script>
import Button from './Button'

export default {
  name: 'Filters',
  components: {
    Button,
  },
  props: {
    filters: Array,
    sort: String,
  },
//   data() {
//     return {
//       filters: ['Title', 'File', 'Radacted At', 'Deleted', 'Folder', 'Redaction Layer']
//     }
//   },
    mounted() {
        console.log(this.filters, 'filters')
    },
}
</script>

<template>
  <div class="m-4 flex flex-wrap">
    <div
      v-for="(filter, i) in filters"
      :key="i"
      class="m-2"
      @click.prevent="$emit('filterUpdated', filter.key)"
    >
      <Button
        :text="filter.name"
      />
    </div>
  </div>
</template>

<style scoped>
.data > div {
  width: auto;
  display: inline-block;
  text-align: left;
}
</style>
