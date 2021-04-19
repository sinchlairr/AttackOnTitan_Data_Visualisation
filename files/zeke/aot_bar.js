// var data1 = [
//     {group: "A", value: 4},
//     {group: "B", value: 16},
//     {group: "C", value: 8}
//  ];
 
//  var data2 = [
//     {group: "A", value: 7},
//     {group: "B", value: 1},
//     {group: "C", value: 20}
//  ];

const data1=[
    {"name":"EREN" , "coolness":118},
    {"name":"MIKASA" , "coolness":112},
    {"name":"ARMIN" , "coolness":170},
    {"name":"LEVI" , "coolness":128},
    {"name":"ZEKE" , "coolness":130}
]

const data2=[
    {"name":"EREN" , "coolness":150},
    {"name":"MIKASA" , "coolness":110},
    {"name":"ARMIN" , "coolness":90},
    {"name":"LEVI" , "coolness":130},
    {"name":"ZEKE" , "coolness":118}
    
]

var color = d3.scaleOrdinal( ).range(["#FFECCF2d", "#6a040f3d", "#6d560f8d","#2940238d","#673911"]);
var img = d3.scaleOrdinal( ).range(["imgs/ereh2.png", "imgs/mikasa1.png", "imgs/armin2.png", "imgs/levi.png", "imgs/beast.png"]);
 
 // set the dimensions and margin_bs of the graph
 var margin_b = {top: 50, right: 30, bottom: 70, left: 60},
     width_b = 460 - margin_b.left - margin_b.right,
     height_b = 400 - margin_b.top - margin_b.bottom;
 
 // append the svg object to the body of the page
 var svg_b = d3.select("#my_datav")
   .append("svg")
     .attr("width", width_b + margin_b.left + margin_b.right)
     .attr("height", height_b + margin_b.top + margin_b.bottom)
   .append("g")
     .attr("transform",
           "translate(" + margin_b.left + "," + margin_b.top + ")");
 
 // X axis
 var x_b = d3.scaleBand()
   .range([ 0, width_b ])
   .domain(data1.map(function(d) { return d.name; }))
   .padding(0.2);
 svg_b.append("g")
   .attr("transform", "translate(0," + height_b + ")")
   .call(d3.axisBottom(x_b)).attr('stroke-width', '5px').attr('font-size', '15px').attr('font-weight', 'bold');
 
 // Add Y axis
 var y_b = d3.scaleLinear()
   .domain([0, 200])
   .range([ height_b, 0]);
 svg_b.append("g")
   .attr("class", "myYaxis")
   .call(d3.axisLeft(y_b))
   .attr('stroke-width', '5px');
 
 // A function that create / update the plot for a given variable:
 function update_b(data) {
 
   var u_b = svg_b.selectAll("rect")
     .data(data)
 
   u_b
     .enter()
     .append("rect")
     .merge(u_b)
     .transition()
     .duration(1000)
       .attr("x", function(d) { return x_b(d.name); })
       .attr("y", function(d) { return y_b(d.coolness); })
       .attr("width", x_b.bandwidth())
       .attr("height", function(d) { return height_b - y_b(d.coolness); })
    //    .attr("fill", "#520119")
    //    .style("width", function(d) {
    //     return d.coolness + "px";
    //   })
      .attr("fill", function(d, i) {
        return color(i);
      });

      u_b
      .enter()
     //  .append("rect")
     .append("image")
     .attr('xlink:href', function(d, i) {
        return img(i);
      })
      .merge(u_b)
      .transition()
      .duration(1000)
        .attr("x", function(d) { return x_b(d.name); })
        .attr("y", function(d) { return y_b(d.coolness); })
        .attr("width", x_b.bandwidth())
        .attr("height", function(d) { return height_b - y_b(d.coolness); })
     // //    .attr("fill", "#520119")
     // //    .style("width", function(d) {
     // //     return d.coolness + "px";
     // //   })
     //   .attr("fill", function(d, i) {
     //     return color(i);
     //   });
       
 }
 
 // Initialize the plot with the first dataset
 update_b(data1)
 