## 安装项目

```sh
npm install
```

### 运行项目
#### 运行项目开发环境
```sh
npm run dev
```
#### 运行项目生产环境
```sh
npm run prod
```

### 打包项目

```sh
npm run build
```

### Run Unit Tests with

```sh
npm run test:unit
```
# 课程组件

url---@component/trainingTable/index.vue

## 事件说明

1. TrainingAdd

- 事件说明：新增当天课程事件
- 参数类型：{ date: string, frame: boolean }
- 参数说明: date:选择的日期,frame:弹窗状态返回 ture

2.  TrainingPaste

- 事件说明：粘贴已复制课程事件
- 参数类型：data: string,
- 参数说明: data:选择的日期

3. HandlePaste

- 事件说明：粘贴单个课程事件
- 参数类型：data: string,
- 参数说明: data: 选择的日期

4.  HandleCopy

- 事件说明：复制某个时间点课程事件
- 参数类型：data: string,
- 参数说明: data: 选择的 id

5.  ProjectCopy

- 事件说明：复制单个课程事件
- 参数类型：data: string,
- 参数说明: data: 选择的 id

6.  HandleEdit

- 事件说明：编辑课程事件
- 参数类型：{ data: string, frame: boolean }
- 参数说明: data:id,frame:弹窗状态返回 ture

7.  HandleAdjust

- 事件说明：调整顺序事件
- 参数类型：{ data: string, frame: boolean }
- 参数说明: data:id,frame:弹窗状态返回 ture

8.  HandleDel

- 事件说明：删除某个时间点课程事件
- 参数类型：data: string,
- 参数说明: data: 选择的 id

9.  ProjectDel

- 事件说明：删除单个课程事件
- 参数类型：data: string,
- 参数说明: data: 选择的 id

以上是课程组件的事件说明。每个事件都有对应的事件名称，参数类型和参数说明。使用这些事件，可以在父组件中对课程进行新增、粘贴、复制、编辑、调整顺序和删除等操作。

## 课程组件参数

课程组件接受一个 `data` 参数，该参数是一个包含日期、上午课程、下午课程和晚上课程的数组。

### 参数列表

- `data` (数组): 包含日期、上午课程、下午课程和晚上课程的数组。
  - `date` (string): 日期。
  - `morning` (对象): 上午课程对象，类型为 `course`。
  - `afternoon` (对象): 下午课程对象，类型为 `course`。
  - `evening` (对象): 晚上课程对象，类型为 `course`。

`course` (数组): 类型的参数列表如下：

- `is_star` (boolean): 是否为重点课程。
- `tenant_id` (string): 租户 ID。
- `session_id` (string, 可选): 训练课程 ID。
- `session_time` (string, 可选): 训练时间。
- `descr` (string, 可选): 备注。
- `training_type` (数组, 可选): 训练类型数组。
  - `type` (对象):
    - `type_id` (string): 训练类型 ID。
    - `type_name` (string): 训练类型名称。
    - `type_color` (string, 可选): 训练类型颜色。
  - `load_value` (number, 可选): 负荷值。
  - `load_unit` (对象):
    - `unit_id` (string): 负荷单位 ID。
    - `unit_name` (string): 负荷单位名称。
- `details` (数组, 可选): 训练项目数组。
  - `detail_id` (string): 训练项目 ID。
  - `seq_number` (string): 排序号。
  - `workout_name` (string): 训练项目名称。
  - `load_value` (number): 负荷值。
  - `load_unit` (对象, 可选):
    - `unit_id` (string): 负荷单位 ID。
    - `unit_name` (string): 负荷单位名称。
  - `reps` (string, 可选): 次数。
  - `sets` (string, 可选): 组数。
  - `rest_interval` (string, 可选): 间歇时间(秒)。
  - `pace_time` (string, 可选): 配速时间(秒)。
  - `pace_distance` (string, 可选): 配速距离(米)。
  - `intensity` (string, 可选): 强度(0.1-1.0)，1.0 表示 100% 强度。
  - `duration` (string, 可选): 持续时间（分钟）。

## 课程组件使用示例

```
<script setup lang="ts">
  import training from '@/components/trainingTable/index.vue'

const data = [
  {
    date: '2021-01-01',
    morning: {
      is_star: true,
      tenant_id: '123',
      session_id: '456',
      session_time: '10:00',
      descr: '这是一个重点课程',
      training_type: [
        {
          type: {
            type_id: '1',
            type_name: '类型1',
            type_color: '#ff0000',
          },
          load_value: 10,
          load_unit: {
            unit_id: '1',
            unit_name: 'kg',
          },
        },
      ],
      details: [
        {
          detail_id: '1',
          seq_number: '1',
          workout_name: '训练项目1',
          load_value: 5,
          load_unit: {
            unit_id: '2',
            unit_name: 'lbs',
          },
          reps: '10',
          sets: '3',
          rest_interval: '60',
          pace_time: '30',
          pace_distance: '100',
          intensity: '0.8',
          duration: '30',
        },
      ],
    },
    afternoon: {
      // 下午课程对象
    },
    evening: {
      // 晚上课程对象
    },
  },
]
</script>

<template>
    <training
      :data="data"
      @TrainingPaste="trainingPaste"
      @TrainingAdd="trainingAdd"
      @HandlePaste="handlePaste"
      @HandleCopy="handleCopy"
      @HandleEdit="handleEdit"
      @HandleAdjust="handleAdjust"
      @HandleDel="handleDel"
      @ProjectCopy="projectCopy"
      @ProjectDel="projectDel"
    />
</template>
```