  function $ (id) {
    return document.getElementById(id);
  }
function getClassName (oparent,className) {
  var oelement=oparent.getElementsByTagName('*');
  var oclassname=[];
  for (var i = 0; i < oelement.length; i++) {
    if(oelement[i].className==className){
      oclassname.push(oelement[i])
    }
  }
  return oclassname;
}
  // 判断arr是否为一个数组，返回一个bool值
  function isArray(arr) 
  {
      return Object.prototype.toString.call(arr) ==='[Object Array]';
  }


  // 判断fn是否为一个函数，返回一个bool值
  function isFunction(fn)
  {
  	//typeof/instanceof 用于判断Function、String、Number、Undefined等可以，但不能判断Array
       Object.prototype.toString.call(fn) === '[Object Array]';//这个可以用来判断各个类型的，非常好用
  }


  // 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
  // 本题思路：
    // 1.判断当前属性是否是引用类型，还是值类型，基础类型
    // 2.枚举对象里的属性
    // 3.使用hasOwnProperty()方法，来排除继承属性
    // 4.给新的对象相应位置赋值，若当前属性为引用类型（数组或是对象）递归本方法，知道内部的值类型
    // 5.返回新的对象
  function cloneObject(src)
  {
  	var clone;
  	//先判断这个src是不一个对象，如果是就进一步判断这个是不一个Date对象，还是一个Array对象
  	if(typeof(src)=="object")
    {
    		if (Object.prototype.toString.call(src)==='[Object Date]')
        {//判断这个是不一个Date对象
    			clone=src;
    		}
        else
        {
        		if (Object.prototype.toString.call(src)==='[Object Array]')
            {
            //这个是不一个数组对象,如果是就就是初始化一下这个值，如果不是就给它初始化一个函数对象
        		//因为function，Array是引用类型不能直接用，他只给我们提供一个指针的作用，我们要顺藤上去自己去找，可以用(for in)来找，直接返回一个 
        			clone=[];
        		}	
        		else
            {
        			clone={};
        		}
        }
      	for(var i in src)
        {
      		 if (src.hasOwnProperty(i)) 
           {//用来排除继承属性
        				if ( typeof src[i]=='object') 
                {
        					clone[i]=cloneObject(src[i]);
        				}
        				else
                {
        					clone[i]=src[i];
        				}
      		 }
  		  }
  	}
  	else
    {
  		  clone=src;
  	}
  return clone;
  }



  // 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
  // 本题思路：
     // 1.创建一个新数组用于存放去重组的数据
     // 2.遍历原数组，
     // 3.与新数组比较没有则push()进去
     // 4.返回新数组
     //indexOf()方法用于返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
  function uniqArray(arr)
  {
      var newarray=[];
      for(var i in arr)
      {
         	if (newarray.indexOf(arr[i])==-1)
          {
         		newarray.push(arr[i]);
         	}
      }
     return newarray;
  }



  // 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
  // 尝试使用一行简洁的正则表达式完成该题目
   // 本题思路：
    // ^：匹配字符串的开头，在多行检索中，匹配一行的开头。
    // $：匹配字符串的结尾，在多行检索中，匹配一行的结尾。
    // |：选择，匹配的是该符号左边的子表达式或右边的子表达式。
    // \s：任何 Unicode 空白符。
    //  g：执行一个全局匹配，简言之，即找到所有匹配，而不是找到第一个之后就停止。
  function trim(str)
  {
      return str.replace(/^\s+|\s+$/g,"");
  }

  // 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
  function each(arr, fn) 
  {
      for(var i in arr)
      {
     	    fn(arr[i],i);
      }
  }

// 其中fn函数可以接受两个参数：item和index
  function fn(item,index)
  {
  	  console.log(item+":"+index);
  }

  // 判断是否为邮箱地址
  function isEmail(emailStr)
  {
      // your implement
  }

  // 判断是否为手机号
  function isMobilePhone(phone) 
  {
      // your implement
  }

  //Dom
  // 为element增加一个样式名为newClassName的新样式
  //本题思路：
    //1.先要获取原始的classname
    //2.要判断是否为空，要是为空则直接就加上newCLassName;要是不为空，要先添加一个空格，再加上newClassName  
  function addClass(element, newClassName) {
    var oldClassName = element.className; //获取旧的样式类
    element.className = oldClassName === "" ? newClassName : oldClassName + " " + newClassName;
}

// 移除element中的样式oldClassName
// //本题思路：
      //1.先要获取原始的className；
      //2.用动态的正则来匹配要移除的oldClassName;
      //3.把oldClassName用空字符串替换。
