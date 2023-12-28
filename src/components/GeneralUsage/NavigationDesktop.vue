<template>
    <div>
        <div class="container custom-one pb-4 pt-5 ">
            <h2 class="fw-semibold">Timetable</h2>
        </div>
        <div class="container bg-white rounded-1">
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
        </div>
    </div>
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

// .with-magnifying-glass {
//     background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/></svg>') no-repeat right 10px center;
//     padding-right: 30px;
// }
</style>