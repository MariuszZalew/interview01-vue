<template>
    <div class="container bg-white my-3 rounded-1">
        <p class="py-4 px-2 fw-bolder">
            Select Bus Line
        </p>
        <div class="d-flex flex-wrap gap-2  pb-4 px-2">
            <button type="button" class="btn btn-primary custom-width-btn" v-for="iter in lineList" :key="iter"
                @click="handleClick(iter)">{{
                    iter
                }}</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({ 'linesData': 'getLinesData' }),
        lineList() {
            return Object.keys(this.linesData)
        },
        convertingDataToObj() {
            return this.$store.getters['getLinesData']
        },
    },
    methods: {
        handleClick(val) {
            this.$store.dispatch('sortByTime', [])
            this.$store.dispatch('convertToSortByOrder', val)
            this.$store.dispatch('setSelectedLine', val)
        },
    },

    async mounted() {
        await this.$store.dispatch('FETCH_RAW_DATA');
        await this.$store.dispatch('convertToObjLines')
    },
}
</script>

<style lang="scss" scoped>
.custom-width-btn {
    width: 60px;
}
</style>