<template>
    <Layout>
        <Tabs class="x" :value.sync="type" class-prefix="type" :data-source="typeList"></Tabs>
        <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"></Tabs>
        <ol>
            <li v-for="(group,index) in result" :key="index">
                <h3>{{group.title}}</h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id">
                        {{item.amount}}
                        {{item.createAt}}
                    </li>
                </ol>
            </li>
        </ol>
    </Layout>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Types from "@/components/Types.vue";
    import Tabs from "@/components/Tabs.vue";
    import intervalList from "@/constant/intervalList";
    import typeList from "@/constant/typeList";

    @Component({
        components: {Tabs, Types}
    })
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
        type = '-';
        interval = 'day';
        intervalList = intervalList
        typeList = typeList

        get recordList() {
            return (this.$store.state as RootState).recordList
        }

        get result() {
            const {recordList} = this
            type HashTableValue = { title: string; items: RecordItem[] }
            const hashTable: { [key: string]: HashTableValue } = {}
            for (let i = 0; i < recordList.length; i++) {
                const [data, time] = recordList[i].createAt!.split('T')
                console.log(data)
                hashTable[data] = hashTable[data] || {title: data, items: []};
                hashTable[data].items.push(recordList[i])
            }
            console.log(hashTable)
            return hashTable
        }

        created(): void {
            this.$store.commit('initRecordList')
        }
    }
</script>

<style lang="scss" scoped>
    ::v-deep .type-item {
        background: white;

        &.selected {
            background: #c4c4c4;

            &::after {
                display: none;
            }
        }
    }

    ::v-deep li.interval-item {
        height: 48px;
    }
</style>