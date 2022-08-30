import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";
import { useState } from "react";
import "./BarChart.css"
function BarChart() {
const [noOfPolicies] = useState([
    96, 101, 75, 63, 0, 0, 0, 0, 0, 0, 0, 24,
  ]);

  const UserData = [ {
    month: "Jan",
    policies: noOfPolicies[0],
  },
  {
    month: "Feb",
    policies: noOfPolicies[1],
  },
  {
    month: "Mar",
    policies: noOfPolicies[2],
  },
  {
    month: " Apr",
    policies: noOfPolicies[3],
  },
  {
    month: "May",
    policies: noOfPolicies[4],
  },
  {
    month: "Jun",
    policies: noOfPolicies[5],
  },
  {
   
    month: "July",
    policies: noOfPolicies[6],
  },
  {
    month: "Aug",
    policies: noOfPolicies[7],
  },
  {
    month: "Sept",
    policies: noOfPolicies[8],
  },
  {
    month: " Oct",
    policies: noOfPolicies[9],
  },
  {
    month: "Nov",
    policies: noOfPolicies[10],
  },
  {
    month: "Dec",
    policies: noOfPolicies[11],
  },] 

  function onGraph() {
    
  // let region="West";
  let region=document.getElementById("reg").value;
  console.log({region})
    axios.get(`http://localhost:5000/count/${region}`).then((response) => {
      const UserData = [
        {
          month: "Jan",
          policies: response.data[0],
        },
        {
          month: "Feb",
          policies: response.data[1],
        },
        {
          month: "Mar",
          policies: response.data[2],
        },
        {
          month: " Apr",
          policies: response.data[3],
        },
        {
          month: "May",
          policies: response.data[4],
        },
        {
          month: "Jun",
          policies: response.data[5],
        },
        {
      
          month: "July",
          policies: response.data[6],
        },
        {
          month: "Aug",
          policies: response.data[7],
        },
        {
          month: "Sept",
          policies: response.data[8],
        },
        {
          month: " Oct",
          policies: response.data[9],
        },
        {
          month: "Nov",
          policies: response.data[10],
        },
        {
          month: "Dec",
          policies: response.data[11],
        },
        
      ];

      setUserData({
        labels: UserData.map((data) => data.month),
        datasets: [
          {
            label: "No Of Policies",
            data: UserData.map((data) => data.policies),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });

    });
   
    console.log(setUserData);
  }

  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        label: "No Of Policies",
        data: UserData.map((data) => data.policies),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
         <label >Choose a Region:</label>
  <select  id="reg"  onChange={onGraph}>
    <option value="North">North</option>
    <option value="South">South</option>
    <option value="East">East</option>
    <option value="West">West</option>
  </select>
    
      <Bar data={userData} />
    </div>
  );
};

export default BarChart;

/*  <button onClick={onGraph}>GRAPH </button>*/ 