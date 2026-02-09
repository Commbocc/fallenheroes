<script setup lang="ts">
import type { FallenCollectionItem } from "@nuxt/content";

const props = defineProps<{ person: Partial<FallenCollectionItem> }>();
</script>

<template>
  <span v-if="person.dob"
    >{{ useUTCDateStr(person.dob) }}
    -
  </span>
  <abbr v-if="person.circa" title="circa">c.</abbr>
  {{ useUTCDateStr(person.date) }}
</template>
