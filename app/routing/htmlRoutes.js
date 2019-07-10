var path = require("path");


module.exports = function (app) {
   
   
    // HTML GET Requests
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

   
    // Redirects to home page
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};