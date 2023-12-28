<template>
    <div>
        <div class="container custom-one py-3 mt-3 bg-white rounded-1 ">

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 with-magnifying-glass" type="search" placeholder="Search"
                            aria-label="Search" v-model="searchData" @click.stop>
                    </form>
                </div>
            </nav>

            <ul class="list-group fixed-height-box p-2">
                <li class="list-group-item" v-for="i in getStopsDataComp" :key="i"> {{ i }}</li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        searchData: ''
    }),
    computed: {
        getStopsDataComp() {
            let temp = this.$store.getters['getStopsData']
            return temp.filter(element => element.toLowerCase().includes(this.searchData.toLowerCase())).sort()
        }
    },
    mounted() {
        this.$store.dispatch('convertToArrStops');
    }
}
</script>

<style lang="scss" scoped>
.with-magnifying-glass {
    background: url('@/assets/icon/search.svg') no-repeat right 10px center;
    padding-right: 30px;
}

.fixed-height-box {
    height: 420px;
    overflow-y: auto;
}
</style>