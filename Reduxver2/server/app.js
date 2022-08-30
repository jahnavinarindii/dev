const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const databaseName = "LIC2";
const client = new MongoClient(url);
const express = require("express");
const app = express();

app.use(express.json());
var cors = require("cors");
app.use(cors());
app.options("*", cors());

async function getData() {
  let result = await client.connect();
  db = result.db(databaseName);
  collection = db.collection("Insurance2");
  let data = await collection.find({}).toArray();
  //console.log(data)
  return collection;
}

app.get("/api", async (req, res) => {
  let data = await getData();
  data = await data.find({}).toArray();
  console.log(data);
  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  let data = await getData();
  //res.send(typeof req.params.key)
  data = await data.find({policy_id:parseInt(req.params.key)  }).toArray();
  console.log(data);
  res.send(data);
});

app.put("/update/:ID", async (req, res) => {
 /* let result = await client.connect();
  db = result.db(databaseName);
  collection = db.collection("Insurance");*/

  let collection = await getData();
  try {
    collection.updateOne(
      { policy_id: parseInt(req.params.ID) },
      { $set: req.body }
    );
  } catch (err) {
    console.log(err);
  }
  res.send("update");
});



app.get("/count/:Dir", async (req, res) => {
  let data = await getData();
  let jan  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^1/"}},{"customer_region":req.params.Dir}]});

  let feb  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^2/"}},{"customer_region":req.params.Dir}]});
  
  let mar  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^3/"}},{"customer_region":req.params.Dir}]});
  
  let apr  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^4/"}},{"customer_region":req.params.Dir}]});
  
  let may  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^5/"}},{"customer_region":req.params.Dir}]});
  
  let jun = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^6/"}},{"customer_region":req.params.Dir}]});
  
  let jul  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^7/"}},{"customer_region":req.params.Dir}]});
  
  let aug  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^8/"}},{"customer_region":req.params.Dir}]});
  
  let sep  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^9/"}},{"customer_region":req.params.Dir}]});
  
  let oct  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^10/"}},{"customer_region":req.params.Dir}]});

  let nov = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^11/"}},{"customer_region":req.params.Dir}]});

  let dec  = await data.countDocuments({ $and:[ {"date_of_purchase": {"$regex": "^12/"}},{"customer_Region":req.params.Dir}]});


console.log(jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec);

let nop_array=[jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec];
 res.send(nop_array);
});


app.listen(5000);
//console.log(process.REACT_APP_SERVER_PORT)
module.exports = app;
/* data = data.aggregate([
  {$project: { month: {$month: '$Date of Purchase'}}},
  {$match: {month: 1}}
]);*/