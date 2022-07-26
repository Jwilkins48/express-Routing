const express = require('express');
const routes = require('./routes/newsPage');
const path = require('path');
const app = express()

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

app.listen(3000, () => (console.log('Server running on port 3000')));