<template>
    <div class="container text-center">
        <div class="row gap-3">
            <component :is="stopListTab" />
            <component :is="timeListTab" />
        </div>
    </div>
</template>

<script setup lang="ts">
import No_Data from './No_Data.vue'
import StopList_Data from './StopList_Data.vue'
import TimeList_Data from './TimeList_Data.vue'
import { computed } from 'vue'
import { useStore } from 'vuex';

const store = useStore();

const stopListTab = computed(() => {
    return store.getters['getByOrderData']["1"] ? StopList_Data : No_Data
})

const timeListTab = computed(() => {
    return store.getters['getByTimeData'][0] ? TimeList_Data : No_Data
})
</script>
<style lang="scss" scoped></style>