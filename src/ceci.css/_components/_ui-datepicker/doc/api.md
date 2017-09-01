## API

datepicker组件直接使用第三方插件`daterangerpicker`，无其他特殊设置，以下api为该插件的option，供参考

option参数如下：

| 参数     | 说明           | 类型     | 示例  |
|----------|----------------|----------|---------|
| startDate | 起始时间 | Date object, moment object or string | startDate: '2013-01-01' |
| endDate | 结束时间 | Date object, moment object or string | endDate: '2013-01-01' |
| minDate | 可选最早时间 | Date object, moment object or string | minDate: '2013-01-01' |
| maxDate | 可选最迟时间 | Date object, moment object or string | maxDate: '2013-01-01' |
| timePicker | 是否显示time选择器 | boolean | timePicker: true |
| timePickerIncrement | time选择递增数 | number | timePicker: true |