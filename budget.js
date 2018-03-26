var names = [];
var data2001 = [];
var data2010 = [];
var toggle = true;

//Get data from the csv file
d3.csv("discret.csv", function(d){
	//console.log(d[0]);
	data = d.slice(0);
	//console.log(d);
	//console.log(data);
	//console.log(d.length);
	for (var i = 0; i < d.length; i++){
		data2001.push(d[i][2001]);
		data2010.push(d[i][2010]);
		names.push(d[i]["Category and Program"])
		//console.log(data2001);
	}
	//set with 2001 data
	setData(data2001);
});

/*
var toggleYear = function(){
	if(toggle){

	}
};
*/

//console.log("data2001");

function setData(data){
	var chart = d3.select(".chart");
	var bar = chart.selectAll("div");
	var barUpdate = bar.data(data2001);
	var barEnter = barUpdate.enter().append("div");

	d3.select("#year").text("2001");
	barEnter.transition().duration(2000).style("float", "left")
	.style("height", function(d) {
		//console.log(d);
		return parseInt(d.replace(/,/g, '')) / 150 + "px"; });


	barEnter.text(function(d) { return d ; });
	//barEnter.append("br");
	barEnter.append("span").data(names).text(function(d){return d;}).style("float", "left").style("color", "#121a28");

};
