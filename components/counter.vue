<template>
  <div ref="counterRef" class="text-5xl font-bold text-primary">
    {{ displayValue }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  to: number
  duration?: number // default: 2000ms
}>()

const displayValue = ref(0)
const counterRef = ref<HTMLElement | null>(null)
let hasAnimated = false

function startCounter() {
  const duration = props.duration ?? 2000
  const frame = 1000 / 60 // 60 FPS
  const totalFrames = Math.round(duration / frame)

  let frameCount = 0
  const update = () => {
    frameCount++
    const progress = Math.min(frameCount / totalFrames, 1)
    displayValue.value = Math.floor(props.to * easeOutQuad(progress))
    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }
  update()
}

function easeOutQuad(t: number): number {
  return t * (2 - t)
}

onMounted(() => {
  if (!counterRef.value) return

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        startCounter()
        hasAnimated = true
        observer.disconnect()
      }
    },
    { threshold: 0.5 }
  )

  observer.observe(counterRef.value)
})
</script>
