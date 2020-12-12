const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const router = require('express').Router();

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log('App listening on PORT: ${port}')
})

// app.use()

// app.get('/', (req, res) => {
//     res.send('Welcome to the ROOT')
// })

// router.get('/notes', (rew,res) => {
//     res.sendFile(path.join(_dirname, './public/index.html'))
// })

