/*
 * raindrop window by Matt Kersley
 * used for cover of DG - Summer Storm
 */

 window.addEventListener("load", function()
 {
 	var count = 50;
 	for(var i=0; i<count; i++){
 		var node = document.createElement("span");
 		node.style.left = Math.floor(Math.random() * 100) + "vw";
 		node.style.top = Math.floor(Math.random() * 100) + "vh";
 		document.querySelector(".rain").appendChild(node);
 	}
 });

 