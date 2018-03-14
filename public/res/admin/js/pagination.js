/**
 * Created by user on 2016/9/27.
 */
$(function(){
    // 提示信息
    var lang = {
        "sProcessing": "处理数据中...",
        "sLengthMenu": "每页 _MENU_ 项",
        "sZeroRecords": "没有匹配结果",
        "sInfo": "当前显示第 _START_ 至 _END_ 项，共 _TOTAL_ 项。",
        "sInfoEmpty": "当前显示第 0 至 0 项， 共 0 项",
        "sInfoFiltered": "(由 _MAX_ 项结果过滤)",
        "sInfoPostFix": "",
        "sSearch": "搜索:",
        "sUrl": "",
        "sEmptyTable": "表中数据为空",
        "sLoadingRecords": "载入中...",
        "sInfoThousands": ",",
        "oPaginate":{
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页",
            "sJump": "跳转"
        },
        "oAria": {
            "sSortAscending": "升序排列",
            "sSortDescending": "降序排列"
        }
    };

    // 初始化表格
    var table = $("#data-form_table").dataTable({
        language: lang, // 提示信息
        autoWidth: false,   // 禁用自动调整列宽
        stripeClasses: ["odd", "even"], // 为奇偶行加上样式，兼容不支持css伪类的场合
        processing: true,   // 隐藏加载提示，自行处理
        serverSide: true,   // 启用服务端分页
        searching: false,   // 禁用原生搜索
        orderMulti: false,  // 启用多列排序
        order: [],          // 取消默认排序查询，否则复选框一列会出现小箭头
        renderer: "bootstrap",  // 渲染样式：bootstrap和jquery-ui
        pagingType: "simple_numbers",   // 分页样式：simple,simple_numbers,full,full_numbers
        columnDefs: [{
            "targets": 'nosort',    // 列的样式名
            "orderable": false      // 包含上样式名‘nosort'的禁止排序
        }],
        ajax: function(data, callback, settings){
            // 封装请求参数
            var param = {};
            param.limit = data.count;  // 页面显示记录条数，在页面显示每页显示多少项的时候
            param.start = data.start;   // 开始的记录序号
            param.page = data.page;      // 当前页码
            // console.log(param);
            // ajax请求数据
            $.ajax({
                type: "GET",
                cache: false,
                url: "/hello/list",
                dataType: 'json',
                data: param,
                success: function(){

                },
                error: function(){

                }
            });
        },
        // 列表表头字段
        columns: [

        ]
    }).api();
    // 此处需调用api()方法，否则返回的是jquery对象而不是dataTables的api对象
});


