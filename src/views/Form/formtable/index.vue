<template>
    <div v-for="(item, itemIndex) in tableData" :key="itemIndex">
        <el-table :data="item" style="width: 100%">
            <el-table-column label="项目">
                <template #default="{ row, column, index }">
                    <el-input v-model="row.project" />
                </template>
            </el-table-column>
            <el-table-column label="数量">
                <template #default="{ row }">
                    <el-input v-model="row.quantity" />
                </template>
            </el-table-column>
            <el-table-column label="单位">
                <template #default="{ row }">
                    <el-select v-model="row.unit" placeholder="请输入">
                        <el-option label="文字1" value="shanghai" />
                        <el-option label="文字2" value="beijing" />
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column label="单价">
                <template #default="{ row }">
                    <el-input v-model="row.unitPrice" />
                </template>
            </el-table-column>
            <el-table-column label=" ">
                <template #default="{ row }">
                    <el-input v-model="row.price" />
                </template>
            </el-table-column>
            <el-table-column label="备注">
                <template #default="{ row }">
                    <el-input v-model="row.remark" />
                </template>
            </el-table-column>
            <template #append>
                <el-button link type="primary" style="width: 30%; height: 40px" @click="address(itemIndex)">添加</el-button>
            </template>
        </el-table>
    </div>
    <el-button link type="primary" style="width: 45%; height: 40px" @click="add">类别</el-button>
    <el-button link type="primary" style="width: 45%; height: 40px" @click="addse">计算</el-button>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue'
const tableData = ref([[{
    date: '2016-05-03',
    name: 'beijing',
    address: 189,
},]])

class Project {
    constructor() {
        this.project = null;
        this.quantity = null;
        this.unit = null;
        this.unitPrice = null;
        this.price = null;
        this.remark = null;
    }
}

//添加类别
const add = () => {
    tableData.value.push([new Project()])
}
const address = (length) => {
    tableData.value[length].push(new Project())
}
const del = (data) => {
    tableData.value.splice(data, 1)
}
const addse = () => {
    console.log(tableData.value)
}
</script>
  