<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("fallen-" + route.path, () => {
  return queryCollection("fallen").path(route.path).first();
});

const { data: memorial } = await useAsyncData(
  "memorial-" + route.params.memorialSlug,
  () => {
    return queryCollection("memorials")
      .select("title", "path")
      .path(`/memorials/${route.params.memorialSlug}`)
      .first();
  },
);

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

useHead({
  title: page.value!.name,
});

useBreadcrumbs([
  {
    label: "Memorials",
    to: "/memorials",
  },
  {
    label: memorial.value?.title,
    to: memorial.value?.path,
  },
  {
    label: page.value.name,
    to: page.value.path,
    active: true,
  },
]);
</script>

<template>
  <article class="prose mx-auto fallen">
    <h1>{{ page?.name }}</h1>

    <ProseImg v-if="page?.image" :src="page.image" :alt="page.name" />

    <p class="text-center">
      <PersonDates v-if="page" :person="page" />
    </p>

    <ContentRenderer v-if="page" :value="page" :prose="false" />
  </article>
</template>

<style>
.fallen img {
  max-width: 50%;
  margin: 32px auto;
}
</style>
