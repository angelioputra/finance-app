<template>
  <div class="promo-card q-pa-md row no-wrap text-white">
    <div>
      <q-img
          src="statics/img/icons8-wallet-64.png"
          spinner-color="white"
          style="height: 75px; width: 75px"
      />
    </div>
    <div class="q-ml-md">
      <div class="text-h6">Saving Account</div>
      <div class="text-body2">Get up to 10% monthly interest!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardPromo',
  props: {
    label: {},
    image: {}
  }
}
</script>

<style>
.promo-card {
  border-radius: 16px;
  background-color: rgb(93, 150, 247);
  background: linear-gradient(45deg, rgb(93, 150, 247) 0%, rgba(121,99,247,1) 90%);
}
</style>
