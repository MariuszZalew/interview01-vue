<template>
    <div class="custom-wrapper pb-4 bg-light px-2">
        <slot>
            Ooops! Components should be here.
        </slot>
        <button @click="convertCompToNested"> clickc to compute!</button>
        <pre>

            <!-- {{ dataFromApi }} -->
            <!-- {{ publishedStops }} -->
            <!-- {{ convertCompToNested }} -->

            {{ newDataSet }}
            {{ convertingDataToObj }}
        </pre>
    </div>
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref, reactive, computed } from 'vue'
// type stopList = {
//     line: number
//     stop: string
//     order: number
//     time: string
// }
// let computedStops = computed(() => dataFromApi.value.map(element => { return element.line }))

const convertingDataToObj = computed(() => {
    return dataFromApi.raw.reduce((acc, curr) => {
        const nameValue = curr.line;

        if (!acc[nameValue]) {
            acc[nameValue] = [];
        }

        // Push the entire curr to the array
        acc[nameValue].push(curr);

        return acc;

    }, {})
})

let newDataSet = reactive({
    raw: {}
})
function convertCompToNested() {
    return convertingDataToObj.value["100"].reduce((acc, curr) => {
        const nameValue = curr.stop;

        if (!acc[nameValue]) {
            acc[nameValue] = [];
        }

        // Push the entire curr to the array
        acc[nameValue].push(curr);

        return newDataSet.raw = acc;
    }, {})
}

function convertArrayToObject(inputArray) {
    return inputArray.reduce((resultObject, obj) => {
        const nameValue = obj.name;

        if (!resultObject[nameValue]) {
            resultObject[nameValue] = [];
        }

        // Push the entire object to the array
        resultObject[nameValue].push(obj);

        return resultObject;
    }, {});
}

const publishedStops = computed(() => {
    return dataFromApi.raw[0] ? Array.from(new Set(dataFromApi.raw.map(e => e.line))).sort() : 'none'
})

let dataFromApi = reactive({
    raw: []
})
function mememe() {
    const apiUrl = 'http://localhost:3000/stops';

    // Make a GET request to the specified API endpoint using Axios
    axios.get(apiUrl)
        .then(response => dataFromApi.raw = response.data)
        // .then(data => console.log(data))
        // .then(data => {
        //     dataFromApi.value = data
        // })
        .catch(err => {
            console.error('Error:', err.message);
        });
}

function getData() {
    mememe()
}
onMounted(() => getData())

</script>
<style lang="scss" scoped>
.custom-wrapper {
    min-height: 100vh;
}
</style>