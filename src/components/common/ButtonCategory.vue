<template>
  <div class="row q-py-md">
    <div class="button-category__image">
      <q-img
          :src="image"
          spinner-color="white"
          style="height: 24px; width: 24px"
      />
    </div>
    <div class="q-ml-md" style="line-height: 2">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonCategory',
  props: {
    label: {},
    image: {}
  }
}
</script>

<style>
.button-category__image {
  background-color: rgb(112, 86, 227, 0.2);
  border-radius: 16px;
  padding: 4px;
}
</style>
