<template>
    <div class="col-12 col-lg rounded-1 mt-2">
        <p class="text-main fw-semibold">
            Bus line: {{ getLine }}
            <!-- <img src="../../assets/icon/scroll_icon.svg" alt="" height="14"> -->
        </p>
        <ul class="list-group fh-box">
            <li class="list-group-item" v-for="i in convertingSortByOrder" :key="i" @click="handleClick(i)">{{ i[0].stop }}
            </li>
        </ul>
    </div>
</template>

<script>
function sortObjectsByTime(objects) {
    const compareByTime = (a, b) => {
        const timeA = parseFloat(a.time.replace(':', '.'));
        const timeB = parseFloat(b.time.replace(':', '.'));
        return timeA - timeB;
    };
    return objects.slice().sort(compareByTime);
}
export default {
    computed: {
        convertingSortByOrder() {
            return this.$store.getters['getByOrderData']
        },
        getLine() {
            return this.$store.getters['getSelectedLine']
        },
    },
    methods: {
        handleClick(val) {
            this.key = val[0].line
            let sol = sortObjectsByTime(val)
            this.$store.dispatch('sortByTime', sol);
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