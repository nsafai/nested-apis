const express = require('express');
const app = express();

// Genres hardcoded data
genres = [
    {
        id: 0,
        title: 'Horror'
    },
    {
        id: 1,
        title: 'Romance'
    },
    {
        id: 2,
        title: 'Comedy'
    },
    {
        id: 3,
        title: 'Action'
    }
]

app.get('/', (req, res) =>{
    res.json(genres)
})

app.get('/:genre', (req, res, next) =>{
    let genre = req.params.genre;
    res.json(genres[genre].title)
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))
