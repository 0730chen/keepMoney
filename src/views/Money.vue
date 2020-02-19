<template>
    <div>
        <Layout class-prefix="layout">
            <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
            <Types :xxx=" 'type' " :value.sync="record.type"/>
            <div class="note-wrapper">
                <Notes @update:value="onUpdateNotes" field-name="备注" placeholder="在这里输入备注"/>
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
    import store from "@/store/index";

    window.localStorage.setItem('version', '1.0.0');
    @Component({
        components: {
            Notes,
            Tags,
            Types,
            NumberPad
        },
        computed:{
            recordList(){
                return this.$store.state.count
            }
        }
    })
    export default class Money extends Vue {
        name: "Money" | undefined;
        // recordList = store.state.recordList
        record: RecordItem = {
            tags: [],
            notes: '',
            type: '-',
            amount: 0,
        };
        created(): void {
            this.$store.commit('initRecordList')
        }

        onUpdateTags(value: string[]) {
            console.log(value);
            this.record.tags = value;
        }


        onUpdateNotes(value: string) {
            this.record.notes = value
        }

        saveRecord() {
           this.$store.commit('createRecord',this.record)
            this.$store.commit('saveRecords')
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