function removeClass(element, oldClassName) {
    var originClassName = element.className; //获取原先的样式类
    var pattern = new RegExp("\\b" + oldClassName + "\\b"); //使用构造函数构造动态的正则表达式
    element.className = trim(originClassName.replace(pattern, ''));
}
  // 移除element中的样式oldClassName
  // function removeClass(element, oldClassName)
  // { 
  //     var oldName = element.className;
  //     var x = new RegExp("\\b"+ oldName+"\\b");
  //     element.className = oldName.replace(x,"");
  // }

  function getElementsByClassName(n)
  {
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ )
   {
       if (allElements[i].className == n ) {
           classElements[classElements.length] = allElements[i];
        }
   }
   return classElements;
}

  // 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
  //本题思路：
    //1.判断siblingNode和element的父元素是否同一个
  function isSiblingNode(element, siblingNode)
  {
      return siblingNode.parentNode=element.parentNode;
  }



  // 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
  //本题思路：
    //1.使用getBoundingClientRect()方法获取当前元素相对于可视区域的位置，再加上混动跳的位置
    //2.关于滚动条的位置scrollTop，scrollLeft这两个属性的使用，各个的浏览器还不一样
  function getPosition(element) 
  {
    	var pos={};
    	pos.x=element.getBoundingClientRect().left+Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
    	pos.y=element.getBOundingClientRect().top+Math.max(document.documentElement.scrollTop,document.body.scrollTop);
    	return pos;
  }


  // 给一个element绑定一个针对event事件的响应，响应函数为listener
  function addEvent(element, event, listener)
  {

      if (element.addEventListener)
      {
      	  element.addEventListener(event,listener)
      }
      else if(element.attachEvent)
      {
      	  element.attachEvent("on"+event,listener);
      }
  }



  // 移除element对象对于event事件发生时执行listener的响应
  function removeEvent(element, event, listener)
  {
     if (element.removeEventLister)
     {
     	    element.removeEventLister(event,listener);
     }
     else if(element.detachEvent)
     {
     	    element.detachEvent("on"+event,listener);
     }
  }

  // 实现对click事件的绑定
  function addClickEvent(element, listener)
  {
      addEvent(element,"click",listener);
  }

  // 实现对于按Enter键时的事件绑定
  function addEnterEvent(element, listener)
  {
      addEvent(element,"keydown",function(event)
      {
        	if (event.keyCode == 13)
          {
        		listener();
        	}
      })

  }
  // JS和$相对应
  // addEvent(element, event, listener) -> $.on(element, event, listener);
  // removeEvent(element, event, listener) -> $.un(element, event, listener);
  // addClickEvent(element, listener) -> $.click(element, listener);
  // addEnterEvent(element, listener) -> $.enter(element, listener);
  // 我们需要对一个列表里所有的<li>增加点击事件的监听
  function delegateEvent(element, tag, eventName, listener)
  {
      addEvent(element,eventName,function(event)
      {
          var target=event.target||event.srcElement;
          if (target.tagName.toLowerCase() == tag.toLowerCase())
          {
           	  listener.call(target,event);
          }
      })
  }

$.on = function(selector, event, listener) 
{
    addEvent($(selector), event, listener);
};
$.click = function(selector, listener)
{
    addClickEvent($(selector), listener);
};
$.un = function(selector, event, listener) 
{
    removeEvent($(selector), event, listener);
};
$.delegate = function(selector, tag, event, listener) 
{
    delegateEvent($(selector), tag, event, listener);
};

  //Bom
  // 判断是否为IE浏览器，返回-1或者版本号
  function isIE()
  {
    	var s=navigator.userAgent.toLowerCase();
      var ie=s.match(/rv:([\d.]+)/) || s.match(/msie ([\d.]+)/);
      return ie?navigator.appVersion:-1
  }


  // 设置cookie
  function setCookie(cookieName, cookieValue, expiredays)
  {
      var exdate=new Date();
      exdate.setDate(exdate.getDate()+expiredays);
      document.cookie=cookieName+"="+escape(cookieValue)+((expiredays==null)? "" :";expires="+exdate.toGMTString());
  }


  // 获取cookie值
  function getCookie(cookieName)
  {
      if (document.cookie.length>0)
      {
          cookie_start=document.cookie.indexOf(cookieName+"=");
          if (cookie_start!=-1) 
           {
              cookie_start=cookie_start+cookieName.length+1;
              cookie_end=document.cookie.indexOf(";",cookie_start);
              if (cookie_end==-1)
              {
                  cookie_end=document.cookie.length;
                  return unescape(document.cookie.substring(cookie_start,cookie_end));
              }
           }
      }
      return "";
  }

  function ajax(url, options) {

    var dataResult; //结果data

    // 处理data
    if (typeof(options.data) === 'object') {
        var str = '';
        for (var c in options.data) {
            str = str + c + '=' + options.data[c] + '&';
        }
        dataResult = str.substring(0, str.length - 1);
    }

    // 处理type
    options.type = options.type || 'GET';

    //获取XMLHttpRequest对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new 

ActiveXObject('Microsoft.XMLHTTP');

    // 发送请求
    xhr.open(options.type, url);
    if (options.type == 'GET')
     {
        xhr.send(null);
    } else
     {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(dataResult);
    }

    // readyState
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                if (options.onsuccess) {
                    options.onsuccess(xhr.responseText, xhr.responseXML);
                }
            } else {
                if (options.onfail) {
                    options.onfail();
                }
            }
        }
    };
}

// 使用示例：
// ajax(
//     'http://localhost:8080/server/ajaxtest', {
//         data: {
//             name: 'simon',
//             password: '123456'
//         },
//         onsuccess: function(responseText, xhr) {
//             console.log(responseText);
//         }
//     }
// );　