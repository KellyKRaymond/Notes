const express = require('express');
const db = require('./queries.js');
const bodyParser = require('body-parser');

const app = express();
const port = 3030;

app.use(bodyParser.json());
app.get('/', (request, response) => { response.json({ info: 'Node.js, Express and Postgres API'})})
app.get('/contacts', db.getContacts);
app.get('/contact', db.getContact);
app.post('/contacts', db.addContact);
app.delete("/contact/:id", db.deleteContact);
app.put('/contacts', db.updateContact);

app.listen(port, () => { console.log(`App running on port ${port}.`) })
