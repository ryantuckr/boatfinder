var boatList = require("../app/data/boatMatchData.js");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/data/boat", function (req, res) {
        res.json(boatList);
        console.log(boatList)
    });



    app.post("/api/data/boat", function (req, res) {

        console.log("test post successful");


    })
}