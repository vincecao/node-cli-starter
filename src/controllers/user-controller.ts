import { Request, Response } from "express";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  usPhone: string;
}

// Mock database
let users: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 20, usPhone: "(123) 456-7890" },
  { id: 2, name: "Jane Doe", email: "jane@example.com", age: 30, usPhone: "(987) 654-3210" },
];

// Get all users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json(users);
};

// Get user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).json(user);
};

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  const newUser: User = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update a user
export const updateUser = (req: Request, res: Response): Promise<void> | void => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  users = [...users.filter((u) => u.id != userId), { ...user, ...(req.body as Partial<User>) }];
  res.status(200).json(user);
};

// Delete a user
export const deleteUser = (req: Request, res: Response): Promise<void> | void => {
  const userId = parseInt(req.params.id);
  users = users.filter((u) => u.id !== userId);
  res.status(204).send();
};
