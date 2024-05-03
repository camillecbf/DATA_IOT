import router from "./routes/start.js";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import ip from "ip";
const app = express();

const port = 3000;

const ipAdr = ip.address();

let lastHouseVisited = "Gryffindor";
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req, res) => {
  res.json({ message: lastHouseVisited });
});

app.post("/", (req, res) => {
  lastHouseVisited = req.body.house;
  res.json({ message: lastHouseVisited });
});
app.listen(3000, () => {
  console.log("Server run: http://" + ip.address() + ":3000");
});
