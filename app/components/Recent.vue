<script setup lang="ts">
const { data: fallen } = await useAsyncData("recent-fallen", () => {
  return (
    queryCollection("fallen")
      // .where("circa", "=", true)
      .order("date", "DESC")
      .select("id", "name", "path", "image", "dob", "date", "circa")
      .limit(5)
      .all()
  );
});
</script>

<template>
  <UCard class="not-prose">
    <template #header>
      <h2 class="text-center text-xl font-bold">Those Most Recently Lost</h2>
    </template>

    <UPageList :role="undefined">
      <Person :person="person" v-for="person in fallen" :key="person.id" />
    </UPageList>

    <template #footer>
      <UButton to="/memorials" block variant="ghost"> View All </UButton>
    </template>
  </UCard>
</template>
