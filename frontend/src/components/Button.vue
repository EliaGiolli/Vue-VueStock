<template>
  <button
    :class="buttonClass"
    @click="$emit('click', $event)"
    :aria-label="ariaLabel"
    type="button"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: { type: String, default: 'default' }, // 'default', 'navbar', 'theme'
  size: { type: String, default: 'md' }, // 'sm', 'md', 'lg'
  ariaLabel: { type: String, default: '' }
});

const emit = defineEmits(['click'])

const buttonClass = computed(() => {
  let base = 'rounded focus:outline-none transition font-semibold';
  let size = '';
  let variant = '';

  // Size
  if (props.size === 'sm') size = 'px-2 py-1 text-sm';
  else if (props.size === 'lg') size = 'px-6 py-3 text-lg';
  else size = 'px-4 py-2 text-base';

  // Variant
  if (props.variant === 'navbar') {
    variant = 'bg-lime-500 hover:bg-lime-700 text-white';
  } else if (props.variant === 'theme') {
    variant = 'bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-400';
  } else {
    variant = 'bg-emerald-500 hover:bg-emerald-600 text-white shadow shadow-gray-400';
  }

  return [base, size, variant].join(' ');
});
</script>
