// Utilities
import { defineStore } from 'pinia'

type SettingsValueType = string | boolean | number;
type SettingsMap = {
  theme: 'light' | 'dark' | 'auto';
  showGithubStars: boolean;
  showGithubIcon: boolean;
  [key: string]: SettingsValueType;
}

const defaultSettings: SettingsMap = {
  theme: 'auto',
  showGithubStars: true,
  showGithubIcon: true,
}

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      ...defaultSettings,
    } as SettingsMap
  }),
  getters: {
    getSettings: (state) => state.settings,
    getSetting: (state) => (key: string) => {
      return state.settings[key];
    },
    hasSetting: (state) => (key: string) => {
      return key in state.settings;
    }
  },
  actions: {
    setSettings(settings: SettingsMap) {
      this.settings = settings;
    },
    setSetting(key: string, value: SettingsValueType) {
      this.settings[key] = value;
    },
    resetSettings() {
      this.settings = { ...defaultSettings };
    },
    resetSetting(key: string) {
      this.settings[key] = defaultSettings[key];
    },
  },
  persist: true
})
