<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad/>
            <Types :xxx=" 'type' "/>
            <Notes/>
            <Tags :data-source.sync="tags"/>
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
        name: "Money" | undefined;
        tags: string[] = ['衣服', '食物', '交通', '消费']
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