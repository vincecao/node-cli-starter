import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../controllers/user-controller";
import { Router, Request } from "express";
import { validate } from "../middleware/v2-validate";
import { userQuerySchema, userIdParamsSchema, userBodySchema } from "../schemas/v2-user-schema";
import type { UserBody, UserQuery, UserParams } from "../schemas/v2-user-schema";

/**
 * Creates a versioned router by prefixing routes with a version number.
 * @param version - The API version (e.g., 'v1', 'v2').
 * @param routesBuilder - A function that defines the routes for the version.
 * @returns A router with versioned routes.
 */
const versionedRouter = (version: string, routesBuilder: (router: Router) => Router) => {
  return Router().use(`/${version}`, routesBuilder(Router()));
};

const v1Routes = (router: Router) => {
  router.get("/users", getUsers);
  router.get("/users/:id", getUserById);
  router.post("/users/", createUser);
  router.put("/users/:id", updateUser);
  router.delete("/users/:id", deleteUser);
  return router;
};

const v2Routes = (router: Router) => {
  router.get("/users", validate({ query: userQuerySchema }), getUsers);
  router.get("/users/:id", validate({ params: userIdParamsSchema }), getUserById);
  router.post("/users", validate({ body: userBodySchema }), createUser);
  router.put("/users/:id", validate({ body: userBodySchema }), updateUser);
  router.delete("/users/:id", validate({ params: userIdParamsSchema }), deleteUser);
  return router;
};

const router = Router();
router.use(versionedRouter("v1", v1Routes));
router.use(versionedRouter("v2", v2Routes));

export default router;
