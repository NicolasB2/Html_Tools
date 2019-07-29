function myFunction() {
  document.getElementById("foo").style.padding = "10px"; 
  document.getElementById("foo").style.fontSize = "25px"; 
  document.getElementById("foo").style.textAlign = "center";
  document.getElementById("foo").style.backgroundColor = "#777";    
  
  var x = document.getElementsByTagName("header")[0];
  x.style.backgroundColor = "#666"; 
  x.style.padding = "30px"; 
  x.style.textAlign = "center"; 
  x.style.fontSize= "25px"; 
  x.style.color = "white"; 
  
   var y = document.getElementsByTagName("h2");
   for (i = 0; i < y.length; i++) {
        y[i].style.Color = "white";
		y[i].style.fontSize = "150%";
		y[i].style.textAlign = "center";
		y[i].style.margin = "5%";
	}
	
	var nav = document.getElementsByTagName("nav");
	for (i = 0; i < nav.length; i++) {
		nav[i].style.width = "30%";
		nav[i].style.height = "300px";
		nav[i].style.float = "left";
		nav[i].style.padding = "20px";
		nav[i].style.background = "#ccc";
	}
	
	var article = document.getElementsByTagName("article");
	for (i = 0; i < article.length; i++) {
		article[i].style.width = "100%";
		article[i].style.height = "300px";
		article[i].style.float = "left";
		article[i].style.padding = "20px";
		article[i].style.background = "#f1f1f1";
	}
}