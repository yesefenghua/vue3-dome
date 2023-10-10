<template>
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">

        <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" autocomplete="off" />
        </el-form-item>
        <el-form-item label="证件号" prop="IDcard">
            <el-input v-model="ruleForm.IDcard" autocomplete="off" />
        </el-form-item>
        <el-form-item label="身份证">
            <el-upload class="upload-demo" ref="uploadRef" drag :auto-upload="false"
                :on-change="(file: any, fileList: any) => changeFile(file, fileList)">
                <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                <div class="el-upload__text">
                    拖动上传 <em>文字</em>
                </div>
                <template #tip>
                    <div class="el-upload__tip">
                        jpg/png files with a size less than 500kb
                    </div>
                </template>
            </el-upload>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
            <el-button @click="resetForm">Reset</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules, UploadInstance, } from 'element-plus'
import { check } from "@/api/dome/index";

const ruleFormRef = ref<FormInstance>()
const name = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入'))
    } else {
        callback()
    }
}
const IDcard = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入'))
    } else {
        callback()
    }
}
const uploadRef = ref<UploadInstance>()
const ruleForm = reactive({
    IDcard: '',
    name: '',
    img: null
})
const files = ref()
const rules = reactive<FormRules<typeof ruleForm>>({
    IDcard: [{ validator: IDcard, trigger: 'blur' }],
    name: [{ validator: name, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            check({ idcard: ruleForm.IDcard, name: ruleForm.name, image: files.value })
                .then((res: any) => {
                    console.log(res)
                })
                .catch((err: any) => {
                    console.log(err)
                })
        } else {
            console.log('error submit!')
            return false
        }
    })
}
const changeFile = async (file: any, fileList: any) => {
    if (file.size / 1024 / 1024 > 3) {
        ElMessage.error('图片大于3MB,请重新上传!')
        uploadRef.value!.clearFiles()
    } else {
        const reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onloadend = await function () {
            // 读取文件的结果
            files.value = reader.result;
        }
    }
}
const resetForm = () => {
    console.log(uploadRef.value);
}



</script>
<style lang="scss" scoped></style>