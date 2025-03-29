// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       required: true,
//       ref: "User",
//     },
//     title: {
//       type: String,
//       required: [true, "Please add a task title"],
//     },
//     description: {
//       type: String,
//     },
//     category: {
//       type: String,
//       required: [true, "Please add a category"],
//     },
//     priority: {
//       type: String,
//       enum: ["low", "medium", "high"],
//       default: "medium",
//     },
//     status: {
//       type: String,
//       enum: ["pending", "completed"],
//       default: "pending",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Task = mongoose.model("Task", taskSchema);

// export default Task;

import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a task title"],
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: [true, "Please add a category"],
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    complexity: {
      type: Number,
      min: 1,
      max: 10,
      default: 5,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Recommendation scoring method
taskSchema.methods.calculateRecommendationScore = function () {
  const now = new Date();
  let score = 0;

  // Priority scoring (40% weight)
  if (this.priority === "high") score += 40;
  else if (this.priority === "medium") score += 25;
  else score += 10;

  // Complexity scoring (30% weight - inverse relationship)
  score += (10 - this.complexity) * 3;

  // Deadline scoring (30% weight)
  if (this.deadline) {
    const hoursUntilDeadline = (this.deadline - now) / (1000 * 60 * 60);
    if (hoursUntilDeadline < 24) score += 30;
    else if (hoursUntilDeadline < 72) score += 20;
    else if (hoursUntilDeadline < 168) score += 10;
  }

  return score;
};

const Task = mongoose.model("Task", taskSchema);

export default Task;
