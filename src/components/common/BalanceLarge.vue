<template>
  <div class="row balance--large q-py-xs q-px-md q-mt-sm text-white text-weight-light">
    <div class="col">Balance</div>
    <div class="col-auto"><span class="text-weight-medium q-ml-md">Rp. 1.000.000</span></div>
    <div class="col text-right">
      <q-btn flat round icon="fas fa-arrow-right" size="xs"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BalanceLarge',
  props: {
  }
}
</script>

<style>
.balance--large {
  background-color: #907AE9;
  border-radius: 50px;
  font-size: medium;
}
</style>
