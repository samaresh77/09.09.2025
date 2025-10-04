const express = require('express');
const app = express();
const port = 5000;
const data = require('./MOCK_DATA.json');
const fs = require('fs');

//middleware
app.use(express.json());

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

app.post('/api/users', (req, res) => {
    const newUser = req.body;
    // console.log(newUser);
    data.push(newUser);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, data) => {
        if(err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'User created', user: newUser });
    });
    
})

app.patch('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updatedUser = req.body;
    const index = data.findIndex((d) => d.id === userId);
    if(index !== -1) {
        data[index] = { ...data[index], ...updatedUser };
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, data) => {
            if(err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            res.json({ message: `User with ID ${userId} updated`, updatedUser: data[index] });
        });
    } else {
        res.status(404).json({ message: `User with ID ${userId} not found` });
    }
})

app.put('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const updatedUser = req.body;
    const index = data.findIndex((d) => d.id === userId);
    if(index !== -1) {
        data[index] = { ...data[index], ...updatedUser };
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, data) => {
            if(err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            res.json({ message: `User with ID ${userId} updated`, updatedUser: data[index] });
        });
    } else {
        res.status(404).json({ message: `User with ID ${userId} not found` });
    }
})

app.delete('/api/users/:id', (req, res) => {
    const userId = Number(req.params.id);
    const index = data.findIndex((d) => d.id === userId);
    if(index !== -1) {
        data.splice(index, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (err, data) => {
            if(err) {
                console.error(err);
                return res.status(500).json({ message: 'Internal Server Error' });
            }
            res.json({ message: `User with ID ${userId} deleted` });
        });
    } else {
        res.status(404).json({ message: `User with ID ${userId} not found` });
    }
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})