<template>
  <q-page class="q-pa-md text-center column-inline">
    <!-- content -->
    <div class="col">
      <div>
        <q-img
          src="statics/img/login-6.png"
          spinner-color="white"
          style="max-width: 150px"
      />
      </div>

      <div class="q-mt-lg q-px-lg text-h5">One step away to your account</div>

      <div class="q-mt-lg q-px-xl text-grey text-body">Now we need to verify your identity</div>
    </div>

    <div class="col q-mt-lg">
      <q-card flat class="my-card">
        <q-card-section class="text-left">
          <div class="text-weight-medium">Use identity card</div>
          <div class="text-grey text-body">Get the full feature of your App! You can store up to IDR 10 Million</div>
        </q-card-section>
      </q-card>
    </div>

    <div class="col q-mt-lg">
      <q-card flat class="my-card">
        <q-card-section class="text-left">
          <div class="text-weight-medium">Without identity card</div>
          <div class="text-grey text-body">You can only store IDR 1 Million to your e-wallet</div>
        </q-card-section>
      </q-card>
    </div>

    <q-dialog v-model="alert">
      <q-card class="q-pa-md text-center">
        <q-card-section>
          <q-img
              src="statics/img/login-7.png"
              spinner-color="white"
              style="max-width: 150px"
          />
        </q-card-section>

        <q-card-section class="text-primary text-body">
          Congratulation
        </q-card-section>

        <q-card-section class="text-h5">
          Now you are registered
        </q-card-section>

        <q-card-section class="text-grey text-body">
          Get ready for e-wallet
        </q-card-section>

        <q-card-actions align="right">
          <q-btn class="q-mt-md full-width" unelevated rounded no-caps label="Start Now" color="primary" v-close-popup @click="handleChangePage" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-btn class="q-mt-md full-width" unelevated rounded no-caps color="primary" label="Continue" @click="alert = true" />
  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'RegistrationStep4',
  components: {

  },

  data () {
    return {
      alert: false
    }
  },

  methods: {
    handleChangePage () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style>
</style>
