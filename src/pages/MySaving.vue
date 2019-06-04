<template>
  <q-page>
    <!-- content -->
    <div class="background-purple q-pa-md">
      <BalanceLarge />
      <div class="text-center text-white text-weight-light q-ma-md">Account details <span class="text-weight-medium">2167-890-123</span></div>
      <div class="row text-white text-weight-light q-mt-lg q-mb-lg">
        <div class="col text-center">
          <div>Interest Rate</div>
          <div><span class="text-weight-medium text-size-large">6.5%</span> / year</div>
        </div>
        <div class="col text-center">
          <div>Your Interest</div>
          <div><span class="text-weight-medium text-size-large">Rp. 150.000</span></div>
        </div>
      </div>
    </div>

    <div class="row q-pa-md q-gutter-sm">
      <div class="col">
        <Card label="Add Fund" image="statics/img/icons8-cash-in-hand-64.png" />
      </div>
      <div class="col">
        <Card label="Withdraw" image="statics/img/icons8-withdrawal-64.png" />
      </div>
      <div class="col">
        <Card label="Top Up" image="statics/img/icons8-upload-64.png" />
      </div>
    </div>

    <div class="q-px-md q-mt-md row">
      <div class="text-subtitle2">My Goals</div>
    </div>
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        infinite
        autoplay
        navigation
        swipeable
      >
        <q-carousel-slide name="1" class="">
          <q-img
              class="rounded-borders"
              src="statics/img/japan.jpg"
              spinner-color="white"
          />
        </q-carousel-slide>
        <q-carousel-slide name="2" class="">
          <q-img
              class="rounded-borders"
              src="statics/img/japan.jpg"
              spinner-color="white"
          />
        </q-carousel-slide>
        <q-carousel-slide name="3" class="">
          <q-img
              class="rounded-borders"
              src="statics/img/japan.jpg"
              spinner-color="white"
          />
        </q-carousel-slide>
      </q-carousel>

      <div class="q-px-md">
        <div class="row">
          <div class="col text-subtitle2" style="line-height: 2.5">Japan Trip</div>
          <div class="col text-right">
            <q-chip color="blue" text-color="white">Ongoing</q-chip>
          </div>
        </div>
        <div class="text-grey">Lorem ipsum dolor sit amet</div>
        <div class="q-mb-md q-mt-sm">
          <q-linear-progress rounded style="height: 30px" color="warning" :value="progress1" />
          <div class="row text-weight-medium">
            <div class="col">Rp. 91.000.000</div>
            <div class="col text-right">Rp. 180.000.000</div>
          </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import { BalanceLarge, Card } from '../components'

export default {
  name: 'MySaving',
  components: {
    BalanceLarge,
    Card
  },

  data () {
    return {
      slide: '1',
      progress1: 0.51
    }
  }
}
</script>

<style>
</style>
