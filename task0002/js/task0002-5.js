window.onload = function () {
	var dragArr = getElementsByClassName("drag");
  var leftDiv = $("leftBox").getElementsByTagName("div");
  var rightDiv = $("rightBox").getElementsByTagName("div");
	
  initPosition(leftDiv);
  initPosition(rightDiv);
  $.delegate("leftBox", "div", "mousedown", drag);
  $.delegate("rightBox", "div", "mousedown", drag);
}
function initPosition(arr)//初始化坐标
{
  for (var i = 0; i < arr.length; i++) 
  {
    arr[i].style.top = 60 * i + "px";
  };
}

function outOfSreen(x,y,e)//判断是否越过屏幕
{
    var maxW = document.documentElement.clientWidth;
    var maxH = document.documentElement.clientHeight;
    return e.clientX <= 0 || e.clientX >= maxW || e.clientY <= 0 || e.clientY >= maxH;
}

function judgeDiv(x, y, block) //判断是否在区域内
{
    var x0 = getPosition(block).x;
    var x1 = getPosition(block).x + block.offsetWidth;
    var y0 = getPosition(block).y;
    var y1 = getPosition(block).y + block.offsetHeight;
    return x > x0 && x < x1 && y > y0 && y < y1; 
}

function drag(ev)//拖曳
{
 var z = 1; 
 var rightLeft = $("rightBox").offsetLeft;
 var leftLeft = $("leftBox").offsetLeft;
 var leftDiv = $("leftBox").getElementsByTagName("div");
 var rightDiv = $("rightBox").getElementsByTagName("div");
 var dragBox = document.getElementById("dragBox");

 var ev = ev || window.event;
 var target = ev.target || ev.srcElement;
 if (target.className.toLowerCase() != "drag")
  {return;}

   var disX = ev.clientX;//鼠标位置
   var disY = ev.clientY; 
   console.log("disX:"+disX);
   console.log("disY:"+disY);

   var divLeft = target.offsetLeft;//被点击的小的div当前位置
   var divTop = target.offsetTop;
   console.log("divLeft:"+divLeft);
   console.log("divTop:"+divTop);

   target.style.opacity = 0.5;

   //target.style.zIndex = z++;//设置z-index值;

   var divParent = target.parentNode;//获取小的div的父元素
   var flag = true;

    document.onmousemove = function(e) {//鼠标移动
        if (flag) 
        {
            divParent.removeChild(target);
            $("dragBox").appendChild(target);
        }
        flag= false;
        var ev = e || window.event;

        if (outOfSreen(ev.clientX, ev.clientY, ev))
         {
            target.parentNode.removeChild(target);
            divParent.appendChild(target);
            if (divParent.className.search("left-block") != -1) 
            {
                target.style.left = 1 + "px";
            }
            else if (divParent.className.search("right-block") != -1) 
            {
                target.style.left = rightLeft + 1 + "px";
            }
            initPosition(divParent);
            document.onmousemove = null;
        } 
        else 
        {
            //move
            target.style.left = divLeft + ev.clientX - disX + "px";
            target.style.top = divTop + ev.clientY - disY + "px";
            initPosition(parent);
        }
    }
    document.onmouseup = function(ev)//鼠标松开
    {
       document.onmousemove = null;
       document.onmouseup = null;

       target.style.opacity = 1;

       var ev = ev || window.event;
       target.parentNode.removeChild(target);
       console.log("target.style.left:"+target.style.left);
       if (judgeDiv(ev.clientX,ev.clientY ,$("leftBox"))) 
        {
            $("leftBox").appendChild(target);
            target.style.left = 1 + "px";
            initPosition(leftDiv);
        }
        else if(judgeDiv(ev.clientX,ev.clientY,$("rightBox")))
        {
             $("rightBox").appendChild(target);
             target.style.left = rightLeft  + 1 + "px";
             initPosition(rightDiv);
        }

        else
        {
            divParent.appendChild(target);
            if (divParent.className.search("leftBox") != -1) 
              {
                target.style.left = 1 + "px";
              }
            else if(divParent.className.search("rightBox") != -1)
              {
                target.style.left = rightLeft + 1 +"px";
              }
              initPosition(divParent);
        }
    }
 return false;
}