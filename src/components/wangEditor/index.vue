<template>
    <div :style="{ border: '1px solid #ccc', width: props.width }">
        <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
            :mode="props.mode" />
        <Editor :style="{ height: props.height, overflowY: 'hidden', }" v-model="valueHtml" :defaultConfig="editorConfig"
            :mode="props.mode" @onCreated="handleCreated" />
    </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('')
// 模拟 ajax 异步获取内容
watch(() => valueHtml.value, (newValue, oldValue) => {
    console.log(valueHtml.value);
})
const toolbarConfig = {}
const editorConfig = {
    MENU_CONF: {
        // 图片
        uploadImage: {
            // 使用64编码格式  小于5m则使用
            base64LimitSize: 5 * 1024 * 1024,
            // 自定义上传图片路径
            async customUpload(file: File, insertFn: any) {  // TS 语法
                // async customUpload(file, insertFn) {                   // JS 语法
                // file 即选中的文件
                // 自己实现上传，并得到图片 url alt href
                // 最后插入图片
                insertFn(file, 'alt')
            }
        },
        // 视频 
        uploadVideo: {
            async customUpload(file: File, insertFn: any) {
                // file 即选中的文件
                // 自己实现上传，并得到视频 url poster
                console.log('URL.createObjectURL(file);', URL.createObjectURL(new Blob([file], { type: "video/mp4" })));
                // file 即选中的文件
                // 自己实现上传，并得到视频 url poster
                // 最后插入视频
                // insertFn(URL.createObjectURL(file))
            }
        }
    },
    placeholder: '请输入内容...'
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要！
    console.log(editor.getAllMenuKeys());

}
const props = withDefaults(
    defineProps<{
        mode?: string
        height?: string
        width?: string
    }>(),
    {
        mode: 'default', // simple 简洁模式 default 默认模式
        height: '400px',
        width: '100%',
    },
)

</script>

<style scoped></style>