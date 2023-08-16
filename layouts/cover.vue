<template>
  <div class="slidev-layout cover">
    <SbLogo />
    <div class="my-auto w-full">
    
      <slot />

     <logos-storyblok-icon class="filter-grayscale opacity-05 absolute right-20% bottom-50% transform scale-3000 -rotate-20"/>
    </div>
    <Presenter />
  </div>
</template>