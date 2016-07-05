   //本题思路：
  //1.首先要获取设定时间值。并计算一共是多少毫秒
  //2.获取当前的时间，并计算一共是多少毫秒，
  //3.按题意来算值
window.onload = function()
{
   $("timeText").value = "2016-12-21";//初始化
}
function clickMe()
{
    time= $("timeText").value.match(/(^\d{4})-(\d{2})-(\d{2}$)/);
        if(time != null )
        { 
            var setTime = new Date(time[1],time[2]-1,time[3]);//获取设定时间
            var nowTime = new Date();//获取当前的时间值
            var time1 = setTime.getTime();
            var time2 = nowTime.getTime();

            var differTime = parseInt((time1-time2)/1000);//计算当前时间与设定的时间差多少
            var d = parseInt(differTime/(60*60*24));//天
            var h = parseInt(differTime/(60*60)%24);//小时
            var m = parseInt(differTime/60%60);//分钟
            var s = parseInt(differTime%60);//秒
            
            $("showdiffer").innerHTML = "距离"+time[1]+"年"+time[2]+"月"+time[3]+"日，还有"+d+"天"+h+"小时"+m+"分钟"+s+"秒。"
            setTimeout(clickMe,1000);
            if((time1 - time2) <= 0)
            {
              clearTimeout(clickMe);
              $("showdiffer").innerHTML = "时间到了！";
    
            }
        }
  }
   