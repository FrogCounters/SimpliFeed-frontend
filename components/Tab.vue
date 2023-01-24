<template>
  <div class="cursor-pointer tab w-full flex flex-row mb-2">
    <div
      :class="[
        inFocus ? 'bg-accent' : 'bg-slate-200',
        'text-md',
        'md:text-xl',
        'w-full',
        'px-3',
        'py-2',
        'rounded-tl-lg',
        'rounded-bl-lg',
      ]"
    >
      {{ label }}
    </div>
    <div :class="[inFocus ? 'bg-accent' : 'bg-none', 'w-2']"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Tab',
  props: {
    label: { type: String, required: true },
    inFocus: { type: Boolean, required: true },
  },
})
</script>

<style scoped>
.bg-accent {
  background-color: #b1aeea;
}

.bg-none {
  background-color: #fefdf9;
}
</style>
