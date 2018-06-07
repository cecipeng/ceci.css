## 使用swiper插件

基于swiper插件


**使用方式：**          
1.引入样式     
```
<link rel="stylesheet" href="../../scripts/swiper/swiper-4.1.6.min.css">
```                   
              

2.引入脚本    
```
<script src="../../scripts/swiper/swiper-4.1.6.min.js"></script>
```           
    
3.初始化swiper       
```
var mySwiper = new Swiper ('#carousel3 .swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
})   
```

4.DOM结构          
参考下方代码即可