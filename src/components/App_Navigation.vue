<template>
    <div>
        <div class="container custom-one pb-3 pt-4">
            <h2 class="fw-semibold">Timetable</h2>
        </div>
        <div class="container bg-white rounded-1">
            <Nav_Tabs />
        </div>
    </div>
</template>

<script>
import Nav_Tabs from './SubComponents/Nav_Tabs.vue';
export default {
    components: {
        Nav_Tabs
    }
}
</script>

<style lang="scss" scoped></style>