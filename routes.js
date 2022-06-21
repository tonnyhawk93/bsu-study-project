import {Router} from "express";
import {createRandomDiagnosis, isAnalysisOk, createOkMessage, getDiagnosisList, getRecommendation, getRandomCount} from "./fakeDiagnosisGenerator/fakeDiagnosisGenerator.js";

const apiRouter = new Router();

apiRouter
    .get('/diagnosis', (req, res) => {
        const diagnosis = isAnalysisOk() ? createOkMessage() : createRandomDiagnosis(getRandomCount());
        res.send(JSON.stringify(diagnosis)); 
    })
    .get('/diagnosisList', (req, res) => {
        const diagnosis = getDiagnosisList();
        res.send(JSON.stringify(diagnosis)); 
    })
    .get('/recommendation', (req, res) => {
        const recommendation = getRecommendation();
        res.send(JSON.stringify(recommendation)); 
    });

export {apiRouter};