import express from "express";
import {
  mainController,
  resultController,
} from "../controllers/golbalController";

const globalRouter = express.Router();

globalRouter.get("/", mainController);
globalRouter.get("/result", resultController);

export default globalRouter;