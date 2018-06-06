## 基本水平轮播

自己编写的DOM和js脚本   


**使用方式：**          
1.引入`_basic-script.html`           
注意以js格式文件保存，此处为了展示代码用html。可以用外部js文件引入到页面中`<script src="basic-script.js"></script>`              

2.创建实例      
具体参数可见js文件的头部注释
```
var slider1 = new Slider({
    ele : "#carousel1",
    isCSS3: true,
    isturn: true,
    nsnav: true,
    autoPlay: false
});
```           
    
3.引入样式         
如其他组件一样通过conf引入即可

4.DOM结构          
参考下方代码即可