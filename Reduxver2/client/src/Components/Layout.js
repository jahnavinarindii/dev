//import { getData } from "C:/Users/jnarindi/Desktop/InsurancePOC/client/src/apicalls.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useState } from "react";
import axios from "axios";
import InsuranceForm from "./InsuranceForm";
import "./Layout.css";


function Layout(props) {
 const [showform, setShowform] = useState(false);
  const [nullmessage, setNullMessage] = useState([]);
  const [record, setRecord] = useState([]);
  
  const { formData, setFormData, loading, getFormData } = props;
  const searchRecords = () => {
    console.log({ record });

    if (record.length === 0) {
      setNullMessage("Please Enter ID ");
    } else {
    setShowform(true);
   getFormData();
      axios
        .get(
          `http://localhost:${process.env.REACT_APP_DB_PORT}/search/${record}`
        )
        .then((response) => {
          setFormData({
            policyId: response.data[0].policy_id,
            dateOfPurchase: response.data[0].date_of_purchase,
            customerId: response.data[0].customer_id,
            fuel: response.data[0].fuel,
            premium: response.data[0].premium,
            vehicleSegment: response.data[0].vehicle_segment,
            comprehensive: response.data[0].comprehensive,
            bodilyInjuryLiability: response.data[0].bodily_injury_liability,
            personalInjuryProtection:
              response.data[0].personal_injury_protection,
            collision: response.data[0].collision,
            propertyDamageLiability: response.data[0].property_damage_liability,
            customerGender: response.data[0].customer_gender,
            customerIncomegroup: response.data[0].customer_income_group,
            customerRegion: response.data[0].customer_region,
            customerMaritalstatus: response.data[0].customer_marital_status,
          });
          if (response.data.length === 0) {
            setNullMessage("No records matched");
          }
          console.log(response.data);
        });
    }
  };
  debugger;

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input
            type="text-area"
            onChange={(e) => setRecord(e.target.value)}
            placeholder="Enter Policy ID"
            onFocus={(e) => e.target.select()}
          ></input>
          <button class="button" onClick={searchRecords}>
            Search
          </button>

          <table>
            <thead>
              <tr>
              {showform && (
                
                    <div>
                      <button
                        class="cancel_button"
                        onClick={() => setShowform(!showform)}
                      >
                        X
                      </button>

                      <InsuranceForm
                        formData={formData}
                        setFormData={setFormData}

                        loading={loading}
                      ></InsuranceForm>
                    </div>
                )}
              </tr>

              <div class="nullmsg">{nullmessage}</div>
            </thead>
          </table>
        </div>
      </header>
    </div>
  );
}

export default Layout;









//     <td>Policy Id {i.Policy_id}</td>
//const [formData, setFormData] = useState({  })
  // const [search, setSearch] = useState([]);
  // const [formData, setFormData] = useState([]);
  /* {showform && (
                  <div>*  </div>
                )}*/