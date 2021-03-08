const DUMMY_DATA=[
    {"name":"eren" , "feature":"hair" , "coolness":100},
    {"name":"dazai" , "feature":"aesthetics", "coolness":98},
    {"name":"levi" , "feature":"daddy", "coolness":150}
]

// const xScale= d3.scaleBand().domain(DUMMY_DATA.map(datap=>datap.name)).rangeRound([0,250]).padding(0.1);
// const yScale= d3.scaleLinear().domain([0,200]).rangeRound([200,0]);

// const container=d3.select('svg')
//     .classed('container',true);
    
// container.append('g').call(d3.axisBottom(d3.scaleBand().rangeRound([0,250]).padding(0.1))).attr('transform',`translate(0,200)`).attr('color','#4f009e');

// container
//   .append('defs')
//   .append('pattern')
//     .attr('id', 'diagonalHatch')
//     .attr('patternUnits', 'userSpaceOnUse')
//     .attr('width', 100)
//     .attr('height', 100)
//   .append('svg:image')
//     .attr("xlink:href", "p1.jpg")
//     .attr("preserveAspectRatio", "none");




// const bars= container.selectAll(".bar")
//     .data(DUMMY_DATA)
//     .enter()
//     .append('rect')
//     .attr("x", 0)
//     .attr("width", 100)
//     .attr("height", 100)
//     .style('fill', 'url(#diagonalHatch)')
//     .classed('bar',true)
//     .attr('width',xScale.bandwidth())
//     .attr ('height',data=>200-yScale(data.coolness))
//     .attr('x', data=> xScale(data.name))
//     .attr('y', data=>yScale(data.coolness));
        // .attr("xlink:href", "p1.jpg")
    // .attr("width", 100)
    // .attr("height", 200)
    // .attr("x", 0)
    // .attr("y", 0);;


    // bars.enter()
    // .append('image')
    // .attr('xlink:href', 'http://www.clker.com/cliparts/P/Z/w/n/R/W/red-smiley-face-hi.png')
    // .attr("width", x.bandwidth())
    // .attr("height", "28px")
    // .attr("y", function (d) { return y(d.name) - 14; })
    // .attr("x", function (d) { return x(d.coolness); })
    // .attr("preserveAspectRatio", "none");

// container
//     .selectAll('.label')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('text')
//     .text(data=>data.coolness)
//     .attr('x',data=>xScale(data.name)+10)
//     .attr('y',data=>yScale(data.coolness)-20);




        // container.append("rect")
        // .attr("x", 0)
        // .attr("width", 100)
        // .attr("height", 100)
        // .style('fill', 'url(#diagonalHatch)');


// var svg = d3.select("body").append("svg");

// svg
//   .append('defs')
//   .append('pattern')
//     .attr('id', 'diagonalHatch')
//     .attr('patternUnits', 'userSpaceOnUse')
//     .attr('width', 100)
//     .attr('height', 100)
//   .append('svg:image')
//     .attr("xlink:href", "p1.jpg")
//         .attr("width", 100)
//         .attr("height", 200)
//         .attr("x", 0)
//         .attr("y", 0);

// svg.append("rect")
//       .attr("x", 0)
//       .attr("width", 100)
//       .attr("height", 100)
//       .style("fill", 'yellow');

// svg.append("rect")
//     .attr("x", 0)
//     .attr("width", 100)
//     .attr("height", 100)
//     .style('fill', 'url(#diagonalHatch)');



var data = [{"letter":"A","frequency":0.08167},{"letter":"B","frequency":0.01492},{"letter":"C","frequency":0.02782}];

  var svg = d3.select("svg"),
    margin = { top: 20, right: 20, bottom: 30, left: 40 },
    x = d3.scaleBand().padding(0.1),
    y = d3.scaleLinear();

  var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  g.append("g")
    .attr("class", "axis axis--x");

  g.append("g")
    .attr("class", "axis axis--y");

  g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .text("Frequency");

  // DRAWING

  function draw() {

    var bounds = svg.node().getBoundingClientRect(),
      width = bounds.width - margin.left - margin.right,
      height = bounds.height - margin.top - margin.bottom;

    x.rangeRound([0, width]);
    y.rangeRound([height, 0]);

    g.select(".axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    g.select(".axis--y")
      .call(d3.axisLeft(y).ticks(10, "%"));

    var bars = g.selectAll(".bar")
      .data(theData);

    // ENTER
    bars
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function (d) { return x(d.name); })
      .attr("y", function (d) { return y(d.coolness); })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return height - y(d.coolness); });

    // UPDATE
    bars.attr("x", function (d) { return x(d.name); })
      .attr("y", function (d) { return y(d.coolness); })
      .attr("width", x.bandwidth())
      .attr("height", function (d) { return height - y(d.coolness); });

    // ADD IMAGE 
    bars.enter()
    .append('image')
    .attr('xlink:href', 'http://www.clker.com/cliparts/P/Z/w/n/R/W/red-smiley-face-hi.png')
    .attr("width", x.bandwidth())
    .attr("height", "30px")
    .attr("y", function (d) { return y(d.name) - 14; })
    .attr("x", function (d) { return x(d.coolness); })
    .attr("preserveAspectRatio", "none");


    bars.exit().remove();

  }

      theData = DUMMY_DATA;

      x.domain(theData.map(function (d) { return d.name; }));
      y.domain([0, d3.max(theData, function (d) { return d.coolness; })]);

      draw();
  
  window.addEventListener("resize", draw);