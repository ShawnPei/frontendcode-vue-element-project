<script lang="ts" setup>
import {
    Check,
    Delete,
    Edit,
    Message,
    Search,
    Star,
} from '@element-plus/icons-vue'
</script>

<template>
    <el-row class="mb-4">
        <el-button>默认</el-button>
        <el-button type="primary" disabled>编辑</el-button>
        <el-button type="success" loading>查看</el-button>

    </el-row>

    <el-row class="mb-4">
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
    </el-row>
</template>
  
