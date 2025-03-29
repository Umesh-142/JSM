// import { CheckCircle, Clock, BarChart2 } from "lucide-react";
// import { useTasks } from "../context/TaskContext";

// const TaskStats = () => {
//   const { tasks } = useTasks();

//   const totalTasks = tasks.length;
//   const completedTasks = tasks.filter(
//     (task) => task.status === "completed"
//   ).length;
//   const pendingTasks = totalTasks - completedTasks;

//   const completionRate =
//     totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

//   const highPriorityPending = tasks.filter(
//     (task) => task.priority === "high" && task.status === "pending"
//   ).length;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//       <div className="card bg-indigo-50 border border-indigo-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-indigo-100 mr-4">
//             <BarChart2 className="text-indigo-600" size={24} />
//           </div>
//           <div>
//             <p className="text-indigo-600 font-medium">Total Tasks</p>
//             <p className="text-2xl font-bold text-indigo-700">{totalTasks}</p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-indigo-600">
//           {completionRate}% completion rate
//         </div>
//       </div>

//       <div className="card bg-emerald-50 border border-emerald-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-emerald-100 mr-4">
//             <CheckCircle className="text-emerald-600" size={24} />
//           </div>
//           <div>
//             <p className="text-emerald-600 font-medium">Completed</p>
//             <p className="text-2xl font-bold text-emerald-700">
//               {completedTasks}
//             </p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-emerald-600">
//           {totalTasks > 0
//             ? `${Math.round((completedTasks / totalTasks) * 100)}% of all tasks`
//             : "No tasks yet"}
//         </div>
//       </div>

//       <div className="card bg-amber-50 border border-amber-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-amber-100 mr-4">
//             <Clock className="text-amber-600" size={24} />
//           </div>
//           <div>
//             <p className="text-amber-600 font-medium">Pending</p>
//             <p className="text-2xl font-bold text-amber-700">{pendingTasks}</p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-amber-600">
//           {highPriorityPending > 0
//             ? `${highPriorityPending} high priority tasks pending`
//             : "No high priority tasks pending"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskStats;

// import { CheckCircle, Clock, BarChart2, AlertTriangle } from "lucide-react";
// import { useTasks } from "../context/TaskContext";

// const TaskStats = () => {
//   const { tasks } = useTasks();

//   const totalTasks = tasks.length;
//   const completedTasks = tasks.filter(
//     (task) => task.status === "completed"
//   ).length;
//   const pendingTasks = totalTasks - completedTasks;

//   const completionRate =
//     totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

//   const highPriorityPending = tasks.filter(
//     (task) => task.priority === "high" && task.status === "pending"
//   ).length;

//   const today = new Date();
//   const upcomingDeadlines = tasks.filter(
//     (task) =>
//       task.deadline &&
//       new Date(task.deadline) > today &&
//       task.status === "pending"
//   ).length;

//   const overdueTasks = tasks.filter(
//     (task) =>
//       task.deadline &&
//       new Date(task.deadline) < today &&
//       task.status === "pending"
//   ).length;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//       <div className="card bg-indigo-50 border border-indigo-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-indigo-100 mr-4">
//             <BarChart2 className="text-indigo-600" size={24} />
//           </div>
//           <div>
//             <p className="text-indigo-600 font-medium">Total Tasks</p>
//             <p className="text-2xl font-bold text-indigo-700">{totalTasks}</p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-indigo-600">
//           {completionRate}% completion rate
//         </div>
//       </div>

//       <div className="card bg-emerald-50 border border-emerald-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-emerald-100 mr-4">
//             <CheckCircle className="text-emerald-600" size={24} />
//           </div>
//           <div>
//             <p className="text-emerald-600 font-medium">Completed</p>
//             <p className="text-2xl font-bold text-emerald-700">
//               {completedTasks}
//             </p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-emerald-600">
//           {totalTasks > 0
//             ? `${Math.round((completedTasks / totalTasks) * 100)}% of all tasks`
//             : "No tasks yet"}
//         </div>
//       </div>

//       <div className="card bg-amber-50 border border-amber-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-amber-100 mr-4">
//             <Clock className="text-amber-600" size={24} />
//           </div>
//           <div>
//             <p className="text-amber-600 font-medium">Pending</p>
//             <p className="text-2xl font-bold text-amber-700">{pendingTasks}</p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-amber-600">
//           {highPriorityPending > 0
//             ? `${highPriorityPending} high priority tasks pending`
//             : "No high priority tasks pending"}
//         </div>
//       </div>

