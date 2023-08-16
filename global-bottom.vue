<!-- global-bottom.vue -->

<template>
<footer class="w-1/2 absolute bottom-0 p-4 pl-14  z-1" v-if="$slidev.nav.currentLayout !== 'cover'">
  <div class="mx-auto container b-t b-solid py-2 b-gray-100">
    <SbLogo class="w-90px" :text-variant="$slidev.nav.currentLayout !== 'section' ? 'dark' : 'white'"/>
  </div>
</footer>
</template>