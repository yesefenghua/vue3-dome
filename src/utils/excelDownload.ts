export  function  download  (data: any, dataTiele: any, name = '表单') {
    const a = document.createElement('a')
    let dataType = "\uFEFF"; //解决乱码问题
    dataType += (dataTiele.join(','));  //添加表格的头
    dataType += '\n';
    data.forEach((v: any) => {
        // 此次可以传承调整数据顺序
        // v = { id: v.id, name: decodeURIComponent(v.name), age: v.age }
        dataType += (Object.values(v).join(','));
        dataType += '\n';
    })
    let t4 = new Blob([dataType], {
        type: 'text/csv'
    });
    a.href = URL.createObjectURL(t4)
    a.setAttribute('download', name + '.xls')
    a.click()
}
 