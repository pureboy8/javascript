function GetElementById(){
	var x = document.getElementById("name");
	document.getElementById("nameCopy").innerHTML = x.innerHTML;
}

function GetElementsByTag(){
	var x = document.getElementById("main");
	var y = x.getElementsByTagName("p");
	document.getElementById("tagCopy").innerHTML = y[0].innerHTML;
}

function GetElementsByClass(){
	var x = document.getElementsByClassName("intro");
	document.getElementById("classCopy").innerHTML = x[0].innerHTML;
}

function ChangeImage(){
	var img = document.getElementById("image");
	img.src = "landscape.jpg";
}

function ChangeCss(){
	document.getElementById("p2").style.color = "blue";
	document.getElementById("p2").style.fontFamily = "Arial";
	document.getElementById("p2").style.fontSize = "larger";
}

function lighton(){
	document.getElementById("myImage").src = "bulbon.gif";
}

function lightoff(){
	document.getElementById("myImage").src = "bulboff.gif";
}

function showLoadMessage(){
	// alert("消息在onload事件触发后弹出.");
	// 说明addEventListener 冒泡和捕获的区别
	// 冒泡是从内向外，捕获是从外向内
	document.getElementById("myP").addEventListener("click",function(){
		alert("你点击了P元素!");
	},false);
	document.getElementById("myDiv").addEventListener("click",function(){
		alert("你点击了DIV元素！");
	},false);
	document.getElementById("myP2").addEventListener("click",function(){
		alert("你点击了P2元素!");
	},true);
	document.getElementById("myDiv2").addEventListener("click",function(){
		alert("你点击DIV2元素！");
	},true);
	// 移除事件
	document.getElementById("myDiv3").addEventListener("mousemove",RandomNum);
}

function RandomNum(){
	document.getElementById("randomNum").innerHTML = Math.random(); 
}

function RemoveHandler(){
	document.getElementById("myDiv3").removeEventListener("mousemove",RandomNum);
}

function ChangeColorOn(){
	document.getElementById("colorText").style.color = "red";
}

function ChangeColorOff(){
	document.getElementById("colorText").style.color = "black";
}