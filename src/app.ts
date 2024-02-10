const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

app.use('/', (req: any, res: any) => {
    res.sendFile(path.join(__dirname, './pages/index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
