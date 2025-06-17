<template>
  <nuxt-link v-if="talk" :to="`/talk/${id}`">
    <div class="speaker-info">
      <img v-for="speaker in (talk.speaker || [])"
           :key="speaker.name"
           :src="speaker.image"
           :alt="speaker.name"
           class="speaker-image">
      <p>{{ (talk.speaker || []).map((speaker) => speaker.name).join(' & ') }}:</p>
      <p><strong>{{ talk.title }}</strong></p>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import talks from '../../data/talks'

type Speaker = {
  image: string
  name: string
  link?: string
}

type Talk = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  twitter: string
}

const props = defineProps({
  id: { type: String, required: true }
})

const talk: ComputedRef<Talk | undefined> = computed(() => talks[props.id])
</script>

<style scoped lang="scss">
.workshop-teaser {
  display: block;
  text-decoration: none;
}

.speaker-info {
  display: block;
  align-items: center;
}

.speaker-image {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}
</style>
