<script lang="ts" setup>
const props = defineProps<{
  src: string
  shape?: 'rounded'
}>()
</script>

<template>
  <NuxtImg
    :src="props.src || '/imgs/default-avatar.png'"
    w-10
    h-10
    :rounded="shape === 'rounded'"
  />
</template>
