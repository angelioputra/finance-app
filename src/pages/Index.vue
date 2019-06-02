<template>
  <q-page>
    <div class="circle-background"></div>
    <div class="row q-pa-md">
      <div class="">
        <q-img
          class="profile-picture"
          src="statics/img/profile.jpg"
          spinner-color="white"
          style="height: 75px; width: 75px"
      />
      </div>
      <div class="q-ml-md q-z-1">
        <div class="text-h6 text-white">Angelio Putra</div>
        <div><BalanceSmall /></div>
      </div>
    </div>
    <div class="row q-pa-md q-mt-sm q-gutter-sm">
      <div class="col q-z-1 ">
        <Card label="Send" image="statics/img/icons8-send-email-64.png" />
      </div>
      <div class="col q-z-1 ">
        <Card label="Pay" image="statics/img/icons8-paycheque-64.png" />
      </div>
      <div class="col q-z-1 ">
        <Card label="Top Up" image="statics/img/icons8-upload-64.png" />
      </div>
      <div class="col q-z-1 ">
        <Card label="Request" image="statics/img/icons8-request-money-64.png" />
      </div>
    </div>
    <div class="row q-pa-md q-mt-sm q-pl-lg q-gutter-sm">
      <div class="col">
        <ButtonCategory label="E-Shopping" image="statics/img/icons8-shopping-bag-64.png" />
        <ButtonCategory label="Charity" image="statics/img/icons8-two-hearts-64.png" />
        <ButtonCategory label="Split Bills" image="statics/img/icons8-open-archive-64.png" />
      </div>
      <div class="col">
        <ButtonCategory label="Bill Payment" image="statics/img/icons8-purchase-order-64.png" />
        <ButtonCategory label="Send Gift" image="statics/img/icons8-gift-64.png" />
        <ButtonCategory label="Cash Back" image="statics/img/icons8-exchange-64.png" />
      </div>
    </div>
    <div class="q-pa-md">
      <div class="text-h6">Promo</div>
    </div>
  </q-page>
</template>

<style>
.profile-picture{
  border-radius: 50%;
}
.circle-background{
  background-color: #7056E3;
  background: linear-gradient(45deg, rgb(176, 126, 233) 0%, rgba(121,99,247,1) 70%);
  height: 250vw;
  border-radius: 100%;
  position: fixed;
  top: -180vw;
  left: -75vw;
  width: 250vw;
}
</style>

<script>
import { BalanceSmall, Card, ButtonCategory } from '../components'

export default {
  name: 'PageIndex',
  components: {
    BalanceSmall,
    Card,
    ButtonCategory
  }
}
</script>
