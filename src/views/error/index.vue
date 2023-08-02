<template>
    <div class="not-found-container">
        <h1>404 - 页面未找到</h1>
        <p>很抱歉，您访问的页面不存在。</p>
        <router-link to="/">
            <el-button>返回首页</el-button></router-link>
    </div>
</template>
  
<script>
export default {
    name: "NotFound",
};
</script>
  
<style>
.not-found-container {
    text-align: center;
    margin-top: 100px;
}

h1 {
    font-size: 36px;
    color: #f00;
}

p {
    font-size: 18px;
    margin-bottom: 20px;
}

router-link {
    font-size: 18px;
    color: #00f;
    text-decoration: underline;
}
</style>
  