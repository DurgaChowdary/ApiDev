const express = require('express');
const app = express();
const port = 2300;

app.use(express.json()); // Middleware for parsing JSON


// App Routes
const PetRouter = require('./routes/pets');
app.use('/api/pets', PetRouter);



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});