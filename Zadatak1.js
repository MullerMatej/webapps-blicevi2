import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

var tempStorage = [];

app.get("/updateItemPrice/:cijena", (req, res) => {
  var { cijena } = req.params;
  var { cijena } = req.body;

  var item = tempStorage.find((x) => x.cijena == cijena);

  item.cijena = cijena;

  res.send(tempStorage);
});

app.get("/getBrand", (req, res) => {
  console.log(tempStorage);
  res.send(tempStorage);
});

app.post("/saveItem", (req, res) => {
    var data = req.body;
    console.log(data);
  
    data = { ...data };
    
    tempStorage.push(data);
    res.send(tempStorage);
    res.send({"OK": "Item hlace saved in DB"})
  });

app.listen(port, () => console.log(`Works on port ${port}`));
