<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("memorial-" + route.path, () => {
  return queryCollection("memorials").path(route.path).first();
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
    label: "Memorials",
    to: "/memorials",
  },
  {
    label: page.value.title,
    to: page.value.path,
    active: true,
  },
]);

const { data: fallen } = await useAsyncData(
  "fallen" + route.params.memorialSlug,
  () => {
    return queryCollection("fallen")
      .where("category", "=", route.params.memorialSlug)
      .order("date", "DESC")
      .select("id", "name", "path", "image", "dob", "date", "circa")
      .limit(-1)
      .all();
  }
);
</script>

<template>
  <article class="prose mx-auto">
    <h1>
      <a :href="page?.ext_link" target="_blank">
        {{ page?.title }}
        <UIcon
          v-if="page?.ext_link"
          name="i-heroicons-arrow-top-right-on-square"
          class="size-5"
        />
      </a>
    </h1>

    <ContentRenderer v-if="page" :value="page" />

    <hr />

    <UPageList
      v-if="fallen?.length"
      :role="undefined"
      class="not-prose grid sm:grid-cols-2"
    >
      <Person :person="person" v-for="person in fallen" :key="person.id" />
    </UPageList>

    <UEmpty
      v-else
      :title="`${page?.title} has not lost officers in the line of duty.`"
    />
  </article>
</template>
