<template>
    <div>
        statistics
        <Nav/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
    }
</script>

<style lang="scss" scoped>

</style>