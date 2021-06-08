const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://medico:P7262237h@cluster0.eibxu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Successfully connect to MondoDB...");
    else
      console.log(
        "Connection to MongoDb failed :" + JSON.stringify(err, undefined, 2)
      );
  }
);

module.exports = mongoose;