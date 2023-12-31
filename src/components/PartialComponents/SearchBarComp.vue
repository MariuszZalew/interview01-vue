<template>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <form class="d-flex" role="search">
                <input class="form-control me-2 with-magnifying-glass" type="search" placeholder="Search"
                    aria-label="Search" :value="searchDataProp" @keydown.enter.prevent @input="updateSearch">
            </form>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['updateFromSearch'])
const updateSearch = (e: Event) => {
    emit('updateFromSearch', (e.target as HTMLInputElement).value)
}
type Props = {
    searchDataProp: string
}
defineProps<Props>()

</script>

<style lang="scss" scoped>
.with-magnifying-glass {
    background: url('@/assets/icon/search.svg') no-repeat right 10px center;
    padding-right: 30px;
}
</style>