new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Solo", "Assist", "Humans"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: [        '#1D0E0B',
          '#7c0509',
          '#774023'],
          data: [2478,5267,734]
        }
      ]
    },
    options: {
      legend: {
        labels: {
          fontColor: "white",
          fontSize: 18,
      }
    },
    // hoverBorderColor: "black",
      rotation: -1* Math.PI,
      circumference: 1 * Math.PI,
    //   title: {
    //     display: true,
    //     text: 'Predicted world population (millions) in 2050'
    //   } 
      animation:{
        //   animationScale:true,
          animateRotate:true,
      }
    }
});


// var img = new Image();
// img.src = 'https://habrastorage.org/webt/d4/n3/y3/d4n3y3ctwkgf4-n_oxmtycxt0yi.jpeg';
// img.onload = function() {
//     var ctx = document.getElementById('doughnut-chart').getContext('2d');
//     var fillPattern = ctx.createPattern(img, 'repeat');

//     var chart = new Chart(ctx, {
//         data: {
//             labels: ['Item 1', 'Item 2', 'Item 3'],
//             datasets: [{
//                 data: [10, 20, 30],
//                 backgroundColor: fillPattern
//             }]
//         }
//     });
// };