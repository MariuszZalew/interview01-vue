<template>
    <div class="col-12 col-lg bg-white rounded-1 custom-border">
        <p class="custom_height text-altlight">
            Please Select the bus line first
        </p>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.custom_height {
    padding: 200px 0;
    // height: 200px;
}

.custom-border {
    background-image: repeating-linear-gradient(14deg, var(--bs-altlight), var(--bs-altlight) 26px, transparent 26px, transparent 37px, var(--bs-altlight) 37px), repeating-linear-gradient(104deg, var(--bs-altlight), var(--bs-altlight) 26px, transparent 26px, transparent 37px, var(--bs-altlight) 37px), repeating-linear-gradient(194deg, var(--bs-altlight), var(--bs-altlight) 26px, transparent 26px, transparent 37px, var(--bs-altlight) 37px), repeating-linear-gradient(284deg, var(--bs-altlight), var(--bs-altlight) 26px, transparent 26px, transparent 37px, var(--bs-altlight) 37px);
    background-size: 2px calc(100% + 38.13px), calc(100% + 38.13px) 2px, 2px calc(100% + 38.13px), calc(100% + 38.13px) 2px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    animation: borderAnimation 1s infinite linear;

}

@keyframes borderAnimation {
    from {
        background-position: 0 0, -38.13px 0, 100% -38.13px, 0 100%;
    }

    to {
        background-position: 0 -38.13px, 0 0, 100% 0, -38.13px 100%;
    }
}
</style>
