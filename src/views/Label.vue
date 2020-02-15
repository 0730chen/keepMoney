<template>
    <div>
        label
        <Nav/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Label extends Vue {
        name: "Label" | undefined
    }
</script>

<style lang="scss" scoped>

</style>