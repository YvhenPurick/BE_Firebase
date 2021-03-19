const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");

admin.initializeApp();

app.use(cors({ origin: true }));
app.get("/", async (req, res) => {
  const snapshot = await admin.firestore().collection("table").get();

  const tableData = [];
  snapshot.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();

    tableData.push({ id, ...data });
  });
  res.set("Access-Control-Allow-Origin", "*");
  res.status(200).send(JSON.stringify(tableData));
});

app.post("/", async (req, res) => {
  const dataTable = req.body;
  await admin.firestore().collection("table").add(dataTable);
  res.status(201).send();
});

exports.table = functions.https.onRequest(app);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
