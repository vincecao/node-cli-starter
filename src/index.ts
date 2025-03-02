import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
