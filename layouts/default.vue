<template>
  <div class="slidev-layout default" :class="$attrs.class">
    <SbLogo class="w-200px -ml-8 mb-16"/>
    <div class="w-full prose">
        <slot />
    </div>
  </div>
</template>