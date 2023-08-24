<template>
    <div class="slidev-layout">
      <SbLogo class="w-200px -ml-8 mb-16"/>
      <div class="grid grid-cols-2 gap-16">
      
        <div class="prose">
          <slot name="default" />
        </div>
        <div class="prose">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </template>
  