<script lang="ts" setup></script>

<template>
  <header w-full h-14 mx-auto sticky top-0 z-1 els="bb backdrop-filter backdrop-color">
    <Container h-full grid="~ cols-3">
      <div flex h-full items-center>
        <NuxtLink to="/">
          <YsLogo w-10 h-10 />
        </NuxtLink>
      </div>
      <div>
      <!-- maybe search -->
      </div>
      <div flex h-full items-center justify-end>
        <ThemeSelect />
      </div>
    </Container>
  </header>
</template>
