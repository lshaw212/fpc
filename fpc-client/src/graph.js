import * as d3 from "d3";

export default function createGraph(stationData){
  let dataset = stationData.FuelPriceList[0].PreviousPrices;
  let highestVal = Math.max.apply(0, dataset);
  let lowestVal = Math.min.apply(0, dataset);

  let parentDiv = document.getElementById("graph-container")

  let margin = {top: 50, right: 50, bottom: 50, left: 50}
    , width = parentDiv.clientWidth - margin.left - margin.right // Use the window's width 
    , height = 600 - margin.top - margin.bottom; // Use the window's height
  let n = dataset.length - 1;

  let xScale = d3.scaleLinear()
      .domain([0, n]) // input
      .range([0, width]); // output
  let yScale = d3.scaleLinear()
      .domain([lowestVal, highestVal]) // input 
      .range([height, 0]); // output
  
  let line = d3.line()
      .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
      .y(function(d) { return yScale(d); }) // set the y values for the line generator 
      .curve(d3.curveMonotoneX) // apply smoothing to the line

  let svg = d3.select(".station-graph")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  // Define the div for the tooltip
  let div = d3.select("body").append("div")	
      .attr("class", "tooltip")				
      .style("opacity", 0);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

  svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                            (height + margin.top + -20) + ")")
      .style("text-anchor", "middle")
      .text("Date");

  svg.append("g")
      .attr("class", "y axis")
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft
  // text label for the y axis
  svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", -3 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Price (£)");

  svg.append("path")
      .datum(dataset) // 10. Binds data to the line 
      .attr("class", "line") // Assign a class for styling 
      .attr("d", line); // 11. Calls the line generator

  svg.selectAll(".dot")
      .data(dataset)
    .enter().append("circle") // Uses the enter().append() method
      .attr("class", "dot") // Assign a class for styling
      .attr("cx", function(d, i) { return xScale(i) })
      .attr("cy", function(d) { return yScale(d) })
      .attr("r", 5)
        .on("mouseover", function(a, i) { 
          console.log(a) 
          div.transition()		
              .duration(200)		
              .style("opacity", .9);		
          div	.html("£" + a + "<br/>" + i)	
              .style("left", (d3.event.pageX) + "px")		
              .style("top", (d3.event.pageY - 28) + "px");
      })
        .on("mouseout", function(d) { 
          div.transition()		
              .duration(500)		
              .style("opacity", 0);
          });
}