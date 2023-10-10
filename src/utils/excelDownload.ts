/**
* 下载数据为CSV文件
* @param data 数据数组
* @param dataTitle 数据表头数组
* @param name 文件名，默认为"表单"
* @param dataOrder 数据顺序数组，默认为原始顺序
*/
export function download(data: any[], dataTitle: string[], name?: '表单', dataOrder?: number[]) {
  // 调整数据顺序
  const orderedData = dataOrder ? dataOrder.map(index => data[index]) : data;
  // 生成CSV内容
  const csvContent = '\uFEFF' + dataTitle.join(',') + '\n' + orderedData.map(v => Object.values(v).join(',')).join('\n');
  // 创建Blob对象
  const blob = new Blob([csvContent], { type: 'text/csv' });
  // 创建下载链接
  const url = URL.createObjectURL(blob);
  // 创建下载链接的元素
  const link = document.createElement('a');
  // 设置链接的URL和下载属性
  link.href = url;
  link.setAttribute('download', name + '.csv');
  // 模拟点击下载链接
  link.click();
  // 释放URL对象
  URL.revokeObjectURL(url);
}
