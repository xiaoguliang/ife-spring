window.onload = function() 
{
	var imgContain = $("imgContain");//存放图片
	var imgArr = imgContain.getElementsByTagName("img");//获取所有图片
	var imgWidth = imgArr[0].offsetWidth;//图片的宽
	var dotArr = dot.getElementsByTagName("a");//小圆点
	var activeId = 1;//当前ID
	var nextId = 0;//下一个ID
	var clickId = null;//点击小圆点时的ID
	var intervaltime = 3000;//时间
	var timeInner = null;//定时器
	var timer = null;//定时器
	var speed = null;//速度

	for (var i = 0; i < dotArr.length; i++) 
	{
		dotArr[i].index = i + 1;
	}
	function startMove (target) //缓冲运动
	{
		clearInterval(timeInner);
		timeInner = setInterval(function() 
		{    
			console.log(target);
			console.log(imgContain.offsetLeft);
			speed = (target - imgContain.offsetLeft) / 6;//控制速度值
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			imgContain.style.left = imgContain.offsetLeft + speed + "px";
		},30);
	}
	function rotate (clickId) //轮播
	{
	   if (clickId) 
		{
			nextId = clickId;
		}
		else
		{
	        nextId = activeId <= 3 ? activeId + 1 : 1;
		}
		
		removeClass(dotArr[activeId - 1],"active");
		addClass(dotArr[nextId -1],"active");

		startMove("-" + (nextId - 1) * imgWidth);
		activeId = nextId;
	}

	 timer = setInterval(rotate,intervaltime);
	$.delegate("dot", "a", "click", function() 
	{
	    clearInterval(timer);
	    clickId = this.index;
	    console.log(this.index);
	    rotate(clickId);
	    timer = setInterval(rotate, intervaltime);
	});
}



