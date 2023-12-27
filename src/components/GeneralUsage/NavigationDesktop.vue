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
                                <a :class="[activeItem === 'busLines' ? 'active fw-semibold' : '']" class="nav-link  p-3"
                                    aria-current="page" href="#">Bus Lines</a>
                            </li>
                            <li :class="[activeItem === 'stops' ? 'active fw-semibold' : '']" class="nav-item"
                                @click="setActive('stops')">
                                <a class="nav-link p-3" href="#">Stops</a>
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
</style>