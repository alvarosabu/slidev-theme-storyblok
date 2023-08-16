<template>
<div class="flex gap-8 items-center py-8">
    <img class="w-30 rounded-full" :src="$slidev.themeConfigs.presenterAvatar"  alt="">
    <div>
        <div class="text-3xl font-bold">{{ $slidev.themeConfigs.presenter }}</div>
        <div class="text-gray-500 text-md">{{ $slidev.themeConfigs.presenterTitle }}</div>
        <a :href="`mailto:${$slidev.themeConfigs.presenterEmail}`">{{ $slidev.themeConfigs.presenterEmail }}</a>
    </div>
</div>
</template>