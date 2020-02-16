<template>
    <div class="nav-wrapper">
        <div class="content">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Layout extends Vue {
        name: "Layout" | undefined
    }
</script>

<style lang="scss" scoped>
    .nav-wrapper {
        display: flex;
        border: 1px solid green;
        flex-direction: column;
        height: 100vh;
    }

    .content {
        overflow: auto;
        flex-grow: 1;
    }

</style>