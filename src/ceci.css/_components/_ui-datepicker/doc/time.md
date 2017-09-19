## 选择日期和时间

```
$('#demo2 .ui-datepicker__selection').daterangepicker({
    timePicker: true,
    timePickerIncrement: 30,
    locale: {
        format: 'MM/DD/YYYY h:mm A',
        applyLabel: '确认',
        cancelLabel: '取消',
        firstDay : 1,
        daysOfWeek: [
            "天",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六"
        ],
    },
    buttonClasses: 'ui-button ui-button',
    applyClass: 'ui-button__main',
    cancelClass: 'ui-button__default'
})
```
