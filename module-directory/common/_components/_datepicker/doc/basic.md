## 基本

`.ui-datepicker__selection`可以是任意内容，以下使用input组件为例。datepicker组件内的按钮也可直接使用button组件的类名。可在js中配置类名如下

```
$('#demo1 .ui-datepicker__selection').daterangepicker({
    buttonClasses: 'ui-button ui-button',
    applyClass: 'ui-button__main',
    cancelClass: 'ui-button__default'
})
```
