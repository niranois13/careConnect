import type { Response } from "express";
import { z } from "zod";
import { Prisma } from "../prisma/generated/index.js";

export function handleError(error: unknown, res: Response, context: string = "Unknown") {

  if (error instanceof z.ZodError) {
    console.error(`ZodError in ${context}:`, error.issues);
    return res.status(400).json({ error: error.issues });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    switch (error.code) {
      case "P2002":
        return res.status(400).json({ error: "Resource already exists." });
      case "P2003":
        return res.status(400).json({ error: "Invalid foreign key reference." });
      case "P2000":
        return res.status(400).json({ error: "Input too long for a field." });
      case "P2025":
        return res.status(404).json({ error: "Resource not found." });
      default:
        console.error(`PrismaError:${error.code} in ${context}:`, error.message);
        return res.status(500).json({ error: "Unexpected Prisma error." });
    }
  }

  if (error instanceof Error) {
    console.error(`Error in ${context}:`, error.message, error.stack);
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }

  console.error(`UnknownError in ${context}:`, error);
  return res.status(500).json({ error: "Internal Server Error" });
}
