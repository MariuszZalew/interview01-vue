<template>
    <div>
        <div class="container custom-one  mt-3 bg-white rounded-1 px-0">

            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2 with-magnifying-glass" type="search" placeholder="Search"
                            aria-label="Search" v-model="searchData" @keydown.enter.prevent>
                    </form>
                </div>
            </nav>

            <p class="fw-normal text-start px-4 fs-6 py-4 gray-border">Bus Stops <img src="@/assets/icon/scroll.svg"
                    alt="scrol" class="rotate-90">
            </p>

            <ul class="list-group fixed-height-box list-group-flush">
                <li class="list-group-item py-3 px-4 fw-light" v-for="i in getStopsDataComp" :key="i"> {{ i }}</li>
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

.rotate-90 {
    transform: rotate(90deg);
}

.gray-border {
    border-bottom: 1px solid #ccc;
}

// .list-group-item:hover {
//     cursor: pointer;
//     background-color: var(--bs-light);
// }
</style>