import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Example from "../models/Example";

export const getExamples:RequestHandler = (req, res, next) => {
    res.json({message: "Hello Controller!"});
};

export const getExampleData:RequestHandler = async(req, res, next) => {
    
    const { name, id } : IEexampleData = req.body;
    try {
        const example = await Example.findOne({name});

        if(example) return next(createHttpError(406, "Name already exist!!"));

        const newExample = new Example({name, id});

        await newExample.save(); 

        res.json({name, id});

    } catch (error) {
        return next(createHttpError.InternalServerError);
    }
};