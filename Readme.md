### 展示效果如下
![avatar](/picture.png)

### js安装
```javascript
npm i zy-waterfall-layout
```
### js引入
```javascript
import waterfall from 'waterfall-layout'
```
### html使用（div实际使用时自动撑起高度）
```html
...
<div style="height:200px;"></div>
<div style="height:190px;"></div>
<div style="height:170px;"></div>
<div style="height:220px;"></div>
<div style="height:180px;"></div>
<div style="height:457px;"></div>
<div style="height:21px;"></div>
<div style="height:240px;"></div>
<div style="height:234px;"></div>
<div style="height:221px;"></div>
<div style="height:54px;"></div>
<div style="height:134px;"></div>
<div style="height:297px;"></div>
<div style="height:187px;"></div>
<div style="height:219px;"></div>
<div style="height:460px;"></div>
<div style="height:187px;"></div>
<div style="height:87px;"></div>
<div style="height:321px;"></div>
<div style="height:213px;"></div>
<div style="height:209px;"></div>
<div style="height:291px;"></div>
<div style="height:187px;"></div>
...
```
### js使用
```javascript
waterfall(document.querySelector('.hello'),{
	minGap:10,//瀑布流元素的间隔
	itemWidth:120,//瀑布流元素的宽度
	pageWidth:0,//容器的宽度，宽度为0默认父容器宽度
	isBackColor:true //随机生成背景颜色
})
```

### 参数详情
| 参数名 | 参数类型   | 备注 
| ----- | --------- | ----------- 
| dom | dom对象 | document.querySelector('.hello')            
| option.minGap  | Number     | 10        
| option.itemWidth  | Number     | 120      
| option.pageWidth  | Number     | 0     
| option.isBackColor  | Boolean     | false
 
