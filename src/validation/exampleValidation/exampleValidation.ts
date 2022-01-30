import { RequestHandler } from "express";
import validator from "../util/validator";
import { exampleSchema } from "./exampleSchema";

export const getExampleDataValidation: RequestHandler = (req, res, next) =>
  validator(exampleSchema.getExampleData, req.body, next);