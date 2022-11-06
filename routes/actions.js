import express from "express";
const router = express.Router();
import fetch from 'node-fetch';

const users = [];

router.get('/greetings', (req, res) => {
    return res.status(200).json({
        message: users
    })
})

router.get('/getdata', async(req,res) => {
    try {
        const url = 'https://www.breakingbadapi.com/api/characters';
        const players = await fetch(url, {method: 'get'})
        const data = await players.json();

        return res.status(200).json({
            message: data
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
})

router.post('/login', (req, res) => {
    try {
        const {username,password} = req.body;
        const _user = {
            email: username,
            pass: password
        }
        users.push(_user);
        return res.status(200).json({
            message: 'User added'
        });
    } catch (error) {
        return res.status(500).json({
            message: error
        });
    }
})

export default router;