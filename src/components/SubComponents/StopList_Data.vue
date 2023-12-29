<template>
    <div class="col-12 col-lg rounded-1 mt-1 pt-4 px-0 bg-white">
        <h6 class="fw-bold text-start px-4">
            Bus line: {{ getLine }}
        </h6>

        <p class="fw-normal text-start px-4 fs-6 pt-4">Bus Stops <img src="@/assets/icon/scroll.svg" alt="scrol"
                class="rotate-90">
        </p>

        <ul class="list-group list-group-flush text-start fh-box">
            <li :class="[activeItem === i[0].stop ? 'text-primary' : '']" class="list-group-item fw-light py-3 px-4"
                v-for="i in convertingSortByOrder" :key="i[0].stop" @click="handleClick(i)">{{
                    i[0].stop }}
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
    data() {
        return {
            activeItem: '',
        };
    },
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
            this.activeItem = val[0].stop
            this.key = val[0].line
            let sol = sortObjectsByTime(val)
            this.$store.dispatch('sortByTime', sol);
        }
    }
}
</script>
<style lang="scss" scoped>
.fh-box {
    height: 320px;
    overflow-y: auto;
}

.rotate-90 {
    transform: rotate(90deg);
}

.list-group-item:hover {
    cursor: pointer;
    background-color: var(--bs-light);
}
</style>