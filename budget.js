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
	setData(data2001, "2001");
});


var toggleYear = function(){
	//console.log(data2010);
	if(toggle){
		updateData(data2010, "2010")
	}
	else{
		updateData(data2001, "2001")
	}
	toggle = !toggle;
};

function updateData(data, year){
	var chart = d3.select(".chart");
	var bar = chart.selectAll("div");
	var barUpdate = bar.data(data);
	barUpdate.transition().duration(2000)
	.style("height", function(d) {
			//console.log(d);
			return parseInt(d.replace(/,/g, '')) / 150 + "px"; });
	d3.select("#year").text(year);
	barUpdate.text(function(d) { return d ; });
	barUpdate.append("span").data(names).text(function(d){return d;}).style("float", "left").style("color", "#121a28");
};

//console.log("data2001");

function setData(data, year){
	console.log(data);
	var chart = d3.select(".chart");
	var bar = chart.selectAll("div");
	var barUpdate = bar.data(data);
	var barEnter = barUpdate.enter().append("div");

	d3.select("#year").text(year);
	barEnter.transition().duration(2000).style("float", "left")
	.style("height", function(d) {
		//console.log(d);
		return parseInt(d.replace(/,/g, '')) / 200 + "px"; });


	barEnter.text(function(d) { return d ; });
	//barEnter.append("br");
	barEnter.append("span").data(names).text(function(d){return d;}).style("float", "left").style("color", "#121a28");

};

document.getElementById("switch").addEventListener("click", toggleYear);