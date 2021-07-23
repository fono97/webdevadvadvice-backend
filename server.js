const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env" });

const mc_api_key = "2d470afce4ab169236f89101dfad7097-us6";
const list_id = "c34944a9d8";

const mailchimp = new Mailchimp(mc_api_key);
const app = express();

// API endpoint
app.get("/api/memberAdd", (req, res) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, {
      email_address: req.query.email,
      status: "subscribed",
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
});
if (process.env.NODE_ENV === "production") {
  app.arguments(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

const port = process.env.PORT || 9001;
app.listen(port);
console.log(`express is listening on ${port} `);
