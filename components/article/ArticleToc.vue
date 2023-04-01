<script lang="ts" setup>
import type { ContentToc } from './types'

const open = ref(false)
const { toc }: {
  toc: ComputedRef<ContentToc>
} = useContent()
</script>

<template>
  <div sticky top-16 text-sm els="backdrop-color backdrop-filter" mx="-4" lg:mx="0" class="article-toc">
    <button
      block h-full p-4 w-full text-left lg:hidden
      @click="open = !open"
    >
      <span text-4 align-middle font-semibold>文章目录</span>
      <Icon text-4 name="heroicons-outline:chevron-right" :class="open && 'rotate-90'" />
    </button>
    <div px-4 max-h="50vh" lg:max-h="100%" lg:pt-8 overflow-y-auto>
      <div class="hidden" lg:block font-semibold>
        文章目录
      </div>
      <TocLinks
        :class="[!open && 'hidden']"
        lg:block
        :links="toc.links"
        @move="open = false"
      />
    </div>
  </div>
</template>

<style lang="ts" scoped>
css({
  '.article-toc': {
    '@lg': {
      maxHeight: 'calc(100vh - {blog.header.height} - 77px)'
    }
  }
})
</style>
