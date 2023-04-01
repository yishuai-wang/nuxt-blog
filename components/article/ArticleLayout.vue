<script lang="ts" setup>
const { page } = useContent()
</script>

<template>
  <Container
    flex="~ col-reverse"
    lg:grid
    lg:post-grid-col
    lg:gap-8
  >
    <article relative class="article-content" pt-8>
      <NuxtImg
        v-if="page.cover"
        :src="page.cover"
        aspect-ratio="2/1"
        rounded-2
        mb-6
      />
      <ProseH1 :id="page.title">
        {{ page.title }}
      </ProseH1>
      <div text-sm flex justify-between items-center>
        <div flex justify-between items-center>
          <Avatar mr-2 :src="page.avatar" shape="rounded" />
          <span>{{ page.author }}</span>
        </div>
        <time>{{ page.createTime }}</time>
      </div>

      <slot />
    </article>
    <ArticleToc />
  </Container>
</template>

<style lang="ts">
css({
  '.article-toc-wrapper': {
    '@lg': {
      maxHeight: 'calc(100vh - {blog.header.height})'
    }
  }
})
</style>
