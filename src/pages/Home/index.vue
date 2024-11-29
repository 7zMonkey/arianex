<template>
  <div class="home">
    <h1>Hello AriaNex</h1>
    <div>{{ settings.getSettings }}</div>
    <v-btn @click="toggleShowGithubIcon">
      <v-icon icon="$vuetify" />
    </v-btn>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '@/stores/settings'

const settings = useSettingsStore()
const toggleShowGithubIcon = () => {
  settings.setSetting('showGithubIcon', !settings.getSetting('showGithubIcon'));
}
//
</script>
