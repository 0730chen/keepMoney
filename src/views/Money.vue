<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <!--            <Types class-prefix="money" :value.sync="record.type"/>-->
            <Tabs class="x" :value.sync="record.type" class-prefix="money" :data-source="typeList">
            </Tabs>
            <div class="note-wrapper">
                <Notes :value.sync="record.notes" field-name="备注" placeholder="在这里输入备注"/>
            </div>
            <Tags @update:value="onUpdateTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import {Component, Watch, Vue} from 'vue-property-decorator';
    import NumberPad from "@/components/NumberPad.vue";
    import Types from "@/components/Types.vue";
    import Tags from "@/components/Tags.vue";
    import Notes from "@/components/Notes.vue";
    import typeList from "@/constant/typeList";
    import Tabs from "@/components/Tabs.vue";

    window.localStorage.setItem('version', '1.0.0');
    @Component({
        components: {
            Notes,
            Tags,
            Types,
            NumberPad,
            Tabs
        },
    })
    export default class Money extends Vue {
        name: "Money" | undefined;
        typeList = typeList
        record: RecordItem = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,
        };

        get recordList() {
            return this.$store.state.count
        }

        created(): void {
            this.$store.commit('initRecordList')
        }

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }


        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        saveRecord() {
            if (!this.record.tags || this.record.tags.length === 0) {
                return window.alert('至少选择一个标签')
            } else {
                this.$store.commit('createRecord', this.record)
                this.$store.commit('saveRecords')
                this.record.notes = ''
                window.alert('记录成功')
            }
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