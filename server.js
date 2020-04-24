const express = require("express"); 
const mongoose = require("mongoose");  
const PORT = process.env.PORT || 3000; 
const app = express(); 
 
 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
 
app.use(express.static("Develop/public")); 
 
 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true }) 
// mongoose.connect(process.env.MONGODB_URI || "mongodb://<user>:<password7>@ds229118.mlab.com:29118/heroku_xpn8lt4j", { useNewUrlParser: true }) 
   .then(() => console.log("MongoDB successfully connected")) 
  .catch(err => console.log(err)); 

 // routes 
require("./routes/apiRoutes")(app); 
require("./routes/htmlRoutes")(app); 
//  test run
 
 app.listen(PORT, () => { 
   console.log(`App running on port ${PORT}!`); 
 }); 
