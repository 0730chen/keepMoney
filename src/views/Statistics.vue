<template>
    <Layout>
        <Tabs class="x" :value.sync="type" class-prefix="type" :data-source="typeList"></Tabs>
        <ol>
            <li v-for="(group,index) in groupedList" :key="index">
                <h3 class="title">{{beautify(group.title)}}</h3>
                <ol>
                    <li v-for="item in group.items" :key="item.id" class="record">
                        <span>{{tagString(item.tags)}}</span>
                        <span class="notes">{{item.notes}}</span>
                        <span>￥{{item.amount}}</span>
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
    import typeList from "@/constant/typeList";
    import dayjs from "dayjs";
    import clone from "@/lib/clone";

    @Component({
        components: {Tabs, Types}
    })
    export default class Statistics extends Vue {
        name: "Statistics" | undefined
        type = '-';
        interval = 'day';
        typeList = typeList

        beautify(string: string) {
            const day = dayjs(string);
            const now = dayjs();
            if (day.isSame(now, 'day')) {
                return '今天';
            } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
                console.log('hi');
                return '昨天';
            } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
                return '前天';
            } else if (day.isSame(now, 'year')) {
                return day.format('M月D日');
            } else {
                return day.format('YYYY年M月D日');
            }
        }

        tagString(tags: Tag[]) {
            return tags.length === 0 ? '无' : tags.join(',')
        }

        get recordList() {
            return (this.$store.state as RootState).recordList
        }

        get groupedList() {
            const {recordList} = this
            if (recordList.length === 0) {
                return []
            }
            type HashTableValue = { title: string; items: RecordItem[] }
            const hashTable: { title: string; items: RecordItem[] }[] = []
            const newList = clone(recordList).sort((a, b) => dayjs(b.createAt).valueOf() - dayjs(a.createAt).valueOf());
            type Result = { title: string; total?: number; items: RecordItem[] }[]
            const result: Result = [{title: dayjs(newList[0].createAt).format('YYYY-MM-DD'), items: [newList[0]]}];
            for (let i = 1; i < newList.length; i++) {
                const current = newList[i];
                const last = result[result.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createAt), 'day')) {
                    last.items.push(current);
                } else {
                    result.push({title: dayjs(current.createAt).format('YYYY-MM-DD'), items: [current]});
                }
            }
            result.map(group => {
                group.total = group.items.reduce((sum, item) => {
                    console.log(sum);
                    console.log(item);
                    return sum + item.amount;
                }, 0);
            });
            return result
        }

        created(): void {
            this.$store.commit('initRecordList')
        }
    }
</script>

<style lang="scss" scoped>
    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        @extend %item
    }

    .record {
        @extend %item;
        background: white;
    }

    .notes {
        margin-right: auto;
        margin-left: 8px;
        color: #999999;
    }

    ::v-deep .type-item {
        background: #c4c4c4;

        &.selected {

            background: white;

            &::after {
                display: none;
            }
        }
    }

    ::v-deep li.interval-item {
        height: 48px;
    }
</style>