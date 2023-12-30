<template>
    <div class="container custom-one pt-1 mt-3 bg-white rounded-1 px-0">
        <SearchBarComp :searchDataProp="searchData" @updateFromSearch="updateSearchTerm" />
        <ListDescComp :propSwitch="true" descVal="Bus Stops" />
        <ListComp :valueList="getStopsDataComp" />
    </div>
</template>

<script>
import ListComp from './PartialComponents/ListComp.vue';
import ListDescComp from './PartialComponents/ListDescComp.vue';
import SearchBarComp from './PartialComponents/SearchBarComp.vue';
export default {
    components: {
        ListComp,
        ListDescComp,
        SearchBarComp,
    },
    data: () => ({
        searchData: ''
    }),
    computed: {
        getStopsDataComp() {
            let temp = this.$store.getters['getStopsData']
            return temp.filter(element => element.toLowerCase().includes(this.searchData.toLowerCase())).sort()
        }
    },
    methods: {
        updateSearchTerm(elem) {
            this.searchData = elem
        }
    },
    mounted() {
        this.$store.dispatch('convertToArrStops');
    }
}
</script>

<style lang="scss" scoped>
.rotate-90 {
    transform: rotate(90deg);
}

.gray-border {
    border-bottom: 1px solid #ccc;
}
</style>