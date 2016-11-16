function buttonClick(event){
	var radius = document.getElementById('radius').value;
	if(radius < 300){
		document.getElementById("output").textContent = "The radius you entered is: "+ radius;
			var spanSelection = d3.select("#circle");
	var svgSelection = spanSelection.append("svg")
				.attr("width", 2 * radius)
				.attr("height", 2 * radius);
 	var circleSelection = svgSelection.append("circle")
 			.attr("cx", radius)
 			.attr("cy", radius)
			.attr("r", radius)
			.style("fill", "red");
	}
	else{
		document.getElementById("output").textContent = "The radius you entered is: "+ radius + ", which is to big!";
	}
}

document.getElementById('radiusSubmit').addEventListener('click', buttonClick);