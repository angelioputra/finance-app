<template>
  <q-page class="q-pa-md">
    <!-- content -->
    <q-card flat bordered class="my-card">
      <q-card-section class="text-center">
        <div>
          <q-circular-progress
            show-value
            font-size="28px"
            :value="80"
            size="100px"
            :thickness="0.1"
            color="positive"
            track-color="grey-3"
            class="q-ma-md"
          >
            80
          </q-circular-progress>
        </div>
        <div class="text-h6">Good Health</div>
        <div class="text-grey">Your financial condition is in good health</div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="row">
          <div class="col text-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="60"
              size="50px"
              :thickness="0.1"
              color="primary"
              track-color="grey-3"
            >
              <q-avatar size="30px">
                <img src="statics/img/icons8-paper-money-64.png">
              </q-avatar>
            </q-circular-progress>
            <div>Cash Flow</div>
          </div>
          <div class="col text-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="40"
              size="50px"
              :thickness="0.1"
              color="warning"
              track-color="grey-3"
            >
              <q-avatar size="30px">
                <img src="statics/img/icons8-bank-building-64.png">
              </q-avatar>
            </q-circular-progress>
            <div>Loan</div>
          </div>
          <div class="col text-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="70"
              size="50px"
              :thickness="0.1"
              color="primary"
              track-color="grey-3"
            >
              <q-avatar size="30px">
                <img src="statics/img/icons8-shield-64.png">
              </q-avatar>
            </q-circular-progress>
            <div>Insurance</div>
          </div>
          <div class="col text-center">
            <q-circular-progress
              show-value
              font-size="10px"
              class="q-ma-md"
              :value="30"
              size="50px"
              :thickness="0.1"
              color="warning"
              track-color="grey-3"
            >
              <q-avatar size="30px">
                <img src="statics/img/icons8-money-bag-64.png">
              </q-avatar>
            </q-circular-progress>
            <div>Investment</div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="q-mt-lg">
      <div class="text-subtitle2">Meet Mr. Bagus</div>
      <div class="q-my-md">
        <q-card flat bordered class="my-card">
          <q-card-section>
            <div class="row no-warp">
              <div class="col-2">
                <q-avatar size="50px">
                  <img src="statics/img/profile.jpg">
                </q-avatar>
              </div>
              <div class="col q-ml-lg">
                <div class="text-grey text-body2">"Your score is better than other 40% users out there. Keep improving!"</div>
                <div class="text-primary text-subtitle2 q-mt-md">Ask More</div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
// import {  } from '../components'

export default {
  name: 'SavingAccount',
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
