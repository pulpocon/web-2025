<template>
  <nuxt-link v-if="workshop" :to="`/workshop/${id}`" class="workshop-teaser">
    <div class="speaker-info">
      <img v-for="speaker in (workshop.speaker || [])"
           :key="speaker.name"
           :src="speaker.image"
           :alt="speaker.name"
           class="speaker-image">
      <p>{{ (workshop.speaker || []).map((speaker) => speaker.name).join(' & ') }}:</p>
      <p><strong>{{ workshop.title }}</strong></p>
    </div>
  </nuxt-link>
</template>
<script lang="ts" setup>
import workshops from '../../data/workshops'
import speakers from "~/data/speakers";

type Speaker = {
  image: string
  name: string
  link?: string
}

type Workshop = {
  title: string
  speaker: Speaker[]
  description: string[]
  schedule: string
  track: string
  twitter: string[]
}

const props = defineProps({
  id: { type: String, required: true }
})

const workshop: ComputedRef<Workshop | undefined> = computed(() => workshops[props.id])
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
