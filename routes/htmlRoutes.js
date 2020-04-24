const path = require("path");

module.exports = function(app) {
    // return the index.html page
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });

    // return the exercise.html page
    app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/exercise.html"));
    });
    
    // return the stats.html page
    app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../Develop/public/stats.html"));
    });
}
