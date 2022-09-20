const express = require("express");

const PORT = process.env.PORT || 1234;

const app = express();

app.get('/api', (req, res) =>{
  res.json({
    message: "hello world"
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});