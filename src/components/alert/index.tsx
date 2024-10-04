import React, { useState } from "react";
import classNames from "classnames";
import { Ban, Check, CircleAlert, Info, X } from "lucide-react";

export interface AlertProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  //详细描述
  description?: string;
  showIcon?: boolean;
  closeable?: boolean;
}

function Alert(props: AlertProps) {
  const {
    message,
    type,
    description,
    showIcon = true,
    closeable = false,
  } = props;

  const [showAlert, setShowAlert] = useState(true);

  if (!showAlert) return null;
  const borderClasses = classNames("p-3 border border-solid rounded-sm", {
    "border-green-500 bg-opacity-10 bg-green-500": type === "success",
    "border-red-500 bg-opacity-10 bg-red-500": type === "error",
    "border-yellow-500 bg-opacity-10 bg-yellow-500": type === "warning",
    "border-blue-500 bg-opacity-10 bg-blue-500": type === "info",
  });

  return (
    <div className={borderClasses}>
      <div className="flex justify-between">
        <span className="text-sm flex items-center gap-2">
          {showIcon && (
            <span>
              {type === "info" && <Info size={16} className="text-blue-500" />}
              {type === "success" && (
                <Check size={16} className="text-green-500" />
              )}
              {type === "error" && <Ban size={16} className="text-red-500" />}
              {type === "warning" && (
                <CircleAlert size={16} className="text-yellow-500" />
              )}
            </span>
          )}
          {message}
        </span>
        <span>
          {closeable && (
            <X
              size={18}
              className="cursor-pointer"
              onClick={() => setShowAlert(false)}
            />
          )}
        </span>
      </div>
      {description && (
        <p className="mt-2 text-xs text-gray-700">{description}</p>
      )}
    </div>
  );
}

export default Alert;
