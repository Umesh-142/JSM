// import Task from "../models/taskModel.js";
// import asyncHandler from "../middleware/asyncHandler.js";

// // @desc    Get all tasks for a user
// // @route   GET /api/tasks
// // @access  Private
// const getTasks = asyncHandler(async (req, res) => {
//   const tasks = await Task.find({ user: req.user._id });
//   res.json(tasks);
// });

// // @desc    Create a new task
// // @route   POST /api/tasks
// // @access  Private
// const createTask = asyncHandler(async (req, res) => {
//   const { title, description, category, priority } = req.body;

//   const task = await Task.create({
//     user: req.user._id,
//     title,
//     description,
//     category,
//     priority,
//     status: "pending",
//   });

//   res.status(201).json(task);
// });

// // @desc    Get a task by ID
// // @route   GET /api/tasks/:id
// // @access  Private
// const getTaskById = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to access this task");
//   }

//   res.json(task);
// });

// // @desc    Update a task
// // @route   PUT /api/tasks/:id
// // @access  Private
// const updateTask = asyncHandler(async (req, res) => {
//   const { title, description, category, priority, status } = req.body;

//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to update this task");
//   }

//   task.title = title || task.title;
//   task.description = description || task.description;
//   task.category = category || task.category;
//   task.priority = priority || task.priority;
//   task.status = status || task.status;

//   const updatedTask = await task.save();
//   res.json(updatedTask);
// });

// // @desc    Delete a task
// // @route   DELETE /api/tasks/:id
// // @access  Private
// const deleteTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to delete this task");
//   }

//   await task.deleteOne();
//   res.json({ message: "Task removed" });
// });

// export { getTasks, createTask, getTaskById, updateTask, deleteTask };

// import Task from "../models/taskModel.js";
// import asyncHandler from "../middleware/asyncHandler.js";

// // @desc    Get all tasks for a user
// // @route   GET /api/tasks
// // @access  Private
// const getTasks = asyncHandler(async (req, res) => {
//   const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
//   res.status(200).json(tasks);
// });

// // @desc    Create a new task
// // @route   POST /api/tasks
// // @access  Private
// const createTask = asyncHandler(async (req, res) => {
//   const { title, description, category, priority, deadline } = req.body;

//   // Validate required fields
//   if (!title || !category) {
//     res.status(400);
//     throw new Error("Title and category are required fields");
//   }

//   const task = await Task.create({
//     user: req.user._id,
//     title,
//     description: description || "",
//     category,
//     priority: priority || "medium",
//     deadline: deadline ? new Date(deadline) : null,
//     status: "pending",
//   });

//   res.status(201).json({
//     _id: task._id,
//     user: task.user,
//     title: task.title,
//     description: task.description,
//     category: task.category,
//     priority: task.priority,
//     deadline: task.deadline,
//     status: task.status,
//     createdAt: task.createdAt,
//     updatedAt: task.updatedAt,
//   });
// });

// // @desc    Get a task by ID
// // @route   GET /api/tasks/:id
// // @access  Private
// const getTaskById = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to access this task");
//   }

//   res.status(200).json({
//     _id: task._id,
//     user: task.user,
//     title: task.title,
//     description: task.description,
//     category: task.category,
//     priority: task.priority,
//     deadline: task.deadline,
//     status: task.status,
//     createdAt: task.createdAt,
//     updatedAt: task.updatedAt,
//   });
// });

// // @desc    Update a task
// // @route   PUT /api/tasks/:id
// // @access  Private
// const updateTask = asyncHandler(async (req, res) => {
//   const { title, description, category, priority, status, deadline } = req.body;

//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to update this task");
//   }

//   // Update task fields
//   task.title = title || task.title;
//   task.description = description !== undefined ? description : task.description;
//   task.category = category || task.category;
//   task.priority = priority || task.priority;
//   task.status = status || task.status;

//   // Special handling for deadline to allow null values
//   if (deadline !== undefined) {
//     task.deadline = deadline ? new Date(deadline) : null;
//   }

//   const updatedTask = await task.save();

//   res.status(200).json({
//     _id: updatedTask._id,
//     user: updatedTask.user,
//     title: updatedTask.title,
//     description: updatedTask.description,
//     category: updatedTask.category,
//     priority: updatedTask.priority,
//     deadline: updatedTask.deadline,
//     status: updatedTask.status,
//     createdAt: updatedTask.createdAt,
//     updatedAt: updatedTask.updatedAt,
//   });
// });

// // @desc    Delete a task
// // @route   DELETE /api/tasks/:id
// // @access  Private
// const deleteTask = asyncHandler(async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   if (!task) {
//     res.status(404);
//     throw new Error("Task not found");
//   }

//   // Check if task belongs to user
//   if (task.user.toString() !== req.user._id.toString()) {
//     res.status(403);
//     throw new Error("Not authorized to delete this task");
//   }

//   await task.deleteOne();
//   res.status(200).json({ message: "Task removed successfully" });
// });

// export { getTasks, createTask, getTaskById, updateTask, deleteTask };

import asyncHandler from "../middleware/asyncHandler.js";
import Task from "../models/taskModel.js";

// @desc    Get all tasks for a user
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id }).sort({ createdAt: -1 });
  res.status(200).json(tasks);
});

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, category, priority, complexity, deadline } =
    req.body;

  if (!title || !category) {
    res.status(400);
    throw new Error("Title and category are required fields");
  }

  const task = await Task.create({
    user: req.user._id,
    title,
    description: description || "",
    category,
    priority: priority || "medium",
    complexity: complexity || 5,
    deadline: deadline ? new Date(deadline) : null,
    status: "pending",
  });

  res.status(201).json(task);
});

// @desc    Get recommended task
// @route   GET /api/tasks/recommendation
// @access  Private
const getRecommendedTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({
    user: req.user._id,
    status: "pending",
  });

  if (!tasks || tasks.length === 0) {
    res.status(404);
    throw new Error("No pending tasks found");
  }

  // Calculate scores for all tasks
  const scoredTasks = tasks.map((task) => ({
    task,
    score: task.calculateRecommendationScore(),
  }));

  // Sort by highest score
  scoredTasks.sort((a, b) => b.score - a.score);

  res.status(200).json({
    recommendedTask: scoredTasks[0].task,
    score: scoredTasks[0].score,
    totalTasks: tasks.length,
  });
});

// @desc    Get a task by ID
// @route   GET /api/tasks/:id
// @access  Private
const getTaskById = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to access this task");
  }

  res.status(200).json(task);
});

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    priority,
    complexity,
    status,
    deadline,
  } = req.body;

  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to update this task");
  }

  task.title = title || task.title;
  task.description = description !== undefined ? description : task.description;
  task.category = category || task.category;
  task.priority = priority || task.priority;
  task.complexity = complexity || task.complexity;
  task.status = status || task.status;

  if (deadline !== undefined) {
    task.deadline = deadline ? new Date(deadline) : null;
  }

  const updatedTask = await task.save();
  res.status(200).json(updatedTask);
});

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (task.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to delete this task");
  }

  await task.deleteOne();
  res.status(200).json({ message: "Task removed successfully" });
});

export {
  getTasks,
  createTask,
  getRecommendedTask,
  getTaskById,
  updateTask,
  deleteTask,
};
