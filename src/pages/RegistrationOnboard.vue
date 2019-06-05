<template>
  <q-page class="q-pa-md text-center column">
    <!-- content -->
    <div class="col">
      <div>
        <q-img
          class="profile-picture"
          src="statics/img/login-1.webp"
          spinner-color="white"
          style="max-width: 200px; margin-top: 10vh"
      />
      </div>

      <div class="q-mt-lg text-h5">Let's get started</div>

      <div class="q-mt-lg q-px-xl text-grey text-body">Never a better time than now to start thinking about how you manage all your finances with ease</div>
    </div>
    <div class="">
      <q-btn class="q-my-md full-width" unelevated rounded no-caps color="primary" label="Create Account" />
      <q-btn class="q-mb-md full-width" unelevated rounded no-caps outline label="Login" />
    </div>
  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'RegistrationOnboard',
  components: {

  },

  data () {
    return {

    }
  }
}
</script>

<style>
</style>
