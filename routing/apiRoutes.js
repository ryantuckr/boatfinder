var boatList = require("../app/data/boatMatchData");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/boat", function (req, res) {
        res.json(boatList);

    });

    app.post("/api/boat", function (req, res) {

        console.log("test post successful");
        var userData = req.body;
        var differenceArray = [];

        for (i = 0; i < boatList.length; i++) {
            console.log(boatList[i].name);
            var myBoat = boatList[i];

            for (var a = 0; a < myBoat.scores.length; a++) {
                 var difference = Math.abs(myBoat.scores[a] - userData.scores[a]);
            }
            console.log("Score Diff: ", difference);
            differenceArray.push(difference);
            console.log("Differance Array: ", differenceArray);

        }

        var minScore = Math.min.apply(Math, differenceArray)
        console.log("Minimum Score: ", minScore);

        var index = differenceArray.indexOf(minScore);
        console.log("Index of Minimum Score: ", index);

        //need to match with logic
        var bestMatch = "";
        console.log("Best Match: ", bestMatch);
        
        
        res.json(bestMatch);



    })
}