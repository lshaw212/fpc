import React, { Component } from 'react';
import * as d3 from "d3";

class Graph extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [[100, 100], [100, 100], [200, 30], [300, 50], [400, 40], [500, 80]]
    };
  }

  componentDidMount() {
    let dataset = this.props.selected_station.FuelPriceList[0].PreviousPrices;
    let highestVal = Math.max.apply(0, dataset);
    let lowestVal = Math.min.apply(0, dataset);

    var margin = {top: 50, right: 50, bottom: 50, left: 50}
      , width = 900 - margin.left - margin.right // Use the window's width 
      , height = 600 - margin.top - margin.bottom; // Use the window's height
    var n = dataset.length;

    var xScale = d3.scaleLinear()
        .domain([0, n]) // input
        .range([0, width]); // output
    var yScale = d3.scaleLinear()
        .domain([lowestVal, highestVal]) // input 
        .range([height, 0]); // output
    
    var line = d3.line()
        .x(function(d, i) { return xScale(i); }) // set the x values for the line generator
        .y(function(d) { return yScale(d); }) // set the y values for the line generator 
        .curve(d3.curveMonotoneX) // apply smoothing to the line

    // var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })
    console.log(dataset);

    let svg = d3.select(".station-graph")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

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
          .on("mouseover", function(a, b, c) { 
            console.log(a) 
            // this.attr('class', 'focus')
        })
          .on("mouseout", function() {  })
  }

  render(){
    const {selected_station} = this.props;
    // let data = selected_station.FuelPriceList[0].PreviousPrices;
    return(
      <div>
        {selected_station ? (
          <svg
            className="station-graph"
          />
        ) : (
          <div>Please select a Petrol station to view historical stats</div>
        )}
      </div>
    )
  }
}
export default Graph;