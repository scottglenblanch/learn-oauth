const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
  res.json({});

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
