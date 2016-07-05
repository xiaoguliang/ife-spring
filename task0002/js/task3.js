window.onload = function(){
	var imgCOntain = document.getElementById('imgCOntain');
	var imgArr = imgCOntain.getElementsByTagName("img");
	var dot document.getElementById('dot');
	var dotArr = dot.getElementsByTagName("a");
	var activeID = 1;
	var clickID = null;
	var nextID = null;
	var speed = null;
	var interTime = 1000;

	 for (var i = 0; i < dotArr.length; i++)
	{
		dotArr[i].index = i+1;
	}

  timer = setInterval(rotate,interTime);
  $.delegate("dot", "a", "click", function()
  {
  	clearInterval(timer);
  	clickID = this.index;
  	rotate(clickID);
  	timer = setInterval(rotate(clickID),interTime);
  } 
	function rotate (clickID) {
		if (clickID) 
			{
				nextID = clickID;
			}
			else
			{
                nextID = activeID <= 3 ? activeID+1 : 1;
			}
			removeClass(dotArr[activeID-1],"active");
			addClass(dotArr[nextID-1],"active");

			startMove("-" + (nextID-1) * imgArr[0].offsetWidth);
			activeID = nextID;
	}
	function startMove (target) {
		clearInterval(time);
		time = setInterval(function(){
			speed = (target - imgCOntain.offsetLeft) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			imgCOntain.style.left = imgCOntain.offsetLeft + speed + "px";
		},30);
		

	}
}