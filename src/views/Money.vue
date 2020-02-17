<template>
    <div>
        <Layout class-prefix="layout">
            {{record}}
            <NumberPad @update:value="onUpdateCount"/>
            <Types :xxx=" 'type' " @update:value="onUpdateTypes"/>
            <Notes @update:value="onUpdateNotes"/>
            <Tags :data-source.sync="tags" @update:selected="OnSelectedTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NumberPad from "@/components/NumberPad.vue";
    import Types from "@/components/Types.vue";
    import Tags from "@/components/Tags.vue";
    import Notes from "@/components/Notes.vue";

    type Record = {
        tags: string[];
        notes: string;
        type: string;
        amount: number;
    }
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
        tags: string[] = ['衣服', '食物', '交通', '消费'];
        record: Record = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0
        }

        OnSelectedTags(tags: string[]) {
            this.record.tags = tags
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        onUpdateTypes(value: string) {
            this.record.type = value
        }

        onUpdateCount(value: string) {
            this.record.amount = parseFloat(value)
        }
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