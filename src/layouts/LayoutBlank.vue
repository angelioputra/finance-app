<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="transparent">
      <q-toolbar v-if="$route.meta.showToolbar">
        <div class="col-1">
          <q-btn
            @click="handleChangePage($route.meta.backTo)"
            aria-label="Back"
            color="grey"
            flat
            dense
            icon="fas fa-angle-left"
          />
        </div>

        <q-toolbar-title class="text-center text-primary text-size-medium text-weight-medium">
          {{$route.meta.title}}
        </q-toolbar-title>

        <div class="col-1">
        </div>
      </q-toolbar>
    </q-header>

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
