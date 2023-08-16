
<template>
    登录
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm"
        label-position="top">
        <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="账号" />
        </el-form-item>
        <el-form-item prop="pass">
            <el-input v-model="ruleForm.pass" type="password" placeholder="密码" autocomplete="off" />
        </el-form-item>
        <div style="display: flex;align-items: center;  justify-content: space-between;margin-bottom: 10px;">
            <a @click="isfelseFu('3')">
                找回密码
            </a>
            <a @click="isfelseFu('2')">
                注册
            </a>
        </div>
        <el-button type="primary" style="width: 100%;" @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { type FormInstance, type FormRules } from 'element-plus'
import { useStore } from "@/stores/index";
import router from "@/router";
import { login } from "@/api/login/index";
import { useStoreLogin } from "@/stores/components/login";
const storeLogin = useStoreLogin();
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
            login({ user_name: ruleForm.name, password: ruleForm.pass })
                .then((data) => {
                    ElMessage({
                        message: '登录成功',
                        type: 'success',
                    })
                    console.log(data);
                })
                .catch((err) => {
                    ElMessage({
                        message: '登录失败',
                        type: 'error',
                    })
                    console.log(err);
                })
            Store.key({ pass: ruleForm.pass, name: ruleForm.pass })
            router.push('/about')
        }
    })
}


const isfelseFu = (id: string) => {
    storeLogin.isfelseFu(id)
}

</script>
<style lang="scss" scoped></style>    