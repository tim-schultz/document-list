<script>
export default {
  name: 'Documents',
  props: {
    text: String,
    active: Boolean,
  },
}
</script>

<template>
  <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
    {{ text }}
  </button>
</template>