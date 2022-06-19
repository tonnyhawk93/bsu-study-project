import express from "express";
import path from "path";
import {createRandomDiagnosis, isAnalysisOk, createOkMessage} from "./fakeDiagnosisGenerator/fakeDiagnosisGenerator.js";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const PORT = process.env.port || 4000;

app.use(express.static(path.join(__dirname, 'front/build')));

app.get('/api/diagnosis', (req, res) => {
    const diagnosis = isAnalysisOk() ? createOkMessage() : createRandomDiagnosis();
    res.send(JSON.stringify(diagnosis)); 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});

app.listen(PORT, () => {
    console.log(`server listen port ${PORT}`)
});
