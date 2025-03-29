// "use client";

// import { useState } from "react";
// import {
//   Edit,
//   Trash2,
//   CheckCircle,
//   Circle,
//   Search,
//   Filter,
// } from "lucide-react";
// import { useTasks } from "../context/TaskContext";

// const TaskList = ({ setEditTask }) => {
//   const { tasks, deleteTask, toggleTaskStatus, categories } = useTasks();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [filterPriority, setFilterPriority] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "low":
//         return "text-green-500";
//       case "medium":
//         return "text-yellow-500";
//       case "high":
//         return "text-red-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const matchesSearch =
//       task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory
//       ? task.category === filterCategory
//       : true;
//     const matchesPriority = filterPriority
//       ? task.priority === filterPriority
//       : true;
//     const matchesStatus = filterStatus
//       ? filterStatus === "completed"
//         ? task.status === "completed"
//         : task.status === "pending"
//       : true;

//     return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
//   });

//   const handleEdit = (task) => {
//     setEditTask(task);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="card">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Your Tasks</h2>
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="btn-outline flex items-center text-sm"
//         >
//           <Filter size={16} className="mr-1" />
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </button>
//       </div>

//       <div className="mb-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             className="input-field pl-10"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>
//       </div>

//       {showFilters && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Category
//             </label>
//             <select
//               className="input-field"
//               value={filterCategory}
//               onChange={(e) => setFilterCategory(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Priority
//             </label>
//             <select
//               className="input-field"
//               value={filterPriority}
//               onChange={(e) => setFilterPriority(e.target.value)}
//             >
//               <option value="">All Priorities</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Status
//             </label>
//             <select
//               className="input-field"
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//             >
//               <option value="">All Statuses</option>
//               <option value="pending">Pending</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {filteredTasks.length === 0 ? (
//         <div className="text-center py-8 text-gray-500">
//           {tasks.length === 0
//             ? "You don't have any tasks yet. Add your first task above!"
//             : "No tasks match your filters."}
//         </div>
//       ) : (
//         <div className="space-y-3">
//           {filteredTasks.map((task) => (
//             <div
//               key={task._id}
//               className={`border rounded-lg p-4 ${
//                 task.status === "completed" ? "bg-gray-50" : "bg-white"
//               }`}
//             >
//               <div className="flex items-start justify-between">
//                 <div className="flex items-start gap-3 flex-1">
//                   <button
//                     onClick={() => toggleTaskStatus(task._id)}
//                     className="mt-1 flex-shrink-0"
//                   >
//                     {task.status === "completed" ? (
//                       <CheckCircle className="text-emerald-500" size={20} />
//                     ) : (
//                       <Circle className="text-gray-400" size={20} />
//                     )}
//                   </button>

//                   <div className="flex-1">
//                     <h3
//                       className={`font-medium ${
//                         task.status === "completed"
//                           ? "line-through text-gray-500"
//                           : ""
//                       }`}
//                     >
//                       {task.title}
//                     </h3>

//                     {task.description && (
//                       <p
//                         className={`text-sm mt-1 ${
//                           task.status === "completed"
//                             ? "text-gray-400"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {task.description}
//                       </p>
//                     )}

//                     <div className="flex flex-wrap gap-2 mt-2">
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//                         {task.category}
//                       </span>

//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           task.priority === "low"
//                             ? "bg-green-100 text-green-800"
//                             : task.priority === "medium"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {task.priority.charAt(0).toUpperCase() +
//                           task.priority.slice(1)}{" "}
//                         Priority
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-1 ml-2">
//                   <button
//                     onClick={() => handleEdit(task)}
//                     className="p-1.5 text-gray-500 hover:text-indigo-600 rounded-md hover:bg-gray-100"
//                   >
//                     <Edit size={18} />
//                   </button>
//                   <button
//                     onClick={() => deleteTask(task._id)}
//                     className="p-1.5 text-gray-500 hover:text-red-600 rounded-md hover:bg-gray-100"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskList;

// "use client";

// import { useState } from "react";
// import {
//   Edit,
//   Trash2,
//   CheckCircle,
//   Circle,
//   Search,
//   Filter,
// } from "lucide-react";
// import { useTasks } from "../context/TaskContext";

// const TaskList = ({ setEditTask }) => {
//   const { tasks, deleteTask, toggleTaskStatus, categories } = useTasks();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("");
//   const [filterPriority, setFilterPriority] = useState("");
//   const [filterStatus, setFilterStatus] = useState("");
//   const [showFilters, setShowFilters] = useState(false);

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "low":
//         return "text-green-500";
//       case "medium":
//         return "text-yellow-500";
//       case "high":
//         return "text-red-500";
//       default:
//         return "text-gray-500";
//     }
//   };

