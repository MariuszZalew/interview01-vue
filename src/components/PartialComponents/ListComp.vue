<template>
    <ul class="list-group list-group-flush" :class="[customHeight ? 'alt-h-box' : 'fixed-height-box']">
        <li class="list-group-item py-3 px-4 fw-light" v-for="i in valueList" :key="i"> {{ i }}</li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
    valueList: string[]
    customHeight?: boolean
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.fixed-height-box {
    height: 320px;
    overflow-y: auto;
}

.alt-h-box {
    min-height: 70px;
    max-height: 450px;
    overflow-y: auto;
}
</style>