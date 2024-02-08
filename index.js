import path from 'path'
import express from 'express'

// Create an Express app
const app = express();
const port = Math.floor(Math.random() * (5000 - 100) + 5000)

app.use(express.static('public'));


// Define a route for the homepage
app.get('/web', (req, res) => {

    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is live at http://localhost:${port}`);
});
