import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export function doRouting(app) {
    console.log('setup routing');
    app.use(express.static(__dirname + '/src/html'));
    app.use(express.static(__dirname + '/html'));
    app.use(express.static(__dirname + '/models'));
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./html/index.html"));
    });
    app.get("/chat", (req, res) => {
        res.sendFile(path.join(__dirname, "./html/chat.html"));
    });
    app.get("/three", (req, res) => {
        res.sendFile(path.join(__dirname, "./html/three.html"));
    });
    app.get("/discord", (req, res) => {
        res.sendFile(path.join(__dirname, "./html/discord.html"));
    })
};