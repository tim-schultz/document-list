<script>
import Button from './Button'

export default {
  name: 'Filters',
  components: {
    Button,
  },
  props: {
    filters: Array,
  },
  methods: {
    generateFitler(filter) {
      if (filter.value !== undefined) {
        return {
          'bg-white-500': filter.value === 'inactive',
          'bg-red-500': filter.value === false,
          'bg-green-500': filter.value === true,
        }
      }
      return {}   
    }
  }
}
</script>

<template>
  <div class="m-4 flex flex-wrap">
    <div
      v-for="filter in filters"
      :key="filter.key"
      class="m-2"
      @click.prevent="$emit('filterUpdated', filter.key)"
    >
      <Button
        :filter="filter"
        :classObject="generateFitler(filter)"
      />
    </div>
    <div
      @click.prevent="$emit('clearAll')"
      class="m-2"
    >
      <Button
        :filter="{ name: 'Clear All' }"
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
