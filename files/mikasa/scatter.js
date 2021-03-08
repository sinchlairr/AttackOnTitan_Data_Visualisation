// var margin_S = {top: 10, right: 30, bottom: 30, left: 60},

//     width_s = 460 - margin_S.left - margin_S.right,
//     height_s = 400 - margin_S.top - margin_S.bottom;
//     // append the svg object to the body of the page
//     var svg_s = d3.select("#my_datavi")
//       .append("svg")
//         .attr("width", width_s + margin_S.left + margin_S.right)
//         .attr("height", height_s + margin_S.top + margin_S.bottom)
//       .append("g")
//         .attr("transform",
//               "translate(" + margin_S.left + "," + margin_S.top + ")")

//     d3.select("#my_datavi").attr("align","left");
      

// //Read the data
// d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function(data) {

//   // Add X axis
//   var x_s = d3.scaleLinear()
//     .domain([0, 0])
//     .range([ 0, width_s ]);
//   svg_s.append("g")
//     .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
//     .attr("transform", "translate(0," + height_s + ")")
//     .call(d3.axisBottom(x_s))
//     .attr("opacity", "0")

//   // Add Y axis
//   var y_s = d3.scaleLinear()
//     .domain([0, 500000])
//     .range([ height_s, 0]);
//   svg_s.append("g")
//     .call(d3.axisLeft(y_s));

//   // Add dots
//   svg_s.append('g')
//     .selectAll("dot")
//     .data(data)
//     .enter()
//     .append("circle")
//       .attr("cx", function (d) { return x_s(d.GrLivArea); } )
//       .attr("cy", function (d) { return y_s(d.SalePrice); } )
//       .attr("r", 1.5)
//       .style("fill", "brown")

//   // new X axis
//   x_s.domain([0, 4000])
//   svg_s.select(".myXaxis")
//     .transition()
//     .duration(2000)
//     .attr("opacity", "1")
//     .attr('stroke-width', '5px')
//     .call(d3.axisBottom(x_s));
//     svg_s.select(".myYaxis")
//     .attr("opacity", "1")
//     .attr('stroke-width', '5px')
//     ;

  

//   svg_s.selectAll("circle")
//     .transition()
//     .delay(function(d,i){return(i*3)})
//     .duration(2000)
//     .attr("cx", function (d) { return x_s(d.GrLivArea); } )
//     .attr("cy", function (d) { return y_s(d.SalePrice); } )
// })


var margin_S = {top: 10, right: 30, bottom: 30, left: 60},

    width_s = 460 - margin_S.left - margin_S.right,
    height_s = 380 - margin_S.top - margin_S.bottom;
    // append the svg object to the body of the page
    var svg_s = d3.select("#my_datavi")
      .append("svg")
        .attr("width", width_s + margin_S.left + margin_S.right)
        .attr("height", height_s + margin_S.top + margin_S.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin_S.left + "," + margin_S.top + ")")

    d3.select("#my_datavi").attr("align","left");
      

//Read the data
d3.csv("mikasa/sample.csv", function(data) {

  // Add X axis
  var x_s = d3.scaleLinear()
    .domain([0, 0])
    .range([ 0, width_s ]);
  svg_s.append("g")
    .attr("class", "myXaxis")   // Note that here we give a class to the X axis, to be able to call it later and modify it
    .attr("transform", "translate(0," + height_s + ")")
    .call(d3.axisBottom(x_s))
    .attr("opacity", "0")

  // Add Y axis
  var y_s = d3.scaleLinear()
    .domain([0, 100])
    .range([ height_s, 0]);
    // .attr('stroke-width', '5px');
  svg_s.append("g")
    .call(d3.axisLeft(y_s))
    .attr('stroke-width', '5px');

  // Add dots
  svg_s.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x_s(d.GrLivArea); } )
      .attr("cy", function (d) { return y_s(d.SalePrice); } )
      .attr("r", 5)
      .style("fill", "#520119")

  // new X axis
  x_s.domain([0, 15])
  svg_s.select(".myXaxis")
    .transition()
    .duration(2000)
    .attr("opacity", "1")
    .attr('stroke-width', '5px')
    .call(d3.axisBottom(x_s));
    svg_s.select(".myYaxis")
    .attr("opacity", "1")
    .attr('stroke-width', '5px')
    ;

  

  svg_s.selectAll("circle")
    .transition()
    .delay(function(d,i){return(i*3)})
    .duration(2000)
    .attr("cx", function (d) { return x_s(d.GrLivArea); } )
    .attr("cy", function (d) { return y_s(d.SalePrice); } )
})
