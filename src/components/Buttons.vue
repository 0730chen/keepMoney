<template>
    <button class="newTags" @click="$emit('click',$event)">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Buttons extends Vue {
        name!: "Buttons"
        @Prop() xxx!: string
    }
</script>

<style lang="scss" scoped>
    .newTags {
        background: rgb(249, 219, 99);
        color: black;
        border: none;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
        font-weight: 1000;

        &-wrapper {
            text-align: center;
            margin-top: 44-16px;
        }
    }
</style>