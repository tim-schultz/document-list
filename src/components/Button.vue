<script>
export default {
  name: 'Documents',
  props: {
    filter: Object,
    classObject: Object,
  },
}
</script>

<template>
  <button
    class="hover:border-gray-800 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
    :class="classObject"
  >
    {{ filter.name }}
  </button>
</template>