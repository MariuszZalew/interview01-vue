<template>
    <div class="container bg-white my-3 rounded-1">
        <!-- Select Bus Line -->
        <p class="py-4 px-2 fw-bolder">
            Select Bus Line
        </p>
        <div class="d-flex flex-wrap gap-2  pb-4 px-2">
            <button type="button" class="btn btn-primary custom-width-btn" v-for="i in 51" :key="i">{{ i +
                99
            }}</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.custom-width-btn {
    width: 60px;
}
</style>