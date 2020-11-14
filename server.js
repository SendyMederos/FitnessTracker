const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config({ silent: true });


PORT = process.env.PORT || 8080;


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

mongoose.connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});