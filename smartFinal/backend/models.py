from db import mongo

class UserBehavior:
    @staticmethod
    def log_task_time(user_id, task_id, start_time, end_time):
        """Logs the time spent on a task."""
        duration = end_time - start_time
        mongo.db.task_time.insert_one({
            "user_id": user_id,
            "task_id": task_id,
            "start_time": start_time,
            "end_time": end_time,
            "duration": duration
        })

    @staticmethod
    def log_task_completion(user_id, task_id, status):
        """Tracks task completion status."""
        mongo.db.task_completion.insert_one({
            "user_id": user_id,
            "task_id": task_id,
            "status": status
        })

    @staticmethod
    def log_feature_usage(user_id, feature_name):
        """Tracks how often a user interacts with a feature."""
        mongo.db.feature_usage.insert_one({
            "user_id": user_id,
            "feature_name": feature_name
        })

    @staticmethod
    def log_error(user_id, error_message, endpoint):
        """Logs errors encountered by the user."""
        mongo.db.error_logs.insert_one({
            "user_id": user_id,
            "error_message": error_message,
            "endpoint": endpoint
        })
