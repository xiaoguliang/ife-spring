// 第一阶段
    var text = document.getElementById('text');//获取文本框
    var button = document.getElementById('button');//获取按钮
    var showdiv = document.getElementById('show');//获取处理后爱好
    var warn = document.getElementById('warn');//红色的错误提示文字
    var normal = document.getElementById('normal');//提示文字消失

function clickMe()
{  
    var content = text.value;//取文本框的内容
    var content = trim(content);//对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等
    var contentArr = content.split(/\n|\s+|,|，|;|；|、/);//允许用户用换行、空格（全角/半角）、逗号（全角/半角）、顿号、分号来作为不同爱好的分隔
    var newcontent = uniqArray(contentArr);//对数组进行去重操作
    var arr=[];//创建一个空数组来存储文本框里的数据
        arr = newcontent;//把处理好后的赋给数组
  

    if(arr.length > 10 ) 
    {//当爱好数量超过10个时
        warn.style.display = "block";//显示红色的错误提示文字
        warn.innerHTML = "最多写十个"
    }
    else if(arr[0] == "")
    {//去除第一个为空情况
        warn.style.display="block";
        warn.innerHTML="最少写一个"
    }
    else if(arr.length === 0)
    {//当输入的爱好数量为零时
        warn.style.display = "block";
        warn.innerHTML = "最少写一个"
    }
    else
    {
        var checkboxStr = "";
        warn.style.display = "none";
        for(var i = 0; i < arr.length; i++) 
        {
                checkboxStr += '<br><input type="checkbox"><label>' + arr[i] + '</label>'; 
        }//爱好输出成为一个checkbox
        console.log(checkboxStr.substr(4));
        showdiv.innerHTML = checkboxStr.substr(4);
        showdiv.style.display = "block";    
        console.log(arr);
    }  
}
