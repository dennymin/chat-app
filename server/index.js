const express = require('express');

const app = express();
app.listen(3000, () => {
  console.log(`express server listening on port 3000`)
})

app.get('/api', (req, res, next) => {
  console.log('hi')
})
