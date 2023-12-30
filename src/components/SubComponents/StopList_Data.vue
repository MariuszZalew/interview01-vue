<template>
    <div class="col-12 col-lg rounded-1 mt-1 pt-4 px-0 bg-white">
        <h6 class="fw-bold text-start px-4">
            Bus line: {{ getLine }}
        </h6>

        <ListDescComp :propSwitch="true" descVal="Bus Stops" />

        <ul class="list-group list-group-flush text-start fh-box">
            <li :class="[(activeItem === i[0].stop && activeItemIndex === i[0].order) ? 'text-primary' : '']"
                class="list-group-item fw-light py-3 px-4" v-for="i in convertingSortByOrder" :key="i[0].stop"
                @click="handleClick(i)">{{
                    i[0].stop }}
            </li>
        </ul>
    </div>
</template>

<script>
import ListDescComp from '../PartialComponents/ListDescComp.vue';
function sortObjectsByTime(objects) {
    const compareByTime = (a, b) => {
        const timeA = parseFloat(a.time.replace(':', '.'));
        const timeB = parseFloat(b.time.replace(':', '.'));
        return timeA - timeB;
    };
    return objects.slice().sort(compareByTime);
}
export default {
    components: {
        ListDescComp
    },
    data() {
        return {
            activeItem: '',
            activeItemIndex: null
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
            this.activeItemIndex = val[0].order
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

.gray-border {
    border-bottom: 1px solid #ccc;
}
</style>