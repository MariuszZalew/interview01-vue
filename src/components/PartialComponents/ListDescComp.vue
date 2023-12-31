<template>
    <p class="fw-normal text-start px-4 fs-6 py-4 gray-border">
        {{ descVal }}
        <img src="@/assets/icon/scroll.svg" alt="scrol" class="rotate-90" v-if="propSwitch">
    </p>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
    propSwitch: boolean
    descVal: string
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.rotate-90 {
    transform: rotate(90deg);
}
</style>