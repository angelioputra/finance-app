<template>
  <q-page class="q-pa-md text-center column-inline">
    <!-- content -->
    <div class="col">
      <div>
        <q-img
          class="profile-picture"
          src="statics/img/login-3.png"
          spinner-color="white"
          style="max-width: 150px; margin-top: 5vh"
      />
      </div>

      <div class="q-mt-lg text-h5">Verification</div>

      <div class="q-mt-lg q-px-xl text-grey text-body">Enter 4 digit number that sent to +6208000123</div>
    </div>

    <div class="col q-mt-lg">
      <q-card flat class="my-card">
        <q-card-section>
          <q-input outlined type="tel" />
          <q-btn class="q-mt-md full-width" unelevated rounded no-caps color="primary" label="Continue" @click="handleChangePage" />
        </q-card-section>
      </q-card>
    </div>

    <div class="q-mt-lg text-primary">
      Re-send code in <span class="text-weight-medium">0:30</span>
    </div>
  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'RegistrationStep2',
  components: {

  },

  data () {
    return {

    }
  },

  methods: {
    handleChangePage () {
      this.$router.push({ name: 'registration.step-3' })
    }
  }
}
</script>

<style>
</style>
