# cecigulp

> 主要使用对象：前端页面重构项目。


## 主要功能

- Tiny压缩图片。
- css优化压缩。（优化冗余代码、代码简写合并、去除最后一个分号、去除空格、去除注释等等）
- sass编译。
- 自动添加opacity，alpha，autoprefixer等兼容性写法：filter、rgb、-webkit。
- 图片转base64。
- 图片自动拼图（sprites）。
- 支持短语写法。
- 检查是否使用不兼容的属性，命令行中提示。
- 美化HTML格式

## 使用

1. install
```
npm install
//或
cnpm install
```

2.start server
```
gulp4
```

3.package
```
//使用无损压缩图片方式打包
gulp4 dist
```
```
//使用Tiny有损压缩图片方式打包
gulp4 dist:tiny
```



## 修改配置

1. 修改文件路径
修改配置：`gulp/config.js`

2. sprites
默认将`images/_sprites`目录下的图片自动拼接，拼接完成后，会在`images/`下生成`sprite.png`，并会删除`images/_sprites`下的文件。

css中直接引用该目录下的图片即可。如目录结构不同，请自行修改`gulp/build.js`,还可以修改拼图方式，如水平排列，垂直排列等等

3. base64
默认将`images/_base64`目录下的图片自动转为base64。如目录结构不同，请自行修改gulp`gulp/build.js`



## 具体使用

`example`下展示了本构建工具特定功能，通过命令启动和打包后，可分别查看`src` `.tmp` `dist`下文件变化

1. sass支持局部变量
以前学sass时，不支持局部变量让人很头疼，定义了一堆全局变量，多人协作中只能把名字命名的很特别，以此避免冲突，现在sass版本支持局部变量了，请看下面示例
```
$color: #aaa;
.a1 {
	$color: #ddd;
	background-color: $color;
}
.a2 {
	background-color: $color;	
}
```
编译后：
```
.a1 {
    background-color: #ddd;
}

.a2 {
    background-color: #aaa;
}
```

2. base64和sprites的使用
只需要将图片放在指定的`_base64`和`_sprites`下即可。如采用Tiny压缩图片，生成的base64也是压缩后再转base64的哦，放心使用
```
.a1 {
	background-image: url("../images/_base64/icon1.png");
}
.a2 {
	background-image: url("../images/_sprites/icon1.png");
}
```
编译后：
```
.a1 {
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAQMAAAC3R49OAAAAA1BMVEUAAACnej3aAAAAAXRSTlOjDzkqNAAAAAtJREFUCNdjoDIAAABQAAGAw7uHAAAAAElFTkSuQmCC");
}

.a2 {
    background-image: url(../images/sprite.png);
    background-position: 0 -94px;
}
```

3. 缩写

（1） position值缩写
```
position: absolute 0 20px;

//编译后
position: absolute;
top: 0;
right: 20px;
bottom: 0;
left: 20px;
```

（2） clearfix
```
clear: fix;

//编译后
content: "";
display: block;
clear: both
```

（3） color
```
color: rgba(#ddd, 0.8);

//编译后
color: rgba(221, 221, 221, 0.8);
```

（4）兼容性写法
```
color: rgba(221, 221, 221, 0.8);

opacity: .8;

display: flex

//编译后
color: #ddd;
color: rgba(221, 221, 221, 0.8);

-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
opacity: 0.8;

display: -webkit-box;
display: -ms-flexbox;
display: flex;
```



## 特别声明

1. 不选择cssnext

国内项目居多，必须考虑兼容性问题，保守起见，技术选型中暂时不选择cssnext。
【不选择cssnext的原因】

- 提供的新语法中，比较有用的变量，现在css已支持自定义属性，且cssnext目前仅支持全局变量；
- 其他语法对目前的实际工作中较为鸡肋，很少用到

2. 移动端可使用css自定义属性
css自定义属性很实用，但IE不兼容！可在移动端使用，但要注意开发的项目是否要支持低端配置机型
简单介绍css自定义属性：
（1）最大的特点是具有动态性，可以在运行时更改。可自己尝试在浏览器打开时仍然显示的是变量，而不是编译后生成的静态值，可以方便的从JS中读/写

（2）类似的一些变量使用都比较局限：

- 编译后是静态的，无法与js互动，只有全局变量（:root）:sass变量、cssnext、postcss-custom-properties（postcss插件）
- 编译后是静态的，无法与js互动，但有局部变量：postcss-css-variables（postcss插件）



【更多功能正在路上...敬请期待】
