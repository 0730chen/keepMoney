<template>
    <div>
        <Layout><p>label</p></Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component
    export default class Label extends Vue {
        name: "Label" | undefined
    }
</script>

<style lang="scss" scoped>

</style>