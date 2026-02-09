<script setup lang="ts">
// const props = withDefaults(defineProps<{ src?: string; type?: string }>(), {
//   type: "video/mp4",
// });
</script>

<template>
  <video controls width="100%">
    <slot></slot>
    Your browser does not support the video tag.
  </video>
</template>
