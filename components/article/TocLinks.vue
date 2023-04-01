<script lang="ts" setup>
import type { Link } from './types'

const props = defineProps<{
  links: Link[]
}>()

const emit = defineEmits(['move'])

const { links } = toRefs(props)

const flattenLinks = (links: Link[]): Link[] => {
  return links.flatMap(link => [link, ...(flattenLinks(link.children || []))])
}

const allLikns = computed(() => flattenLinks(links.value))

const { updateHeadings, activeHeadings } = usePostScroll()

if (process.client) {
  setTimeout(() => {
    updateHeadings([
      ...document.querySelectorAll('.article-content h1'),
      ...document.querySelectorAll('.article-content h2'),
      ...document.querySelectorAll('.article-content h3'),
      ...document.querySelectorAll('.article-content h4'),
    ])
  }, 300)
}

const router = useRouter()

function scrollToHeading(id: string) {
  emit('move')
  router.push(`#${id}`)
}
</script>

<template>
  <ul class="post-toc-links">
    <li
      v-for="link of allLikns"
      :key="link.id"
      :class="[`depth-${link.depth}`]"
    >
      <a
        :href="`#${link.id}`"
        class="toc-link" :class="[
          {
            active: activeHeadings.includes(link.id),
          },
        ]"
        @click.prevent="scrollToHeading(link.id)"
      >
        {{ link.text }}
      </a>
    </li>
  </ul>
</template>

<style lang="ts" scoped>
css({
  '.post-toc-links': {
    '.depth-3': {
      paddingLeft: '{space.3}'
    },
    '.depth-4': {
      paddingLeft: '{space.6}'
    },
    a: {
      display: 'block',
      padding: '{space.1} 0',
      fontSize: '{text.sm.fontSize}',
      lineHeight: '{text.sm.lineHeight}',
      color: '{color.gray.500}',
      truncate: true,
      '@lg': {
        paddingRight: '{space.3}'
      },
      '&:not(.active):hover': {
        color: '{color.gray.900}',
      },
      '@dark': {
        '&:not(.active):hover': {
          color: '{color.gray.400}',
        },
      },
      '&.active': {
        color: '{color.primary.500}'
      }
    }
  }
})
</style>
