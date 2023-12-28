<template>
    <div class="col-12 col-lg rounded-1 mt-2">
        <p class="text-main fw-semibold">Bus Stop: {{ lineUsed }}</p>
        <ul class="list-group fh-box">
            <li class="list-group-item" v-for="i in convertingSortByOrder" :key="i" @click="handleClick(i)">{{ i.time }}
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
    height: 420px;
    overflow-y: auto;
}
</style>