<template>
    <div class="col-12 col-lg rounded-1 mt-1 pt-4 px-0 bg-white">
        <h6 class="fw-bold text-start px-4">Bus Stop: {{ lineUsed }}</h6>

        <p class="fw-normal text-start px-4 fs-6 pt-4">Time</p>

        <ul class="list-group list-group-flush text-start fh-box">
            <li class="list-group-item fw-light py-3 px-4" v-for="i in convertingSortByOrder" :key="i"
                @click="handleClick(i)">{{ i.time }}
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    computed: {
        convertingSortByOrder() {
            return this.$store.getters['getByTimeData']
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
.fh-box {
    height: 320px;
    overflow-y: auto;
}
</style>