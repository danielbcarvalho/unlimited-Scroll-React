// *** file mongoose.js -> Connect to db:
// const mongoose = require("mongoose");

// const DB_URL =
//   "mongodb+srv://user:password@vida-leve.d9con.mongodb.net/dbname?retryWrites=true&w=majority";

// mongoose.connect(DB_URL);

require("./mongoose"); // roda mongoose.js e conecta ao db

const express = require("express");

const cors = require("cors");

const Scroll = require("./Scroll");

const app = express();

app.use(cors());

//Route to seed db with
app.post("/seed", async (req, res) => {
  try {
    const scrolls = await Scroll.create([
      { title: "Todo A", description: "whatever" },
      { title: "Todo B", description: "whatever" },
      { title: "Todo C", description: "whatever" },
      { title: "Todo D", description: "whatever" },
      { title: "Todo E", description: "whatever" },
      { title: "Todo F", description: "whatever" },
      { title: "Todo G", description: "whatever" },
      { title: "Todo H", description: "whatever" },
      { title: "Todo I", description: "whatever" },
      { title: "Todo J", description: "whatever" },
      { title: "Todo K", description: "whatever" },
      { title: "Todo L", description: "whatever" },
      { title: "Todo M", description: "whatever" },
      { title: "Todo N", description: "whatever" },
      { title: "Todo O", description: "whatever" },
      { title: "Todo P", description: "whatever" },
      { title: "Todo Q", description: "whatever" },
      { title: "Todo R", description: "whatever" },
      { title: "Todo S", description: "whatever" },
      { title: "Todo T", description: "whatever" },
      { title: "Todo U", description: "whatever" },
      { title: "Todo V", description: "whatever" },
      { title: "Todo W", description: "whatever" },
      { title: "Todo X", description: "whatever" },
      { title: "Todo Y", description: "whatever" },
      { title: "Todo Z", description: "whatever" },
    ]);

    res.status(201).send();
  } catch (e) {
    res.status(500).send("eita nozes", e);
  }
});

app.get("/scroll", async (req, res) => {
  try {
    const skip =
      req.query.skip && /^\d+$/.test(req.query.skip)
        ? Number(req.query.skip)
        : 0;

    const scroll = await Scroll.find({}, undefined, { skip, limit: 5 }).sort(
      "title"
    );

    res.send(scroll);
  } catch (e) {
    res.status.send("nop");
  }
});

app.listen(3333, () => console.log("The server has started"));
