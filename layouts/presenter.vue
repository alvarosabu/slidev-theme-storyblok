<script setup lang="ts">
import { computed } from 'vue'

console.log('presenter.vue', $slidev.configs.themeConfig.presenter)

const style = computed(() => {
  return {
    backgroundImage: `url(${$slidev.configs.themeConfig.presenterAvatar || 'https://a.storyblok.com/f/172000/1000x1170/f92915eac0/astronaut.jpg/m/1000x1250'})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }
})
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
    <div class="slidev-layout default">
      <SbLogo class="w-200px -ml-8 mb-48"/>

      <h1>Hi 👋 I'm {{ $slidev.configs.themeConfig.presenter }}</h1>
      <slot />
    </div>
    <div class="w-full w-full" :style="style">
      <logos-storyblok-icon class="filter-grayscale opacity-05 absolute right-20% bottom-50% transform scale-3000 -rotate-20"/>
    </div>
  </div>
</template>