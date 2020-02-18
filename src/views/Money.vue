<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :xxx=" 'type' " :value.sync="record.type"/>
            <div class="note-wrapper">
                <Notes @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
            </div>
            <Tags :data-source.sync="tags" @update:selected="OnSelectedTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator';
    import NumberPad from "@/components/NumberPad.vue";
    import Types from "@/components/Types.vue";
    import Tags from "@/components/Tags.vue";
    import Notes from "@/components/Notes.vue";

    window.localStorage.setItem('version', '1.0.0');
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
        recordList = window.recordList
        tags = window.tagList
        record: RecordItem = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,
        };

        OnSelectedTags(tags: string[]) {
            this.record.tags = tags
        }

        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        saveRecord() {
           window.createRecord(this.record)
        }

        @Watch('recordList')
        onRecordListChange() {
            window.saveRecord();
        }
    }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }

    .note-wrapper {
        padding: 12px 0;
    }
</style>
<style lang="scss" scoped>
</style>