//   const filteredTasks = tasks.filter((task) => {
//     const matchesSearch =
//       task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       task.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = filterCategory
//       ? task.category === filterCategory
//       : true;
//     const matchesPriority = filterPriority
//       ? task.priority === filterPriority
//       : true;
//     const matchesStatus = filterStatus
//       ? filterStatus === "completed"
//         ? task.status === "completed"
//         : task.status === "pending"
//       : true;

//     return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
//   });

//   const handleEdit = (task) => {
//     setEditTask(task);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <div className="card">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">Your Tasks</h2>
//         <button
//           onClick={() => setShowFilters(!showFilters)}
//           className="btn-outline flex items-center text-sm"
//         >
//           <Filter size={16} className="mr-1" />
//           {showFilters ? "Hide Filters" : "Show Filters"}
//         </button>
//       </div>

//       <div className="mb-4">
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search tasks..."
//             className="input-field pl-10"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
//         </div>
//       </div>

//       {showFilters && (
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Category
//             </label>
//             <select
//               className="input-field"
//               value={filterCategory}
//               onChange={(e) => setFilterCategory(e.target.value)}
//             >
//               <option value="">All Categories</option>
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Priority
//             </label>
//             <select
//               className="input-field"
//               value={filterPriority}
//               onChange={(e) => setFilterPriority(e.target.value)}
//             >
//               <option value="">All Priorities</option>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Filter by Status
//             </label>
//             <select
//               className="input-field"
//               value={filterStatus}
//               onChange={(e) => setFilterStatus(e.target.value)}
//             >
//               <option value="">All Statuses</option>
//               <option value="pending">Pending</option>
//               <option value="completed">Completed</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {filteredTasks.length === 0 ? (
//         <div className="text-center py-8 text-gray-500">
//           {tasks.length === 0
//             ? "You don't have any tasks yet. Add your first task above!"
//             : "No tasks match your filters."}
//         </div>
//       ) : (
//         <div className="space-y-3">
//           {filteredTasks.map((task) => (
//             <div
//               key={task._id}
//               className={`border rounded-lg p-4 ${
//                 task.status === "completed" ? "bg-gray-50" : "bg-white"
//               }`}
//             >
//               <div className="flex items-start justify-between">
//                 <div className="flex items-start gap-3 flex-1">
//                   <button
//                     onClick={() => toggleTaskStatus(task._id)}
//                     className="mt-1 flex-shrink-0"
//                   >
//                     {task.status === "completed" ? (
//                       <CheckCircle className="text-emerald-500" size={20} />
//                     ) : (
//                       <Circle className="text-gray-400" size={20} />
//                     )}
//                   </button>

//                   <div className="flex-1">
//                     <h3
//                       className={`font-medium ${
//                         task.status === "completed"
//                           ? "line-through text-gray-500"
//                           : ""
//                       }`}
//                     >
//                       {task.title}
//                     </h3>

//                     {task.description && (
//                       <p
//                         className={`text-sm mt-1 ${
//                           task.status === "completed"
//                             ? "text-gray-400"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {task.description}
//                       </p>
//                     )}

//                     <div className="flex flex-wrap gap-2 mt-2">
//                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//                         {task.category}
//                       </span>

//                       <span
//                         className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
//                           task.priority === "low"
//                             ? "bg-green-100 text-green-800"
//                             : task.priority === "medium"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {task.priority.charAt(0).toUpperCase() +
//                           task.priority.slice(1)}{" "}
//                         Priority
//                       </span>

//                       {task.deadline && (
//                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
//                           Due:{" "}
//                           {new Date(task.deadline).toLocaleString("en-US", {
//                             month: "short",
//                             day: "numeric",
//                             year: "numeric",
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex gap-1 ml-2">
//                   <button
//                     onClick={() => handleEdit(task)}
//                     className="p-1.5 text-gray-500 hover:text-indigo-600 rounded-md hover:bg-gray-100"
//                   >
//                     <Edit size={18} />
//                   </button>
//                   <button
//                     onClick={() => deleteTask(task._id)}
//                     className="p-1.5 text-gray-500 hover:text-red-600 rounded-md hover:bg-gray-100"
//                   >
//                     <Trash2 size={18} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default TaskList;

"use client";

import { useState } from "react";
import {
  Edit,
  Trash2,
  CheckCircle,
  Circle,
  Search,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTasks } from "../context/TaskContext";
import TaskRecommendation from "./TaskRecommendation";

