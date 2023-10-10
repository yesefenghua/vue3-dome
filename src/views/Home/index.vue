<template>
    <div class="record">
        <div class="record-choose">
            <div>
                <el-input v-model="inpites" placeholder="查询" @change="name">
                    <template #append>
                        <el-button @click="name">
                            搜索
                        </el-button>
                    </template>
                </el-input>
            </div>
            <div>
                <el-button @click="downloadExcel">导出Excel</el-button>
            </div>
        </div>
        <el-table :data="allTableData" style="width: 100%">
            <el-table-column label="名称" property="name" />
            <el-table-column label="时间" property="date" />
            <el-table-column label="距离" property="address" />
        </el-table>
        <el-pagination class="pagination" :current-page="state.page" small="small" layout="prev, pager, next, jumper"
            :total="total" :pager-count="5" @current-change="handleCurrentChange" />
    </div>
</template>
<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { useVueFuse } from 'vue-fuse'
import { download } from "@/utils/excelDownload";
import { data } from "./index";
var lise = []
const downloadExcel = () => {
    download(tableData.value, ["名称", "时间", "距离"],)
}
const inpites = ref()
const tableData = ref(data)
const tableDataup = ref(tableData.value)
// search查询 ，results 返回结果，noResults查询状态
const { search, results, noResults } = useVueFuse(tableData.value, {
    keys: ['name', 'address', 'date']
})
const name = () => {
    search.value = inpites.value
}
watch(() => results.value, () => {
    if (inpites.value) {
        tableDataup.value = results.value
        state.page = 1
        total.value = results.value.length
        allTableData.value = allTable()
    } else {
        tableDataup.value = tableData.value
        state.page = 1
        total.value = tableData.value.length
        allTableData.value = allTable()
    }

})
const state = reactive({
    page: 1,
    limit: 10,
})
const total = ref(tableDataup.value.length)
//前端限制分页（tableData为当前展示页表格）
const allTable = () =>
    tableDataup.value.filter(
        (item, index) => index < state.page * state.limit && index >= (state.page - 1) * state.limit,
    )
const allTableData = ref(allTable())

//改变页码
const handleCurrentChange = (e: number) => {
    state.page = e
    allTableData.value = allTable()
}
</script>

<style scoped >
.record {
    margin: 20px;
}

.record-setsuite {
    color: var(--el-text-color-primary);
    font-size: 16px;
    font-weight: bold;
}

.record-choose {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 18px;
    margin-bottom: 10px;
}

.pagination {
    margin-top: 20px;
    display: flex;
    justify-content: end;
}
</style>

