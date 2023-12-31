<template>
    <nav class="navbar navbar-expand bg-body-tertiary p-0">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-0 gap-4">
                    <li class="nav-item" @click="setActive('busLines')">
                        <router-link to="/" :class="[activeItem === 'busLines' ? 'active fw-semibold' : '']"
                            class="nav-link  p-3">But Lines</router-link>
                    </li>
                    <li :class="[activeItem === 'stops' ? 'active fw-semibold' : '']" class="nav-item"
                        @click="setActive('stops')">
                        <router-link to="/Stops" class="nav-link  p-3">Stops </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            activeItem: 'busLines',
        };
    },
    methods: {
        setActive(item) {
            this.activeItem = item;
        },
    },
}
</script>

<style lang="scss" scoped>
.active {
    border-bottom: 3px solid var(--bs-primary);
}
</style>