<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutBlank',
  data () {
    return {
    }
  },
  methods: {
    handleChangePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
.page-container {
  background-color: #F8F8FB;
}
</style>
