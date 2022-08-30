import BarChart from "./Components/BarChart";
import Layout from "./Components/Layout";

import thunk from "redux-thunk" 

//import axios from "axios";
import "./App.css"
function App() {

  return (
    <div className="App">
      
      <center >
      <Layout />
      </center>
      <div id="barchart" style={{ width: 700 }}>

        <BarChart />

      </div>
    </div>
    
  )
}
export default App;

//  <BarChart chartData={userData} />
