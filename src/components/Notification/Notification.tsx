import { useContext } from "react";
import { FaCircleInfo, FaCheck } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";

import type { NotificationLevelType } from "../../types/NotificationLevelType.ts";
import { ThemeContext } from "../../contexts/ThemeContext.ts";

interface NotificationProps {
  level: NotificationLevelType;
  message: string;
}

interface NotificationStyle {
  INFO: string;
  SUCCESS: string;
  WARNING: string;
  DANGER: string;
}

export default function Notification({ level, message }: NotificationProps) {
  const theme = useContext(ThemeContext);

  const iconDimensions = "w-5 h-5";
  const notifStyle: NotificationStyle = {
    INFO:
      theme === "dark"
        ? "text-blue-400 ring-blue-400 bg-blue-950/55"
        : "text-blue-800 ring-blue-400 bg-blue-200/55",
    SUCCESS:
      theme === "dark"
        ? "text-green-500 ring-green-500 bg-green-950/55"
        : "text-green-800 ring-green-500 bg-green-200/55",
    WARNING:
      theme === "dark"
        ? "text-yellow-300 ring-yellow-300 bg-yellow-950/30"
        : "text-yellow-700 ring-yellow-400 bg-yellow-200/30",
    DANGER:
      theme === "dark"
        ? "text-red-300 ring-red-400 bg-red-950/30"
        : "text-red-700 ring-red-400 bg-red-200/30",
  };
  let notificationLevelIcon;
  switch (level) {
    case "INFO":
      notificationLevelIcon = <FaCircleInfo className={iconDimensions} />;
      break;
    case "SUCCESS":
      notificationLevelIcon = <FaCheck className={iconDimensions} />;
      break;
    case "WARNING":
      notificationLevelIcon = <IoWarning className={iconDimensions} />;
      break;
    case "DANGER":
      notificationLevelIcon = <FaTimesCircle className={iconDimensions} />;
      break;
    default:
      notificationLevelIcon = <FaCircleInfo className={iconDimensions} />;
      break;
  }

  return (
    <div
      className={`w-fit grid grid-rows-1 grid-cols-[repeat(2,auto)] gap-4 p-4 ring rounded-sm ${notifStyle[level]}`}
    >
      <div>{notificationLevelIcon}</div>
      <p>{message}</p>
    </div>
  );
}
