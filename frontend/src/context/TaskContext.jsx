// "use client";

// import { createContext, useContext, useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import api from "../services/api";
// import { useAuth } from "./AuthContext";

// const TaskContext = createContext();

// export const useTasks = () => useContext(TaskContext);

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState([]);
//   const [categories, setCategories] = useState([
//     "Work",
//     "Personal",
//     "Shopping",
//     "Health",
//     "Education",
//   ]);
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user) {
//       fetchTasks();
//     } else {
//       setTasks([]);
//     }
//   }, [user]);

//   const fetchTasks = async () => {
//     try {
//       const response = await api.get("/api/tasks");
//       setTasks(response.data);

//       // Update categories with unique categories from tasks
//       const taskCategories = response.data.map((task) => task.category);
//       const uniqueCategories = [...new Set([...categories, ...taskCategories])];
//       setCategories(uniqueCategories);
//     } catch (error) {
//       toast.error("Failed to fetch tasks");
//     }
//   };

//   const addTask = async (taskData) => {
//     try {
//       const response = await api.post("/api/tasks", taskData);
//       setTasks([...tasks, response.data]);

//       // Add new category if it doesn't exist
//       if (!categories.includes(response.data.category)) {
//         setCategories([...categories, response.data.category]);
//       }

//       toast.success("Task added successfully");
//     } catch (error) {
//       toast.error("Failed to add task");
//     }
//   };

//   const updateTask = async (taskId, taskData) => {
//     try {
//       const response = await api.put(`/api/tasks/${taskId}`, taskData);
//       setTasks(
//         tasks.map((task) => (task._id === taskId ? response.data : task))
//       );

//       // Add new category if it doesn't exist
//       if (!categories.includes(response.data.category)) {
//         setCategories([...categories, response.data.category]);
//       }

//       toast.success("Task updated successfully");
//     } catch (error) {
//       toast.error("Failed to update task");
//     }
//   };

//   const deleteTask = async (taskId) => {
//     try {
//       await api.delete(`/api/tasks/${taskId}`);
//       setTasks(tasks.filter((task) => task._id !== taskId));
//       toast.success("Task deleted successfully");
//     } catch (error) {
//       toast.error("Failed to delete task");
//     }
//   };

//   const toggleTaskStatus = async (taskId) => {
//     try {
//       const task = tasks.find((t) => t._id === taskId);
//       const newStatus = task.status === "completed" ? "pending" : "completed";

//       const response = await api.put(`/api/tasks/${taskId}`, {
//         ...task,
//         status: newStatus,
//       });

//       setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
//     } catch (error) {
//       toast.error("Failed to update task status");
//     }
//   };

//   const value = {
//     tasks,
//     categories,
//     addTask,
//     updateTask,
//     deleteTask,
//     toggleTaskStatus,
//   };

//   return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
// };

"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([
    "Work",
    "Personal",
    "Shopping",
    "Health",
    "Education",
  ]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchTasks();
    } else {
      setTasks([]);
    }
  }, [user]);

  const fetchTasks = async () => {
    try {
      const response = await api.get("/api/tasks");
      setTasks(response.data);

      // Update categories with unique categories from tasks
      const taskCategories = response.data.map((task) => task.category);
      const uniqueCategories = [...new Set([...categories, ...taskCategories])];
      setCategories(uniqueCategories);
    } catch (error) {
      toast.error("Failed to fetch tasks");
    }
  };

  const addTask = async (taskData) => {
    try {
      const response = await api.post("/api/tasks", {
        ...taskData,
        complexity: Number(taskData.complexity) || 5, // Ensure complexity is a number
        deadline: taskData.deadline || null,
      });
      setTasks([...tasks, response.data]);

      // Add new category if it doesn't exist
      if (!categories.includes(response.data.category)) {
        setCategories([...categories, response.data.category]);
      }

      toast.success("Task added successfully");
      return response.data; // Return the new task
    } catch (error) {
      toast.error("Failed to add task");
      throw error;
    }
  };

  const updateTask = async (taskId, taskData) => {
    try {
      const response = await api.put(`/api/tasks/${taskId}`, {
        ...taskData,
        complexity: Number(taskData.complexity) || 5, // Ensure complexity is a number
        deadline: taskData.deadline || null,
      });
      setTasks(
        tasks.map((task) => (task._id === taskId ? response.data : task))
      );

      // Add new category if it doesn't exist
      if (!categories.includes(response.data.category)) {
        setCategories([...categories, response.data.category]);
      }

      toast.success("Task updated successfully");
      return response.data; // Return the updated task
    } catch (error) {
      toast.error("Failed to update task");
      throw error;
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await api.delete(`/api/tasks/${taskId}`);
      setTasks(tasks.filter((task) => task._id !== taskId));
      toast.success("Task deleted successfully");
    } catch (error) {
      toast.error("Failed to delete task");
      throw error;
    }
  };

  const toggleTaskStatus = async (taskId) => {
    try {
      const task = tasks.find((t) => t._id === taskId);
      const newStatus = task.status === "completed" ? "pending" : "completed";

      const response = await api.put(`/api/tasks/${taskId}`, {
        ...task,
        status: newStatus,
      });

      setTasks(tasks.map((t) => (t._id === taskId ? response.data : t)));
      toast.success(`Task marked as ${newStatus}`);
    } catch (error) {
      toast.error("Failed to update task status");
      throw error;
    }
  };

  const getRecommendedTask = async () => {
    try {
      const response = await api.get("/api/tasks/recommendation");
      return response.data;
    } catch (error) {
      toast.error("Failed to get task recommendation");
      throw error;
    }
  };

  const calculateTaskScore = (task) => {
    const now = new Date();
    let score = 0;

    // Priority scoring (40% weight)
    if (task.priority === "high") score += 40;
    else if (task.priority === "medium") score += 25;
    else score += 10;

    // Complexity scoring (30% weight - inverse relationship)
    score += (10 - (task.complexity || 5)) * 3;

    // Deadline scoring (30% weight)
    if (task.deadline) {
      const hoursUntilDeadline =
        (new Date(task.deadline) - now) / (1000 * 60 * 60);
      if (hoursUntilDeadline < 24) score += 30;
      else if (hoursUntilDeadline < 72) score += 20;
      else if (hoursUntilDeadline < 168) score += 10;
    }

    return score;
  };

  const value = {
    tasks,
    categories,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    getRecommendedTask,
    calculateTaskScore, // Optional: if you want to calculate scores on client side
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
