require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {kafka} = require('./kafka');
const modules = require('./modules');

let callAndWait = () => {
    console.log('Kafka client has not connected yet, message will be lost');
};

(async () => {
    if (process.env.MOCK_KAFKA === 'false') {
        const k = await kafka();
        callAndWait = k.callAndWait;
    } else {
        callAndWait = async (fn, ...params) => modules[fn](...params);
        console.log('Connected to dev kafka');
    }
})();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true,
}));


app.post('/sum', async (req, res) => {
    const sum = await callAndWait('sum', req.body.a, req.body.b);
    res.json({sum});
})


app.listen(parseInt(process.env.PORT));
module.exports = app; // used by mocha tests