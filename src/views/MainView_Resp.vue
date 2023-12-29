<template>
    <div>
        <App_Wrapper>
            <Navigation_Resp />
            <router-view></router-view>
        </App_Wrapper>
    </div>
</template>

<script>
import App_Wrapper from '@/components/App_Wrapper.vue'
import Navigation_Resp from '@/components/Navigation_Resp.vue'
export default {
    components: {
        App_Wrapper,
        Navigation_Resp
    }
}
</script>

<style lang="scss" scoped></style>