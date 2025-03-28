from flask import Blueprint, request, jsonify
from models import UserBehavior

routes = Blueprint('routes', __name__)

@routes.route("/track_time", methods=["POST"])
def track_time():
    """API to track time spent on a task."""
    data = request.json
    UserBehavior.log_task_time(
        user_id=data["user_id"],
        task_id=data["task_id"],
        start_time=data["start_time"],
        end_time=data["end_time"]
    )
    return jsonify({"message": "Task time logged successfully"}), 200

@routes.route("/track_completion", methods=["POST"])
def track_completion():
    """API to track task completion."""
    data = request.json
    UserBehavior.log_task_completion(
        user_id=data["user_id"],
        task_id=data["task_id"],
        status=data["status"]
    )
    return jsonify({"message": "Task completion logged successfully"}), 200

@routes.route("/track_feature_usage", methods=["POST"])
def track_feature_usage():
    """API to track feature usage."""
    data = request.json
    UserBehavior.log_feature_usage(
        user_id=data["user_id"],
        feature_name=data["feature_name"]
    )
    return jsonify({"message": "Feature usage logged"}), 200

@routes.route("/track_error", methods=["POST"])
def track_error():
    """API to track errors."""
    data = request.json
    UserBehavior.log_error(
        user_id=data["user_id"],
        error_message=data["error_message"],
        endpoint=data["endpoint"]
    )
    return jsonify({"message": "Error logged successfully"}), 200
