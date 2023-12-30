<template>
    <div class="col-12 col-lg rounded-1 mt-1 pt-4 px-0 bg-white">
        <h6 class="fw-bold text-start px-4">Bus Stop: {{ lineUsed }}</h6>

        <ListDescComp :propSwitch="false" descVal="Time" />
        <ListComp :valueList="convertingSortByOrder" />
    </div>
</template>

<script>
import ListComp from '../PartialComponents/ListComp.vue';
import ListDescComp from '../PartialComponents/ListDescComp.vue';
export default {
    components: {
        ListComp,
        ListDescComp
    },
    computed: {
        convertingSortByOrder() {
            return this.$store.getters['getByTimeData'].map(elem => { return elem.time })
        },
        lineUsed() {
            return this.$store.getters['getByTimeData'][0].stop
        }
    },
    methods: {
        handleClick(val) {
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.gray-border {
    border-bottom: 1px solid #ccc;
}
</style>