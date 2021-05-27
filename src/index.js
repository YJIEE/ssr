import React from 'react';
import express from 'express';
import Home from './pages/Home/index.jsx';
import { renderToString } from 'react-dom/server';

const app = express();

app.get('/', function (req, res) {
    res.send(
        `<html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                ${renderToString(<Home />)}
            </body>
        </html>`
    );
})

app.listen(3000)