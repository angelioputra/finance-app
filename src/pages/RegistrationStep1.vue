<template>
  <q-page class="q-pa-md text-center column-inline">
    <!-- content -->
    <div class="col">
      <div>
        <q-img
          class="profile-picture"
          src="statics/img/login-2.png"
          spinner-color="white"
          style="max-width: 150px; margin-top: 5vh"
      />
      </div>

      <div class="q-mt-lg text-h5">Registration</div>

      <div class="q-mt-lg q-px-xl text-grey text-body">Enter your mobile number, we will send you OTP to verify later</div>
    </div>

    <div class="col q-mt-lg">
      <q-card flat bordered class="my-card">
        <q-card-section>
          <q-input outlined type="tel" prefix="(+62)" />
          <q-btn class="q-mt-md full-width" unelevated rounded no-caps color="primary" label="Continue" @click="handleChangePage" />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'RegistrationStep1',
  components: {

  },

  data () {
    return {

    }
  },

  methods: {
    handleChangePage () {
      this.$router.push({ name: 'registration.step-2' })
    }
  }
}
</script>

<style>
</style>
