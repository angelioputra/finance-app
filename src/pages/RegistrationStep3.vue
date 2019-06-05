<template>
  <q-page class="q-pa-md text-center column-inline">
    <!-- content -->
    <div class="col">
      <div>
        <q-img
          src="statics/img/login-4.png"
          spinner-color="white"
          style="max-width: 150px"
      />
      </div>

      <div class="q-mt-lg text-h5">Fingerprint</div>

      <div class="q-mt-lg q-px-md text-grey text-body">To add your fingerprint, lift and rest your finger at the home button repeatly (optional).</div>
    </div>

    <div class="col q-mt-md">
      <q-img
          src="statics/img/login-5.png"
          spinner-color="white"
          style="max-width: 150px"
      />
    </div>

    <div class="col q-mt-lg">
      <div class="q-mt-lg text-primary text-weight-medium" @click="handleChangePage">
        Skip this step
      </div>
      <q-btn class="q-mt-lg full-width" unelevated rounded no-caps color="primary" label="Continue" @click="handleChangePage" />
    </div>

  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'RegistrationStep3',
  components: {

  },

  data () {
    return {

    }
  },

  methods: {
    handleChangePage () {
      this.$router.push({ name: 'registration.step-4' })
    }
  }
}
</script>

<style>
</style>
