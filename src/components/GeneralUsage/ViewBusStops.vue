<template>
    <div class="container text-center">
        <div class="row gap-3">
            <component :is="computeStopsView" />
            <component :is="computeTimeView" />
        </div>
    </div>
</template>

<script setup lang="ts">
import MockupNoData from './MockupNoData.vue'
import MockupStopData from './MockupStopData.vue'
import StopsTimeData from './StopsTimeData.vue'
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const computeStopsView = computed(() => {
    return store.getters['getByOrderData']["1"] ? MockupStopData : MockupNoData
})

const computeTimeView = computed(() => {
    return store.getters['getByTimeData'][0] ? StopsTimeData : MockupNoData
})
</script>
<style lang="scss" scoped></style>