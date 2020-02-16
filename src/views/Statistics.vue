<template>
    <div>
        <Layout><p>statistics</p></Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
    }
</script>

<style lang="scss" scoped>

</style>