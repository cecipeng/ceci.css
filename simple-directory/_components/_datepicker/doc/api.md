## API

datepicker组件直接使用第三方插件`daterangerpicker`，该组件仅提供样式修改，无其他特殊设置，以下api为该插件的option，供参考

option参数如下（不完全）：

| 参数     | 说明           | 类型     | 示例  |
|----------|----------------|----------|---------|
| startDate | 起始时间 | Date object, moment object or string | startDate: '2013-01-01' |
| endDate | 结束时间 | Date object, moment object or string | endDate: '2013-01-01' |
| minDate | 可选最早时间 | Date object, moment object or string | minDate: '2013-01-01' |
| maxDate | 可选最迟时间 | Date object, moment object or string | maxDate: '2013-01-01' |
| timePicker | 是否显示time选择器 | boolean | timePicker: true |
| timePickerIncrement | time选择递增数 | number | timePickerIncrement: 2 |
| timePicker12Hour | 是否12小时制 | boolean | timePicker12Hour: false |
| opens | 显示在元素左边还是右边 | string['left'/'right'] | opens: 'right' |
| singleDatePicker | 是否是单个时间选择器 | boolean | singleDatePicker: false |
| showDropdowns | 年月是否可以通过dropdown快速选择 | boolean | showDropdowns: true |
| parentEl | 将控件放到哪个元素内，默认body | string | parentEl: '#mydiv' |
| applyClass | 定义apply button样式类名 | string | applyClass : 'submitbtn' |
| cancelClass | 定义cancel button样式类名 | string | cancelClass : 'cancelbtn' |
| locale | 定义button和label，日期格式，一周从那天开始 | object | locale : { "firstDay": 1 } |

locale参数如下（不完全）：

| 参数     | 说明           | 类型     | 示例  |
|----------|----------------|----------|---------|
| format | date/time格式 | string | format: 'YYYY-MM-DD' |
| separator | 分隔符 | string | separator : ' to ' |
| applyLabel | apply按钮文字内容 | string | applyLabel : '确认' |
| cancelLabel | cancel按钮文字内容 | string | cancelLabel : '取消' |
| fromLabel | 从标签文字内容 | string | fromLabel : '从' |
| toLabel | 到标签文字内容 | string | toLabel : '到' |
| firstDay | 一周从哪一天开始，0（星期日）到6（星期六），默认值0 | number | firstDay : 1 |
| daysOfWeek | 星期显示文字 | array | daysOfWeek : ['Su','Mo'] |
| monthNames | 月份显示文字 | array | daysOfWeek : ['January','February'] |


函数方法如下：

| 方法     | 说明           |  示例  |
|----------|----------------|---------|
| setStartDate(Date/moment/string) | 设置起始时间 | $('#daterange').data('daterangepicker').setStartDate('2014-03-01'); |
| setEndDate(Date/moment/string) | 设置结束时间 | $('#daterange').data('daterangepicker').setEndDate('2014-03-31'); |

事件如下：

| 方法     | 说明           |  示例  |
|----------|----------------|---------|
| show.daterangepicker | 当显示日期控件时 | $('#daterange').on('cancel.daterangepicker', function(ev, picker) {}) |
| hide.daterangepicker | 当隐藏日期控件时 | 同上 |
| showCalendar.daterangepicker | 当显示日历控件时 | 同上 |
| hideCalendar.daterangepicker | 当隐藏日历控件时 | 同上 |
| apply.daterangepicker | 当点击apply按钮时 | 同上 |
| cancel.daterangepicker | 当点击cancel按钮时 | 同上 |