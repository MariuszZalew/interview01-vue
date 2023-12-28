<template>
    <div>
        <GeneralWrapper>
            <NavigationDesktop />
            <router-view></router-view>
        </GeneralWrapper>
    </div>
</template>

<script>
import GeneralWrapper from '@/components/GeneralUsage/GeneralWrapper.vue'
import NavigationDesktop from '../components/GeneralUsage/NavigationDesktop.vue'
export default {
    components: {
        GeneralWrapper,
        NavigationDesktop,
    }
}
</script>

<style lang="scss" scoped></style>