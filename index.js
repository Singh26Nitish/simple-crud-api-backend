const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js")
const app = express()


// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send("Hello from node API lah bllah");
});




mongoose.connect("mongodb+srv://nkushwaha791:Nitish%2326@nodeapi.wtz6rjt.mongodb.net/Node-API?retryWrites=true&w=majority&appName=nodeAPI")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
})
.catch((err) => {
    console.error("Connection Failed:", err);
});

