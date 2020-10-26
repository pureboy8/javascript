function AppendOnePara(){
	var para = document.createElement("p");
	para.id = "p3";
	var node = document.createTextNode("这是一个新的段落");
	para.appendChild(node);

	var element = document.getElementById("div1");
	element.appendChild(para);
}

function InsertBeforePara(){
	var para = document.createElement("p");
	para.id = "p4";
	var node = document.createTextNode("这又是一个全新的段落");
	para.appendChild(node);

	var element = document.getElementById("div1");
	var child = document.getElementById("p1");
	element.insertBefore(para,child);	
}

function RemovePara(){
	var parent = document.getElementById("div1");
	var child3 = document.getElementById("p3");
	if(child3 != null){
		parent.removeChild(child3);
	}
	var child4 = document.getElementById("p4");
	if(child4 != null){
		child4.parentNode.removeChild(child4);
	}
}

function ReplacePara(){
	var parent = document.getElementById("div1");
	var child1 = document.getElementById("p1");
	var child5 = document.createElement("p");
	child5.id = "p5";
	var node = document.createTextNode("这是替换p1的段落");
	child5.appendChild(node);

	parent.replaceChild(child5,child1);
}

function GetPCount(){
	var pCollection = document.getElementsByTagName("p");
	document.getElementById("pCount").innerHTML = pCollection.length;
}
function ChangePColor(){
	var pCollection = document.getElementsByTagName("p");
	for (var i = 0;i < pCollection.length;i++){
		pCollection[i].style.backgroundColor = "red";
	}
}