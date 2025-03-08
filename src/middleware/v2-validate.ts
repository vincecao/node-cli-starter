import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError, z } from "zod";

type Schemas = {
  body?: AnyZodObject;
  query?: AnyZodObject;
  params?: AnyZodObject;
};

// Middleware to validate request data
export const validate = (schemas: Schemas) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await z
      .object({
        body: schemas.body ?? z.any(),
        query: schemas.query ?? z.any(),
        params: schemas.params ?? z.any(),
      })
      .parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

    // Apply transformed values back to the request
    req.body = result.body;
    req.query = result.query;
    req.params = result.params;

    next(); // Proceed to the next middleware/route handler
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      return res.status(400).json({
        status: "error",
        message: "Validation failed",
        errors: error.errors,
      });
    }
    next(error); // Pass other errors to the global error handler
  }
};
