const express = require("express");
const auth = require("./auth");

// Create Express App and Routes
const app = express();
app.get("/", (req, res) => {
  auth.getToken(auth.tokenRequest).then((response) => {
    
    res.send({
      status: 200,
      data: response.accessToken,
    });
  },(err)=> {
    console.log(err);
    res.send({
      status: 401
    });
    return response;
  });
});
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});