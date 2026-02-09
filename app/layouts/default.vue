<script setup lang="ts">
const headerImageSrc = computed(() => {
  const { path } = useRoute();
  return path === "/"
    ? "/images/home-collage.jpg"
    : "/images/default-collage.png";
});
</script>

<template>
  <UContainer as="header" class="justify-items-center my-5">
    <a href="/" class="block">
      <NuxtImg
        src="/images/logo.png"
        alt="First Responders Fallen Heroes Fund & Memorial Tribute"
        width="320"
        format="webp"
      />
    </a>

    <Navigation class="" />

    <figure class="prose">
      <NuxtImg
        :src="headerImageSrc"
        alt="First Responders Fallen Heroes Fund & Memorial Tribute"
        width="660"
        format="webp"
      />
    </figure>

    <Breadcrumbs />
  </UContainer>

  <UMain>
    <UContainer>
      <slot></slot>
    </UContainer>
  </UMain>

  <UContainer as="footer" class="justify-items-center my-5">
    <Navigation as="div" />

    <div class="prose text-center text-sm">
      <hr />

      <p>
        © 2010 -
        <ClientOnly>{{ new Date().getFullYear() }}</ClientOnly> Hillsborough
        County Board of County Commissioners
      </p>

      <p>
        County Center <br />
        601 E. Kennedy Blvd. <br />
        Tampa, FL 33602
      </p>

      <p>813-272-5900</p>
    </div>
  </UContainer>
</template>
