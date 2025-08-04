"use client";

import { Icon } from "@iconify/react";
import {
  formatDistanceToNowStrict,
  parseISO,
  isSameDay,
} from "date-fns";

interface Activity {
  id: number;
  status: number;
  title: string;
  description: string;
  timestamp: string;
}

interface Props {
  data: Activity[];
}

export default function RecentActivity({ data }: Props) {
  const getStatusColor = (status: number) => {
    switch (status) {
      case 1: // Waiting
        return {
          bg: "bg-blue-100",
          color: "#3b82f6",
          icon: "mingcute:time-fill",
        };
      case 2: // Warning
        return { bg: "bg-yellow-100", color: "#facc15", icon: "mdi:alert" };
      case 3: // Success
        return {
          bg: "bg-green-100",
          color: "#22c55e",
          icon: "mdi:check-circle",
        };
      case 4: // Failed
        return { bg: "bg-red-100", color: "#ef4444", icon: "mdi:close-circle" };
      default:
        return { bg: "bg-gray-100", color: "#6b7280", icon: "mdi:information" };
    }
  };

  const formatTime = (timestamp: string) => {
    return `${formatDistanceToNowStrict(parseISO(timestamp))} ago`;
  };

  const now = new Date();

  const recentData = data
    .filter((item) => {
      const ts = parseISO(item.timestamp);
      return isSameDay(ts, now);
    })
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-full">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      {recentData.length === 0 ? (
        <div className="flex justify-center items-center h-24 text-gray-400 text-sm">
          No activity in the past 24 hours
        </div>
      ) : (
        <div className="flex flex-col space-y-3">
          {recentData.map((item) => {
            const { bg, color, icon } = getStatusColor(item.status);
            return (
              <div key={item.id} className="flex space-x-5 min-w-0">
                <div
                  className={`px-2 py-2 w-10 h-10 rounded-full flex justify-center items-center ${bg}`}
                >
                  <Icon icon={icon} width="24" height="24" color={color} />
                </div>
                <div className="min-w-0 overflow-hidden">
                  <p className="font-semibold whitespace-normal break-words">
                    {item.title}
                  </p>
                  <p className="text-gray-500 text-sm whitespace-normal break-words">
                    {item.description}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {formatTime(item.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
