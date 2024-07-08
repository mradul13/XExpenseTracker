import React from "react";
import { Chart } from "react-google-charts";
import styles from './PieChart.module.css'

// export const data = [
//   ["Pizza", "Popularity"],
//   ["Pepperoni", 33],
//   ["Food", 26],
//   ["Mushroom", 22],
//   ["Sausage", 10], // Below limit.
// ];

export const options = {
  legend: {
    position: "bottom",
  },
  backgroundColor: '#626262',
  chartArea: {
    width: "13rem",
    backgroundColor: {
      stroke: '#626262'
    },
  },
  
  fontName: "ubuntu",
};


const PieChart = ({data})=>{
  
    return (
        <div className={styles.wrapper}>
            <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
        </div>
    
  );
}

export default PieChart;