<script setup lang="ts">
const props = withDefaults(defineProps<{ heading?: string }>(), {
  heading: "Memorial Pages",
});

const { data: memorials } = await useAsyncData("memorials", () => {
  return queryCollection("memorials")
    .order("title", "ASC")
    .select("id", "title", "path")
    .all();
});
</script>

<template>
  <section>
    <h2>{{ heading }}</h2>

    <ul>
      <li v-for="memorial in memorials" :key="memorial.id">
        <NuxtLink :to="memorial.path">
          {{ memorial.title }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
