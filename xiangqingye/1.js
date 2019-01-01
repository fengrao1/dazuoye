// 放大镜开始
var B1 = document.getElementById('B1');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var big = document.getElementById('big');
var Img = document.getElementById('Img');

img1.onmouseover = function () {
    big.style.display = 'block';
    img2.style.display = 'block';
}
img1.onmouseout = function () {
    big.style.display = 'none';
    img2.style.display = 'none';
}
img1.onmousemove = function (ev) {
    var ev = ev || window.event;

    var oL = ev.clientX - B1.offsetLeft - big.offsetWidth / 2;
    var oT = ev.clientY - B1.offsetTop - big.offsetHeight / 2;

    var oMaxw = img1.offsetWidth - big.offsetWidth;
    var oMaxh = img1.offsetHeight - big.offsetHeight;
    oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
    oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;
    big.style.left = oL + 'px';
    big.style.top = oT + 'px';
    var scale = img2.offsetWidth / big.offsetWidth;
    Img.style.left = -scale * oL +22 + 'px'
    Img.style.top = -scale * oT +22 + 'px'
}
// 点击显示
var B21 = document.getElementById('B21');
var B22 = document.getElementById('B22');
var B23 = document.getElementById('B23');
var B24 = document.getElementById('B24');
var B11 = document.getElementById('B11');

B22.onmouseover = function(){
	B22.style.border = "1px solid #ff9003";
	B23.style.border = "1px solid #ffffff";
	B11.src = "img/pp0.jpeg";
	Img.src = "img/pp0.jpeg";
}
B23.onmouseover = function(){
	B23.style.border = "1px solid #ff9003";
	B22.style.border = "1px solid #ffffff";
	B11.src = "img/pp1.jpeg";
	Img.src = "img/pp1.jpeg";
}
// B23.onmouseout = function(){
// 	B22.style.border = "1px solid #ff9003";
// 	B23.style.border = "1px solid #ffffff";
// 	B11.src = "img/pp0.jpeg";
// 	Img.src = "img/pp0.jpeg";
// }
B21.onclick = function(){
	B22.style.border = "1px solid #ff9003";
	B23.style.border = "1px solid #ffffff";
	B11.src = "img/pp0.jpeg";
	Img.src = "img/pp0.jpeg";
}
B24.onclick = function(){
	B23.style.border = "1px solid #ff9003";
	B22.style.border = "1px solid #ffffff";
	B11.src = "img/pp1.jpeg";
	Img.src = "img/pp1.jpeg";
}
// 放大镜结束


// 点击
var B8 = document.getElementById('B8');
var B9 = document.getElementById('B9');
var sel = document.getElementById('sel');
var B81 = document.getElementById('B81');
var B91 = document.getElementById('B91');

B8.onclick = function(){
	B8.style.border = "1px solid #ff0754";
	B8.style.borderRadius = "3px";
	B9.style.border = "1px solid #ffffff";
	B81.src = "img/duigou.png";
	B91.src = "";
	sel.innerHTML = "150ml";
}
B9.onclick = function(){
	B8.style.border = "1px solid #ffffff";
	B9.style.border = "1px solid #ff0754";
	B9.style.borderRadius = "3px";
	B91.src = "img/duigou.png";
	B81.src = "";
	sel.innerHTML = "200ml";
}

var b65 = document.getElementById('b65');
var b66 = document.getElementById('b66');
var b651 = document.getElementById('b651');

b65.onclick = function(){
	var i = b66.value;
	if(i>1){
		--i;
		b66.value = i;
	}else{
		b66.value = 1;
		b65.style.cursor = "not-allowed";
	}
}
b65.onmouseover = function(){
	var i = b66.value;
	if(i>1){
		b65.style.cursor = "pointer";
	}else{
		b65.style.cursor = "not-allowed";
	}
}
b651.onclick = function(){
	var i = b66.value;
	if(i<4){
		++i;
		b66.value = i;
	}else{
		b66.value = 5;
		b651.style.cursor = "not-allowed";
	}
}
b651.onmouseover = function(){
	var i = b66.value;
	if(i>4){
		b651.style.cursor = "not-allowed";
	}else{
		b651.style.cursor = "pointer";
	}
}


// 加入购物车
var b68 = document.getElementById('b68');
var b69 = document.getElementById('b69');
var all = document.getElementById('all');
var shop = document.getElementById('shop');
var m2 = document.getElementById('m2');
b69.onclick = function(){
    all.style.display = "block";
    shop.style.display = "block";
}
b68.onclick = function(){
	all.style.display = "none";
	shop.style.display = "none";
}
m2.onclick = function(){
	all.style.display = "none";
	shop.style.display = "none";
}