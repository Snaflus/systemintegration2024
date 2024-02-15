import express from 'express';

const app = express();

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

app.get('/requestFastAPI', (req, res) => {
    console.log('Request to FastAPI'); res.send('Request to FastAPI')
});
