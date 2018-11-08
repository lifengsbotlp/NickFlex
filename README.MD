# NickFlex--简单易用的移动布局适配方案
1. [安装](#安装)
2. [使用](#使用)
3. [配置设计稿尺寸](#配置设计稿尺寸)
4. [大屏下也想显示手机尺寸](#大屏下也想显示手机尺寸)
5. [fixed固定定位问题](#fixed固定定位问题)
## 先说说这个适配方案解决了什么问题
1. 0成本享受移动端开发适配，与开发PC一样
2. 不需要使用rem单位，按设计稿上的尺寸写就可以了
3. 不会出现1像素的问题，没有rem也就不会有计算后小数的产生
4. 不需要2x 3x图，因为这个方案是将750的设计稿按比例缩小到了375，缩小不模糊，除非最大显示的宽度超过750
> 画重点！使用这个之后设计稿上是20px你就写20px！跟开发pc是一样的！！！  
> 画重点！使用这个之后设计稿上是20px你就写20px！跟开发pc是一样的！！！  
> 画重点！使用这个之后设计稿上是20px你就写20px！跟开发pc是一样的！！！  
## 安装
使用npm或cnpm安装
```js
    //npm安装
    npm install  nick-flex
    //cnpm安装
    cnpm install nick-flex
```
如果不使用npm或cnpm传统的方式直接下载NickFlex.js
使用传统的script标签引入也可以
```html
    <script src="NickFlex.js"></script>
```
## 使用
npm安装的方式
```js
    const NickFlex = require('nick-flex');
```
如果是script引入的方式NickFlex就已经是全局类了不需要额外做什么  
需要es5版本的请使用index.es5.js或者自行将index.js使用babel转换成es5
```js
    //一句话就可以了
    new NickFlex();
```
## 配置设计稿尺寸
1. 默认设计稿尺寸是750，这个值是可以配置的
2. 如果您的设计稿尺寸不是750的那么一定要配置自己的设计稿尺寸！！！否则比例就会出问题！！！
3. 假如您的设计稿是640则可以按如下参数进行配置，当然也可以是任意数值
```js
    new NickFlex({width:640})
```
## 大屏下也想显示手机尺寸
1.  有的时候是不是想在PAD或者PC下以手机的宽度展示？
2.  iphone6~8的尺寸是375 plus的是414，而ipad是768
3.  默认最大宽度是500，在ipad及pc下会以500宽度居中显示
4.  假如您希望大屏下最大显示宽度为600可以按如下配置
```js
    new NickFlex({maxWidth:600})
```
如果你即需要配置设计稿尺寸又需要设置最大显示宽度则可以如下
```js
    new NickFlex({width:640,maxWidth:600})
```
## fixed固定定位问题
由于对html根节点进行了transform scale导致固定定位显示异常  
解决方案必然有的，这个问题触发主要是固定定位然后使用bottom时才会发现
1. 将非fixed定位的元素在body下用div包起来
2. 给这个div设置height:100%;overflow:auto;
3. 把需要固定定位的元素直接放在body下即可
4. body的高度已经自动被设置成100%了
代码结构如下
```html
    <style>
        .wrapper{
            height:100%;
            overflow:auto;
            -webkit-overflow-scrolling: touch;
        }
        .fixed{
            position:fixed;
        }
    </style>
    <body>
        <div class="wrapper">
            <!--- 所有内容放在这个容器即可 -->
        </div>
        <!--需要固定定位的元素只要是body的子级即可 -->
        <div class="fixed"></div>
    </body>
```
**事实上当wrapper设置高100% 溢出auto的时候，body子下级的fixed使用绝对定位也是一样的效果**




