/*中间动态效果开始*/
    var box = document.getElementById('box');
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var oNavlist = document.getElementById('nav').children;
    var index = 1; 
    var timer;
    var isMoving = false;
    box.onmouseover = function () {
      animate(left, {
        opacity: 0.6
      })
      animate(right, {
        opacity: 0.6
      })
      clearInterval(timer); 
    }
    box.onmouseout = function () {
      animate(left, {
        opacity: 0
      })
      animate(right, {
        opacity: 0
      })
      timer = setInterval(next, 3000); 
    }
    right.onclick = next;
    left.onclick = prev;

    function next() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index++;
      navmove();
      animate(slider, {
        left: -800 * index
      }, function () {
        if (index == 7) {
          slider.style.left = '-800px';
          index = 1;
        }
        isMoving = false;
      });
    }

    function prev() {
      if (isMoving) {
        return;
      }
      isMoving = true;
      index--;
      navmove();
      animate(slider, {
        left: -800 * index
      }, function () {
        if (index == 0) {
          slider.style.left = '-4000px';
          index = 6;
        }
        isMoving = false;
      });
    }
    for (var i = 0; i < oNavlist.length; i++) {
      oNavlist[i].index = i;
      oNavlist[i].onclick = function () {
        index = this.index + 1;
        navmove();
        animate(slider, {
          left: -800 * index
        });
      }

    }
    function navmove() {
      for (var i = 0; i < oNavlist.length; i++) {
        oNavlist[i].className = "";
      }
      if (index > 6) {
        oNavlist[0].className = "active";
      } else if (index <= 0) {
        oNavlist[5].className = "active";
      } else {
        oNavlist[index - 1].className = "active";
      }
    }
    timer = setInterval(next, 3000);
    function getStyle(obj, attr) { //返回值带有单位px
    	if (obj.currentStyle) {
    		return obj.currentStyle[attr];
    	} else {
    		return getComputedStyle(obj, null)[attr];
    	}
    }

    function animate(obj, json, callback) {
    	clearInterval(obj.timer);
    	obj.timer = setInterval(function () {
    		var flag = true;
    		for (var attr in json) {
    			(function (attr) {
    				if (attr == "opacity") {
    					var now = parseInt(getStyle(obj, attr) * 100);
    					var dest = json[attr] * 100;
    				} else {
    					var now = parseInt(getStyle(obj, attr));
    					var dest = json[attr];
    				}
    				var speed = (dest - now) / 6;
    				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
    				if (now != dest) {
    					flag = false;
    					if (attr == "opacity") {
    						obj.style[attr] = (now + speed) / 100;
    					} else {
    						obj.style[attr] = now + speed + "px";
    					}
    				}
    			})(attr);
    		}
    		if (flag) {
    			clearInterval(obj.timer);
    			callback && callback(); 
    		}
    	}, 30);
    }
/* 中间动态效果结束*/ 
// 右侧充值开始
      var sel = document.getElementById('sel');
        var inp6 = document.getElementById('inp6');
        inp6.innerHTML = sel.children[0].innerHTML;
        sel.onclick = function(){
            for(var i = 0; i < sel.children.length; i++){
                if(this.value == i){
                    inp6.innerHTML = sel.children[i].innerHTML;
                }
            }
        }
// 右侧充值结束
/*右侧动态效果结开始*/
     //ul动起来
        var ul = document.getElementById("ul");
        // console.log(ul.getBoundingClientRect())
        // console.log(ul.offsetHeight)
        // console.log(ul.offsetWidth)
        // console.log(ul.offsetLeft)
        // console.log(ul.offsetTop)

        function show() {
            var top = ul.offsetTop - 1; 
            ul.style.top = top + "px"; 
            if (-1 * ul.offsetTop >= ul.offsetHeight / 1) {
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 10);
        var li = document.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            li[i].onmouseout = function () {           
                t = setInterval(show, 10);
            };
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        } 

/*右侧动态效果结结束*/

// 悬浮框开始
var flo1 = document.getElementById('flo1');
var flo2 = document.getElementById('flo2');

flo1.onmouseover = function(){
    animate(flo1,{right:0,top:82,opacity:100});
}
flo1.onmouseout = function(){
    animate(flo1,{right:-80,top:82,opacity:100});
}
flo2.onmouseover = function(){
    animate(flo2,{right:0,top:191,opacity:100});
}
flo2.onmouseout = function(){
    animate(flo2,{right:-80,top:191,opacity:100});
}

var flo3 = document.getElementById('flo3');
var F8 = document.getElementById('F8');
flo3.onmouseover = function(){
    animate(flo3,{right:0,top:336,opacity:100});
    F8.setAttribute('src',"img/erwei.png");
    F8.style.marginTop = "3px";
}
flo3.onmouseout = function(){
    animate(flo3,{right:-80 ,top:336,opacity:100});
    F8.setAttribute('src',"img/serwei.png");
    F8.style.marginTop = "36px";
}

var flo4 = document.getElementById('flo4');
flo4.onmouseover = function(){
    animate(flo4,{right:0,top:486,opacity:100});
}
flo4.onmouseout = function(){
    animate(flo4,{right:-80,top:486,opacity:100});
}     
// 悬浮框结束