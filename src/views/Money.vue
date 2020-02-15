<template>
    <div class="nav-wrapper">
        <div class="content">
            money
    </div>
        <Nav/>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    @Component({})
    export default class Money extends Vue {
        name: "Money" | undefined
    }
</script>

<style lang="scss" scoped>
.nav-wrapper {
    display: flex;
    border: 1px solid green;
    flex-direction: column;
    height: 100vh;
}
    .content{
        overflow: auto;
        flex-grow: 1;
    }

</style>