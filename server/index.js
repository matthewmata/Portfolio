const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.listen(port, () => console.log(`Matthew's amazing Portfolio listening on port ${port}!`));