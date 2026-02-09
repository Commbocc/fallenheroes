<script setup lang="ts">
const route = useRoute();
const items = useBreadcrumbs();
</script>

<template>
  <UBreadcrumb
    v-show="route.path !== '/'"
    :items="items"
    class="my-4"
    :ui="{ list: 'flex-wrap' }"
  />
</template>
