import type { Request, Response, NextFunction } from "express";
import { z } from "zod";

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(1),
});

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({
      message: "Datos inválidos",
      errors: result.error.issues,
    });
    return;
  }
  next();
}
