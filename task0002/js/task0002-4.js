// 本题思路：
// 1.要对文本框进行监听,进行模糊匹配
// 2.要有键盘事件(上下)
// 3.按enter输入
window.onload = function()
{
    var arr = ['a', 'abandon', 'abdomen', 'abide', 'ability', 'able', 'abnormal', 'aboard', 'abolish', 'abound', 'about', 'above', 'fiction', 'field', 'fierce', 'fight', 'test2', 'test3'];
    var input = $("input");
    var ul = $("list");

    inputEvent();//对数据处理
    clickLi();//鼠标事件
    keydownLi();//键盘事件

// 对兼容性的处理:
// onInput:FF,chrome,Opera,Safari
// handleInput:IE
    function inputEvent()//监听input
    {
       if (input.addEventListener) 
        {
            input.addEventListener("input",onInput);
        }
        else if (input.attachEvent)
        {
            input.attachEvent("onpropertychange",handleInput);
        };
    }

    function onInput (ev) 
    {
       var inputValue = ev.target.value;
       Input(inputValue);
    }
    function handleInput(ev)
    {
        var inputValue = "";
        if (ev.propertyName.toLowerCase() === "value")
        {
            inputValue = ev.srcElement.value;
            Input(inputValue);
        }
    }

    function Input (inputValue) //对input的数据处理
    {
        var sameBeginValue = new RegExp("^" + inputValue ,"i");
        var listStr = "";
        if (inputValue === "") 
        {
            ul.style.display = "none";
        }
        else
        {
            for (var i = 0; i < arr.length; i++) {
               if(arr[i].match(sameBeginValue))
               {
                   console.log(arr[i]);
                   listStr +="<li><span>" + inputValue + "</span>" + arr[i].substr(inputValue.length) + "</li>";    
               }
            }
            ul.innerHTML = listStr;
            ul.style.display = "block";
        }
    }
    function clickLi () 
    {
        delegateEvent(ul,"li","mouseover",function(){
            addClass(this,"active");
        });
        delegateEvent(ul,"li","mouseout",function(){
            removeClass(this,"active");
        });
        delegateEvent(ul,"li","click",function(){
            input.value = deleteSpan(this.innerHTML);
            ul.style.display = "none";
        });
    }
    function deleteSpan(value) //删除li下的span
    {
       var sameBeginValue =  /^<span>(\w+)<\/span>(\w+)$/;
       var arrstr = value.match(sameBeginValue);
       return arrstr[1] +arrstr[2];
    }
    function keydownLi()
    {   
        addEvent(input,"keydown",function(ev) 
        {
            var lis = ul.getElementsByTagName("li");
                console.log(arr.length);
            var heightLi = getElementsByClassName("active")[0];//这是一个数组，注意用时不能直接用，后面要加一个【0】
            if (ev.keyCode == 40)//keyup 
                {
                   if (heightLi) 
                    {
                        var nextLi = heightLi.nextSibling;
                        if (nextLi) 
                            {
                                removeClass(heightLi,"active");
                                addClass(nextLi,"active")
                            }
                    }  
                    else
                    {
                        console.log("1");
                        addClass($("li"),"active");
                    }
                }
            else if (ev.keyCode == 38) //keydown
                {
                    if (heightLi) 
                        {
                            var preLi = heightLi.previousSibling;
                           
                            if (preLi) 
                                {
                                    removeClass(heightLi,"active");
                                    addClass(preLi,"active");
                                }
                        }
                    else
                    {
                        addClass(lis[2],"active");
                        var preLi = lis[2].previousSibling;
                        addClass(preLi,"active");
                        removeClass(lis[2],"active");
                    }
                }
            else if (ev.keyCode == 13) //enter
                {
                   if (heightLi) 
                    {
                        input.value = deleteSpan(heightLi.innerHTML);
                        ul.style.display = "none";
                    }
                }
        })
    }

}