//       <div className="card bg-purple-50 border border-purple-100">
//         <div className="flex items-center">
//           <div className="p-3 rounded-full bg-purple-100 mr-4">
//             <AlertTriangle className="text-purple-600" size={24} />
//           </div>
//           <div>
//             <p className="text-purple-600 font-medium">Deadlines</p>
//             <p className="text-2xl font-bold text-purple-700">
//               {upcomingDeadlines}
//             </p>
//           </div>
//         </div>
//         <div className="mt-2 text-sm text-purple-600">
//           {overdueTasks > 0
//             ? `${overdueTasks} overdue tasks`
//             : "No overdue tasks"}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TaskStats;

import {
  CheckCircle,
  Clock,
  BarChart2,
  AlertTriangle,
  Gauge,
  Layers,
} from "lucide-react";
import { useTasks } from "../context/TaskContext";

const TaskStats = () => {
  const { tasks } = useTasks();

  // Basic task statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const pendingTasks = totalTasks - completedTasks;
  const completionRate =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Priority statistics
  const highPriorityPending = tasks.filter(
    (task) => task.priority === "high" && task.status === "pending"
  ).length;
  const mediumPriorityPending = tasks.filter(
    (task) => task.priority === "medium" && task.status === "pending"
  ).length;

  // Deadline statistics
  const today = new Date();
  const upcomingDeadlines = tasks.filter(
    (task) =>
      task.deadline &&
      new Date(task.deadline) > today &&
      task.status === "pending"
  ).length;
  const overdueTasks = tasks.filter(
    (task) =>
      task.deadline &&
      new Date(task.deadline) < today &&
      task.status === "pending"
  ).length;

  // Complexity statistics
  const easyTasks = tasks.filter((task) => task.complexity <= 3).length;
  const mediumTasks = tasks.filter(
    (task) => task.complexity > 3 && task.complexity <= 7
  ).length;
  const hardTasks = tasks.filter((task) => task.complexity > 7).length;
  const avgComplexity =
    totalTasks > 0
      ? (
          tasks.reduce((sum, task) => sum + task.complexity, 0) / totalTasks
        ).toFixed(1)
      : 0;

  // Productivity score
  const productivityScore =
    totalTasks > 0
      ? Math.min(
          100,
          Math.round(
            completedTasks * 0.4 +
              pendingTasks * 0.3 * (1 - avgComplexity / 10) +
              upcomingDeadlines * 0.3
          )
        )
      : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Productivity Score */}
      <div className="card bg-blue-50 border border-blue-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-blue-100 mr-4">
            <Gauge className="text-blue-600" size={24} />
          </div>
          <div>
            <p className="text-blue-600 font-medium">Productivity</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-blue-700 mr-2">
                {productivityScore}
              </p>
              <span className="text-sm text-blue-500">/100</span>
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-blue-600">
          {productivityScore >= 70
            ? "Great progress!"
            : productivityScore >= 40
            ? "Keep going!"
            : "Let's get started!"}
        </div>
      </div>

      {/* Task Completion */}
      <div className="card bg-emerald-50 border border-emerald-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-emerald-100 mr-4">
            <CheckCircle className="text-emerald-600" size={24} />
          </div>
          <div>
            <p className="text-emerald-600 font-medium">Completed</p>
            <p className="text-2xl font-bold text-emerald-700">
              {completedTasks}
            </p>
          </div>
        </div>
        <div className="mt-2 text-sm text-emerald-600">
          {totalTasks > 0 ? `${completionRate}% of all tasks` : "No tasks yet"}
        </div>
      </div>

      {/* Complexity */}
      <div className="card bg-amber-50 border border-amber-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-amber-100 mr-4">
            <Layers className="text-amber-600" size={24} />
          </div>
          <div>
            <p className="text-amber-600 font-medium">Complexity</p>
            <p className="text-2xl font-bold text-amber-700">
              {avgComplexity}/10
            </p>
          </div>
        </div>
        <div className="mt-2 text-sm text-amber-600">
          <div className="flex gap-1">
            <span className="text-green-600">{easyTasks} Easy</span>
            <span className="mx-1">•</span>
            <span className="text-yellow-600">{mediumTasks} Medium</span>
            <span className="mx-1">•</span>
            <span className="text-red-600">{hardTasks} Hard</span>
          </div>
        </div>
      </div>

      {/* Deadlines */}
      <div className="card bg-purple-50 border border-purple-100">
        <div className="flex items-center">
          <div className="p-3 rounded-full bg-purple-100 mr-4">
            <AlertTriangle className="text-purple-600" size={24} />
          </div>
          <div>
            <p className="text-purple-600 font-medium">Deadlines</p>
            <div className="flex items-center">
              <p className="text-2xl font-bold text-purple-700">
                {upcomingDeadlines}
              </p>
              <span className="text-sm text-purple-400 mx-2">/</span>
              <p className="text-xl font-bold text-red-500">{overdueTasks}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 text-sm text-purple-600">
          {overdueTasks > 0 ? (
            <span className="text-red-500">{overdueTasks} overdue!</span>
          ) : (
            "All deadlines managed"
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskStats;
