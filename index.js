export default function(dom, option) {
  function render(){
    const minGap = option.minGap ? option.minGap : 20; // 最小间距，让每一列的最小空隙可以自定义，避免太过拥挤的情况发生。但是，会通过计算得到真实的间距。
    const itemWidth = option.itemWidth ? option.itemWidth : 300; // 每一项的宽度，即当前每一个图片容器的宽度。保证每一列都是等宽不等高的。
    const pageWidth = option.pageWidth ? option.pageWidth : dom.offsetWidth;
    const column = Math.floor(pageWidth / (itemWidth + minGap)); // 实际列数=页面宽度/(图片宽度+最小间距)
    const gap = (pageWidth - itemWidth * column) / column / 2; // 计算真实间距 = (页面宽度- 图片宽度*实际列数)/实际列数/2
    const items = dom.children; // 获取所有的元素
    const heightArr = []; // 定义一个空数组，保存最低高度。
    dom.style.position = 'relative'
  
    function randomColor() {
      var color = "rgb(";
      for (var i = 0; i < 3; i++) color += parseInt(Math.random() * 256) + ",";
      //去除最后一个逗号
      // color=color.slice(0,-1)
      color = color.substring(0, color.length - 1) + ")";
      return color;
    }
    for (let i = 0; i < items.length; i++) {
      // 遍历所有的外层容器
      const height = items[i].offsetHeight;
      // 如果当前处在第一行
      if (i < column) {
        // 直接设置元素距离上部的位置和距离左边的距离。
        items[i].style.cssText = `position:absolute;;top: ${gap}px;height:${height}px;width:${itemWidth}px;left: ${(itemWidth + gap) * i + gap}px;background:${option.isBackColor?randomColor():''};`;
        // 保存当前元素的高度。
        heightArr.push(height);
      } else {
        // 不是第一行的话，就进行比对。
        let minHeight = heightArr[0]; // 先保存第一项的高度
        let minIndex = 0; // 保存第一项的索引值
        for (let j = 0; j < heightArr.length; j++) {
          // 通过循环遍历比对，拿到最小值和最小值的索引。
          if (minHeight > heightArr[j]) {
            minHeight = heightArr[j];
            minIndex = j;
          }
        }
        // 通过最小值为当前元素设置top值，通过索引为当前元素设置left值。
        items[i].style.cssText = `position:absolute;top: ${minHeight + gap *2}px;height:${height}px;width:${itemWidth}px; left: ${(itemWidth + gap) * minIndex + gap}px;background:${option.isBackColor?randomColor():''};`;
        // 并修改当前索引的高度为当前元素的高度
        heightArr[minIndex] = minHeight + gap + height;
      }
    }
  }
  render()
  window.onresize=function(){
    render()

  }
}
