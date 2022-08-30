import "./InsuranceForm.css";
//import CircularProgress from "@mui/material/CircularProgress";
//import Box from "@mui/material/Box";

import axios from "axios";
function InsuranceForm(props) {
const {formData,setFormData}=props;

  const formHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  function updateData() {
    axios({
      method: "put",
      url: `http://localhost:5000/update/` + formData.policyId,
      data: {
        fuel: formData.fuel,
        premium: formData.premium,
        vehicle_segment: formData.vehicleSegment,
        bodily_injury_liability: formData.bodilyInjuryLiability,
        customer_marital_status: formData.customerMaritalstatus,
        customer_region: formData.customerRegion,
        customer_income_group: formData.customerIncomegroup,
        comprehensive: formData.comprehensive,
        collision: formData.collision,
        personal_injury_protection: formData.personalInjuryProtection,
        property_damage_liability: formData.propertyDamageLiability,
        customer_gender: formData.customerGender,
      },
    }).then((response) => {
      console.log("put called");
    });
  }

  return (
    <div>
      <form>
       
        <h2> Policy ID : {formData.policyId}</h2>

        <h1> </h1>

        <p>
          <label>
            Date of Purchase :
            <input type="text" value={formData.dateOfPurchase}></input>
          </label>
        </p>
        <p>
          <label>
            Customer_id:
            <input type="text" value={formData.customerId}></input>
          </label>
        </p>
        <p>
          <label>
            Personal Injury Protection :
            <input
              type="text"
              name="personalInjuryProtection"
              Value={formData.personalInjuryProtection}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
          
            Fuel :
            <input
              type="text"
              name="fuel"
              value={formData.fuel}
              //defaultValue={fuel}
              /*     onChange={(e) => {
                setFuel(e.target.value);
              }}*/

              onChange={formHandler}
            ></input>
          </label>
        </p>

        <p>
          <label>
            Premium :
            <input
              type="text"
              name="premium"
              value={formData.premium}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Vehicle Segment :
            <input
              type="text"
              name="vehicleSegment"
              value={formData.vehicleSegment}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Bodily injury liability :
            <input
              type="text"
              name="bodilyInjuryLiability"
              value={formData.bodilyInjuryLiability}
              onChange={formHandler}
            ></input>
          </label>
        </p>

        <p>
          <label>
            Collision:
            <input
              type="text"
              value={formData.collision}
              name="collision"
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            comprehensive :{" "}
            <input
              type="text"
              name="comprehensive"
              value={formData.comprehensive}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Customer_Gender :
            <input
              type="text"
              name="customerGender"
              value={formData.customerGender}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Customer_Income group :{" "}
            <input
              type="text"
              name="customerIncomegroup"
              value={formData.customerIncomegroup}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Customer_Region :
            <input
              type="text"
              name="customerRegion"
              value={formData.customerRegion}
              onChange={formHandler}
            ></input>
          </label>
        </p>
        <p>
          <label>
            Customer_Marital_status :
            <input
              type="text"
              name="customerMaritalstatus"
              value={formData.customerMaritalstatus}
              onChange={formHandler}
            ></input>
          </label>
        </p>

        <p>
          <label>
            Property damage liability :
            <input
              type="text"
              name="propertyDamageLiability"
              value={formData.propertyDamageLiability}
              onChange={formHandler}
            ></input>
          </label>
        </p>
      </form>

      <button class="formbutton" onClick={updateData}>
        Submit
      </button>
    </div>
  );
}
export default InsuranceForm;

/*       <p>   INSURANCE FORM 
            <label> Policy ID :  


            <input
              type="text"
              name="Id"
              value={props.Policy_id}
              onChange
            ></input></label>
        value= {props.Policy_id}     
    </p> */
