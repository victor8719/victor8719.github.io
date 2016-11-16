//Make an SVG Container
var svgContainer = d3.select("#rectangle").append("svg")
	.attr("width", 200)
	.attr("height", 200);
 
//Draw the Rectangle
var rectangle = svgContainer.append("rect")
.attr("x", 10)
.attr("y", 10)
.attr("width", 200)
.attr("height", 100).style("fill", "red");;

//Make an SVG Container
var svgContainer = d3.select("#ellipse").append("svg")
.attr("width", 200)
.attr("height", 200);
//Draw the Ellipse
var circle = svgContainer.append("ellipse")
.attr("cx", 100)
.attr("cy", 100)
.attr("rx", 100)
.attr("ry", 50).style("fill", "green");

 //Make an SVG Container
 var svgContainer = d3.select("#line").append("svg")
                                     .attr("width", 200)
                                     .attr("height", 200);
 
 //Draw the line
 var circle = svgContainer.append("line")
                          .attr("x1", 10)
                          .attr("y1", 10)
                         .attr("x2", 150)
                         .attr("y2", 150)
                         .attr("stroke-width", 2)
                         .attr("stroke", "black");
