<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <div class="col-1">
          <q-btn
            v-if="$route.meta.showBurgerMenu"
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            aria-label="Menu"
          >
            <q-icon name="menu" />
          </q-btn>

          <q-btn
            v-if="$route.meta.showButtonBack"
            @click="handleChangePage($route.meta.backTo)"
            aria-label="Back"
            flat
            dense
            icon="fas fa-angle-left"
          />
        </div>

        <q-toolbar-title class="text-center text-size-medium text-weight-medium">
          <!-- Quasar App -->
          {{$route.meta.title}}
        </q-toolbar-title>

        <div class="col-1">
          <q-btn flat round icon="far fa-bell" size="sm" v-if="$route.meta.showNotification">
            <q-badge color="red" floating>4</q-badge>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-footer class="bg-white">
      <q-toolbar class="text-center">
          <div class="col">
            <q-btn flat round color="primary" icon="fas fa-wallet" size="sm" />
            <div class="text-primary text-caption">My Wallet</div>
          </div>
          <div class="col">
            <q-btn flat round color="primary" icon="fas fa-heartbeat" size="sm" />
            <div class="text-primary text-caption">Insight</div>
          </div>
          <div class="col">
            <q-btn flat round color="primary" icon="fas fa-calculator" size="sm" />
            <div class="text-primary text-caption">Tool</div>
          </div>
      </q-toolbar>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    handleChangePage (routeName) {
      this.$router.push({ name: routeName })
    }
  }
}
</script>

<style>
.page-container {
  background-color: #F2F3F8;
}
</style>
