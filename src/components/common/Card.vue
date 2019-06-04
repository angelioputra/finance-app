<template>
  <div class="bg-white rounded-borders q-py-md q-px-sm text-center shadow-24 card">
    <div>
      <q-img
          :src="image"
          spinner-color="white"
          style="height: 40px; width: 40px"
      />
      </div>
    <div class="q-mt-sm">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    label: {},
    image: {}
  }
}
</script>

<style>
.card {
  border-radius: 16px;
}
</style>
