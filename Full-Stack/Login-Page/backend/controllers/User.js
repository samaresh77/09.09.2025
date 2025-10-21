import express from 'express'
const app = express();

const handleRegister = async (req, res) => {
    const {name, email} = req.body
    res.send("from register");
}

module.exports =  handleRegister