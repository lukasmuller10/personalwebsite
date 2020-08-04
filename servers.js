const express = require('express');
const app = express();

app.use(express.static('.'));
app.listen(8080, () => (console.log('Express server running on port: 8080')));