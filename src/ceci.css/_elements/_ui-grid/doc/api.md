## API

| 参数     | 说明           | 添加位置     |
|----------|----------------|----------|
| ui-grid__col-N    | 列宽。一行内col-N总和等于24 | ui-grid__col-N  |
| ui-grid__offset-N    | 偏移量。一行内col-N和offset-N总和等于24 | ui-grid__col-N  |
| ui-grid__gutter    | 边距。三种尺寸：ui-grid__row-gutter-s，ui-grid__row-gutter，ui-grid__row-gutter-l | ui-grid__row  |
| ui-grid__flex    | flex布局模式 | ui-grid__row  |

对齐方式（flex布局模式下有效）

| 参数     | 说明           | 添加位置     |
|----------|----------------|----------|
| ui-grid__flex-start    | 左对齐 | ui-grid__row  |
| ui-grid__flex-center    | 居中齐 | ui-grid__row  |
| ui-grid__flex-end    | 右对齐 | ui-grid__row  |
| ui-grid__flex-top    | 顶部对齐 | ui-grid__row  |
| ui-grid__flex-middle    | 居中齐 | ui-grid__row  |
| ui-grid__flex-bottom    | 底部对齐 | ui-grid__row  |

分布方式（flex布局模式下有效）

| 参数     | 说明           | 添加位置     |
|----------|----------------|----------|
| ui-grid__flex-between    | 左右边缘不留间隔 | ui-grid__row  |
| ui-grid__flex-around    | 左右边缘留间隔 | ui-grid__row  |

响应式布局边界值

| 参数     | 说明           | 添加位置     |
|----------|----------------|----------|
| ui-grid__col-xs-N    | 宽度> 480px | ui-grid__col-N  |
| ui-grid__col-s-N    | 宽度> 768px | ui-grid__col-N  |
| ui-grid__col-m-N    | 宽度> 992px | ui-grid__col-N  |
| ui-grid__col-l-N    | 宽度> 1200px | ui-grid__col-N  |
| ui-grid__col-xl-N    | 宽度> 1600px | ui-grid__col-N  |