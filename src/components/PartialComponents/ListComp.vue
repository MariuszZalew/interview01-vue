<template>
    <ul class="list-group fixed-height-box list-group-flush">
        <li class="list-group-item py-3 px-4 fw-light" v-for="i in valueList" :key="i"> {{ i }}</li>
    </ul>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
    valueList: string[]
}

defineProps<Props>()
</script>

<style lang="scss" scoped>
.fixed-height-box {
    height: 320px;
    overflow-y: auto;
}
</style>