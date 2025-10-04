const express = require('express');
const app = express();
const port = 5000;
const data = require('./MOCK_DATA.json');

//basic routes
//for mobile 
app.get('/users', (req,res) => {
    const html = `
    <ul>
    ${data.map((val) => `<li>${val.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})
//for laptop
app.get('/api/users', (req, res) => {
    res.json(data);
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const val = data.find((d) => d.id === id );
    res.json(val);
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})