function changeImage()
{
	element = document.getElementById("myimage");
	if(element.src.match("bulbon")){
		element.src = "pic_bulboff.gif";
	}else{
		element.src = "pic_bulbon.gif";
	}
	//大家好，我是小飞
	/*
	哈哈大好大
	hahdhashda
	哈哈的哈

	*/
}

function writeHtml(){
	document.write(Date());
}

function windowAlert(){
	window.alert(5+6);
}

function innerHtml() {
	document.getElementById("demo").innerHTML = "innerHtml的段落已经修改";
}

function writeToConsole(){
	console.log("把内容写入console.log");
}