const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory (or modify to a specific folder)
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});