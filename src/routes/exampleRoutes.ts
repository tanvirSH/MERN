import { Router } from "express";
import { getExampleData, getExamples } from "../controllers/exampleController";
import { getExampleDataValidation } from "../validation/exampleValidation/exampleValidation";

const router = Router();

router.get('/', getExamples);
router.post('/', getExampleDataValidation, getExampleData);

export default router;