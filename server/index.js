const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getMotivation, getRich, getSacks } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/rich", getRich);
app.get("/api/motivation", getMotivation);
app.get("/api/sacks", getSacks);

app.listen(4000, () => console.log("Server running on 4000"));
