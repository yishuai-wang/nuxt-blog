<script lang="ts" setup></script>

<template>
  <div class="app-layout">
    <AppHeader />
    <main class="page-main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="ts" scoped>
css({
  '.page-main': {
    minHeight: 'calc(100vh - {blog.header.height} - 77px)'
  }
})
</style>
