<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Memorials",
    to: "/memorials",
  },
  {
    label: "Heroes Plaza",
    to: "/heroes-plaza",
  },
  {
    label: "Donations",
    to: "/donate",
  },
]);
</script>

<template>
  <UNavigationMenu
    :items="items"
    orientation="horizontal"
    :ui="{ list: 'flex-wrap justify-center' }"
  />
</template>
