<script setup lang="ts">
import { type EventItem } from '@/type'
import type { PropType } from 'vue'

defineProps({
    event: {
        type: Object as PropType<EventItem>,
    }
})

</script>
<template>
    <p>Registration the event here</p>
</template>