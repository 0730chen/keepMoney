<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types/>
            <Notes/>
            <Tags/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NumberPad from "@/components/NumberPad.vue";
    import Types from "@/components/Types.vue";
    import Tags from "@/components/Tags.vue";
    import Notes from "@/components/Notes.vue";

    @Component({
        components: {
            Notes,
            Tags,
            Types,
            NumberPad
        }
    })
    export default class Money extends Vue {
        name: "Money" | undefined
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
<style lang="scss" scoped>
</style>