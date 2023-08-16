<template>
    <div class="slidev-layout">
      <div class="grid grid-cols-2" :class="$attrs.reverse ? 'gap-16' : 'gap-8'">
        <div class="pr-16" :class="{ 'order-1': $attrs.reverse }">
          <slot name="default" />
        </div>
        <div class="relative">
          <TheConsole class="rounded-lg shadow-lg object-cover z-10">
            <slot name="window"></slot>
          </TheConsole>
          <logos-storyblok-icon class="filter-grayscale opacity-05 absolute right-20% bottom-50% transform scale-3000 -rotate-20"/>
        </div>
      </div>
    </div>
  </template>