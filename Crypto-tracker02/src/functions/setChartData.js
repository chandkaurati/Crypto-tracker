 const setChartData = (setData, prices)=>{
     setData(
        {
        //   labels: prices.map((item => Convertdate(item[0]))),
        labels : ['mon', 'tue', 'wed'],  
          datasets:[
          {
            label : "my first data set",
            data : prices.map((item => item[1])), 
            fill : true,
            tension: 0.25,
            backgroundColor: "rgb(204, 217, 255, 0.1)",
            borderColor : "blue",
            pointRadius : 1 
          }
          ]
        
        }
      )
}

export default setChartData