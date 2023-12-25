<template>
    <div>
        <GeneralWrapper>
            <NavigationDesktop />
            <BtnList />
            <ViewBusStops />
        </GeneralWrapper>
        <!-- <ul>
            <li>create component with props to put on bottom</li>
            <li> create usable btn on nav</li>
        </ul> -->
    </div>
</template>

<script>
import GeneralWrapper from '../components/GeneralUsage/GeneralWrapper.vue'
import NavigationDesktop from '../components/GeneralUsage/NavigationDesktop.vue'
import BtnList from '../components/GeneralUsage/BtnList.vue'
import ViewBusStops from '../components/GeneralUsage/ViewBusStops.vue'
export default {
    components: {
        GeneralWrapper,
        NavigationDesktop,
        BtnList,
        ViewBusStops
    }
}
</script>

<style lang="scss" scoped></style>