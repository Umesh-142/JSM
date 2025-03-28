import { CheckCircle } from "lucide-react";

const Logo = ({ size = "default", showTagline = false }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-4xl",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center">
        <CheckCircle
          className="text-emerald-600 mr-2"
          size={size === "small" ? 20 : size === "large" ? 36 : 24}
        />
        <span className={`font-bold ${sizeClasses[size]} text-emerald-600`}>
          Tick<span className="text-green-500">&</span>Tick
        </span>
      </div>
      {showTagline && (
        <p className="text-sm text-gray-600 mt-1">Smart tasks, smarter you</p>
      )}
    </div>
  );
};

export default Logo;