const TaskList = ({ setEditTask }) => {
  const { tasks, deleteTask, toggleTaskStatus, categories } = useTasks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterPriority, setFilterPriority] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterComplexity, setFilterComplexity] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "asc",
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getComplexityColor = (complexity) => {
    if (complexity <= 3) return "text-green-500";
    if (complexity <= 7) return "text-yellow-500";
    return "text-red-500";
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (!sortConfig.key) return 0;

    // Special handling for dates
    if (sortConfig.key === "deadline") {
      const dateA = a.deadline ? new Date(a.deadline) : null;
      const dateB = b.deadline ? new Date(b.deadline) : null;

      if (!dateA && !dateB) return 0;
      if (!dateA) return sortConfig.direction === "asc" ? 1 : -1;
      if (!dateB) return sortConfig.direction === "asc" ? -1 : 1;

      return sortConfig.direction === "asc" ? dateA - dateB : dateB - dateA;
    }

    // Default sorting for other fields
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredTasks = sortedTasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory
      ? task.category === filterCategory
      : true;
    const matchesPriority = filterPriority
      ? task.priority === filterPriority
      : true;
    const matchesStatus = filterStatus
      ? filterStatus === "completed"
        ? task.status === "completed"
        : task.status === "pending"
      : true;
    const matchesComplexity = filterComplexity
      ? task.complexity === Number(filterComplexity)
      : true;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPriority &&
      matchesStatus &&
      matchesComplexity
    );
  });

  const handleEdit = (task) => {
    setEditTask(task);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const SortIndicator = ({ columnKey }) => {
    if (sortConfig.key !== columnKey)
      return <ChevronDown className="opacity-0" size={16} />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    );
  };

  return (
    <div className="card">
      {/* Task Recommendation Component */}
      <TaskRecommendation />

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-outline flex items-center text-sm"
        >
          <Filter size={16} className="mr-1" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            className="input-field pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {showFilters && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Category
            </label>
            <select
              className="input-field"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Priority
            </label>
            <select
              className="input-field"
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value)}
            >
              <option value="">All Priorities</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Status
            </label>
            <select
              className="input-field"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Filter by Complexity
            </label>
            <select
              className="input-field"
              value={filterComplexity}
              onChange={(e) => setFilterComplexity(e.target.value)}
            >
              <option value="">All Complexities</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "(Easy)" : num === 10 ? "(Hard)" : ""}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sort By
            </label>
            <select
              className="input-field"
              value={sortConfig.key || ""}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Default</option>
              <option value="title">Title</option>
              <option value="priority">Priority</option>
              <option value="complexity">Complexity</option>
              <option value="deadline">Deadline</option>
              <option value="createdAt">Created Date</option>
            </select>
          </div>
        </div>
      )}

      {filteredTasks.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {tasks.length === 0
            ? "You don't have any tasks yet. Add your first task above!"
            : "No tasks match your filters."}
        </div>
      ) : (
        <div className="space-y-3">
          {filteredTasks.map((task) => (
            <div
              key={task._id}
              className={`border rounded-lg p-4 ${
                task.status === "completed" ? "bg-gray-50" : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <button
                    onClick={() => toggleTaskStatus(task._id)}
                    className="mt-1 flex-shrink-0"
                  >
                    {task.status === "completed" ? (
                      <CheckCircle className="text-emerald-500" size={20} />
                    ) : (
                      <Circle className="text-gray-400" size={20} />
                    )}
                  </button>

                  <div className="flex-1">
                    <h3
                      className={`font-medium ${
                        task.status === "completed"
                          ? "line-through text-gray-500"
                          : ""
                      }`}
                    >
                      {task.title}
                    </h3>

                    {task.description && (
                      <p
                        className={`text-sm mt-1 ${
                          task.status === "completed"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {task.description}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {task.category}
                      </span>

                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          task.priority === "low"
                            ? "bg-green-100 text-green-800"
                            : task.priority === "medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {task.priority.charAt(0).toUpperCase() +
                          task.priority.slice(1)}{" "}
                        Priority
                      </span>

                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          task.complexity <= 3
                            ? "bg-green-100 text-green-800"
                            : task.complexity <= 7
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        Complexity: {task.complexity}/10
                      </span>

                      {task.deadline && (
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            new Date(task.deadline) < new Date()
                              ? "bg-red-100 text-red-800"
                              : "bg-purple-100 text-purple-800"
                          }`}
                        >
                          Due: {new Date(task.deadline).toLocaleDateString()}
                          {new Date(task.deadline) < new Date() && " (Overdue)"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 ml-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="p-1.5 text-gray-500 hover:text-indigo-600 rounded-md hover:bg-gray-100"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => deleteTask(task._id)}
                    className="p-1.5 text-gray-500 hover:text-red-600 rounded-md hover:bg-gray-100"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
