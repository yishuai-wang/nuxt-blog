<script lang="ts" setup>
import { useThemeData } from './logic/vm'
const { currentTheme, changeTheme } = useThemeData()
</script>

<template>
  <div class="theme-select">
    <button aria-label="Color Mode" :title="currentTheme.themeDescription" @click="changeTheme">
      <Icon :name="currentTheme.themeIcon" />
    </button>
  </div>
</template>

<style lang="less">
body {
  background-color: $dt('blog.themes.background.static.light');
  color: $dt('blog.themes.color.static.light');
}
.dark body {
  background-color: $dt('blog.themes.background.static.dark');
  color: $dt('blog.themes.color.static.dark');
}
</style>

<style lang="ts">
css({
  '.theme-select': {
    display: 'flex',
    alignItems: 'center'
  }
})
</style>
