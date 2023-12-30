<template>
    <div>
        <App_Wrapper>
            <App_Navigation />
            <router-view></router-view>
        </App_Wrapper>
    </div>
</template>

<script>
import App_Wrapper from '@/components/App_Wrapper.vue'
import App_Navigation from '@/components/App_Navigation.vue'
export default {
    components: {
        App_Wrapper,
        App_Navigation
    }
}
</script>

<style lang="scss" scoped></style>