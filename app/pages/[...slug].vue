<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useHead({
  title: page.value!.title,
});

useBreadcrumbs([
  {
    label: page.value.title,
    to: page.value.path,
    active: true,
  },
]);
</script>

<template>
  <article class="prose mx-auto">
    <ContentRenderer v-if="page" :value="page" :prose="false" />
  </article>
</template>
