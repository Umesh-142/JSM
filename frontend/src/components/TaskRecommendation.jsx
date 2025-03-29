import { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Bolt, Clock, AlertTriangle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const TaskRecommendation = () => {
  const { getRecommendedTask } = useTasks();
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const data = await getRecommendedTask();
        setRecommendation(data);
      } catch (error) {
        console.error("Failed to get recommendation:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendation();
  }, [getRecommendedTask]);

  if (loading)
    return (
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 animate-pulse">
        <div className="h-6 w-1/3 bg-indigo-100 rounded mb-3"></div>
        <div className="h-4 w-full bg-indigo-100 rounded"></div>
      </div>
    );

  if (!recommendation)
    return (
      <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6 text-center">
        <p className="text-indigo-800">No tasks to recommend</p>
      </div>
    );

  return (
    <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold text-indigo-800 mb-3">
        Recommended Task
      </h3>
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
        <Link
          to={`/tasks/${recommendation.recommendedTask._id}`}
          className="flex justify-between items-start"
        >
          <div>
            <h4 className="font-medium text-gray-900">
              {recommendation.recommendedTask.title}
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  recommendation.recommendedTask.priority === "high"
                    ? "bg-red-100 text-red-800"
                    : recommendation.recommendedTask.priority === "medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {recommendation.recommendedTask.priority} priority
              </span>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  recommendation.recommendedTask.complexity <= 3
                    ? "bg-green-100 text-green-800"
                    : recommendation.recommendedTask.complexity <= 7
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                Complexity: {recommendation.recommendedTask.complexity}/10
              </span>
              {recommendation.recommendedTask.deadline && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  Due:{" "}
                  {new Date(
                    recommendation.recommendedTask.deadline
                  ).toLocaleDateString()}
                </span>
              )}
            </div>
          </div>
          <ChevronRight className="text-indigo-500" />
        </Link>

        <div className="mt-3 flex items-center text-sm text-gray-600">
          <Bolt className="text-yellow-500 mr-1" size={14} />
          <span>
            Recommendation score: {Math.round(recommendation.score)}/100
          </span>
        </div>
        {recommendation.recommendedTask.deadline && (
          <div className="mt-1 flex items-center text-sm text-gray-600">
            <Clock className="text-blue-500 mr-1" size={14} />
            <span>
              {new Date(recommendation.recommendedTask.deadline) <
              new Date() ? (
                <span className="text-red-500">Overdue!</span>
              ) : (
                `Due in ${Math.ceil(
                  (new Date(recommendation.recommendedTask.deadline) -
                    new Date()) /
                    (1000 * 60 * 60 * 24)
                )} days`
              )}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskRecommendation;
