
<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">

        <el-form-item label="账号" prop="name">
            <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item label="密码" prop="pass">
            <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useStore } from "@/stores/index";
import router from "@/router";
const Store = useStore()
const ruleFormRef = ref<FormInstance>()


const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请您输入密码'))
    } else {
        if (ruleForm.name !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('name', () => null)
        }
        callback()
    }
}
const validateName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入姓名'))
    } else {
        callback()
    }
}

const ruleForm = reactive({
    pass: '',
    name: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    name: [{ validator: validateName, trigger: 'blur' }],
})
// name:String,

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            Store.key({ pass: ruleForm.pass, name: ruleForm.pass })
            router.push('/about')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
  