import {Router} from "express";
import {createRandomDiagnosis, isAnalysisOk, createOkMessage, getDiagnosisList, getRandomCount} from "./fakeDiagnosisGenerator/fakeDiagnosisGenerator.js";

const apiRouter = new Router();

apiRouter
    .get('/diagnosis', (req, res) => {
        const diagnosis = isAnalysisOk() ? createOkMessage() : createRandomDiagnosis(getRandomCount());
        res.send(JSON.stringify(diagnosis)); 
    })
    .get('/diagnosisList', (req, res) => {
        const diagnosis = getDiagnosisList();
        res.send(JSON.stringify(diagnosis)); 
    });

export {apiRouter};