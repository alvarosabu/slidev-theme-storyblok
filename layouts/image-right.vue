<template>
    <div class="grid grid-cols-2 w-full h-full auto-rows-fr">
      <div class="slidev-layout default">
        <SbLogo class="w-200px -ml-8 mb-16"/>
        
        <div class="prose">
            <slot />
        </div>
      </div>
      <div class="w-full h-full p-20" :style="style">
        <logos-storyblok-icon class="filter-grayscale opacity-05 absolute right-20% bottom-50% transform scale-3000 -rotate-20"/>
        <figure class="relative flex flex-col justify-center">
        
        <img
          :src="$attrs.image"
          class="rounded-lg shadow-lg object-cover z-10"
        >
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption }}
        </figcaption>
      </figure>
      </div>
    </div>
  </template>