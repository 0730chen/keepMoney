<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :xxx=" 'type' " :value.sync="record.type"/>
            <Notes @update:value="onUpdateNotes"/>
            <Tags :data-source.sync="tags" @update:selected="OnSelectedTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Watch,Vue} from 'vue-property-decorator';
    import NumberPad from "@/components/NumberPad.vue";
    import Types from "@/components/Types.vue";
    import Tags from "@/components/Tags.vue";
    import Notes from "@/components/Notes.vue";
    import moneyModel from "@/models/moneyModel";
    const recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    window.localStorage.setItem('version','1.0.0');

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
        recordList= moneyModel.fetch();

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
        saveRecord(){
            const record2 = moneyModel.clone(this.record);
            record2.createAt = new Date()
            this.recordList.push(record2);
        }
        @Watch('recordList')
        onRecordListChange(){
            moneyModel.save(this.recordList)
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