
<template>
    <div>
        注册
    </div>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm"
        label-position="top">
        <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass" type="password" placeholder="密码" autocomplete="off" />
        </el-form-item>
        <div style="display: flex;align-items: center;      justify-content: center;">
            <el-button type="primary" @click="submitForm(ruleFormRef)">注册</el-button>
            <el-button @click="resetForm">返回</el-button>
        </div>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { type FormInstance, type FormRules } from 'element-plus'
import { useStoreLogin } from "@/stores/components/login";
import { registration } from "@/api/login/index";
const storeLogin = useStoreLogin();
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
            registration({
                name: ruleForm.name,
                pass: ruleForm.pass,
            })
                .then((data) => {
                    console.log(data);
                    ElMessage({
                        message: '注册成功',
                        type: 'success',
                    })
                    resetForm()
                })
                .catch((err) => {
                    ElMessage({
                        message: '注册失败',
                        type: 'error',
                    })
                })

        }
    })
}

const resetForm = () => {
    storeLogin.isfelseFu('1')
}
</script>
<style lang="scss" scoped></style>    