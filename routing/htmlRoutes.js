// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------

    //handles the /survey endpoint request, send back the survey.html
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    //handles the *catchall endpoint request, send back the home.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // app.get("/api/boat", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../app/data/boatMatchData"));
    // });
   

};