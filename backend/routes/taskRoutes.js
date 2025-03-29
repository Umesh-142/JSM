// import express from "express";
// import {
//   getTasks,
//   createTask,
//   getTaskById,
//   updateTask,
//   deleteTask,
// } from "../controllers/taskController.js";
// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// router.route("/").get(protect, getTasks).post(protect, createTask);

// router
//   .route("/:id")
//   .get(protect, getTaskById)
//   .put(protect, updateTask)
//   .delete(protect, deleteTask);

// export default router;

import express from "express";
import {
  getTasks,
  createTask,
  getRecommendedTask,
  getTaskById,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getTasks).post(protect, createTask);

router.route("/recommendation").get(protect, getRecommendedTask);

router
  .route("/:id")
  .get(protect, getTaskById)
  .put(protect, updateTask)
  .delete(protect, deleteTask);

export default router;
