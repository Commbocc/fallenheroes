<script setup lang="ts">
import type { FallenCollectionItem } from "@nuxt/content";

const props = defineProps<{ person: Partial<FallenCollectionItem> }>();

const img = useImage();

const imageSrc = computed(() => {
  if (!props.person.image) return;
  return img(props.person.image, {
    width: 48,
    height: 48,
    fit: "cover",
    format: "webp",
  });
});
</script>

<template>
  <UPageCard variant="ghost" :to="person.path" :aria-label="person.name">
    <template #body>
      <UUser
        :name="person.name"
        class="relative"
        :avatar="{
          // src: imageSrc,
          icon: 'i-heroicons-user',
          alt: person.name,
        }"
      >
        <template #avatar>
          <img
            v-if="imageSrc"
            :src="imageSrc"
            :alt="person.name"
            class="rounded-full"
          />
          <UAvatar
            v-else
            :alt="person.name"
            icon="i-heroicons-user"
            size="3xl"
          />
        </template>

        <template #description>
          <PersonDates :person="person" />
        </template>
      </UUser>
    </template>
  </UPageCard>
</template>
