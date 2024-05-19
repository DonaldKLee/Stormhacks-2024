const cohere = require('cohere-ai');

const express = require('express');
const app = express();
const port = 3000;

process.env.cohereENV; // "foobar"

app.get('/', (req, res) => {
    res.send('Hello from Node.js server!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/getName', (req, res) => {
    
    cohere.init(process.env.cohereENV); // This is your trial API key

    (async () => {
        const response = await cohere.generate({
            model: 'command',
            prompt: `It's the same as Donald trump. Guest my name:`,
            max_tokens: 740,
            temperature: 1,
            k: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
        });
        
    console.log(`Response: ${response.body.generations[0].text}`);
    
    res.send(response)
})();
})