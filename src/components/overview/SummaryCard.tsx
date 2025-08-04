import { ArrowDown, ArrowUp } from "lucide-react";
import { Icon } from "@iconify/react";

type SummaryCardProps = {
  label: string;
  value: number;
  percentChange: number;
  iconName: string;
  iconBgColor: string;
  iconColor: string;
};

export default function SummaryCard({
  label,
  value,
  percentChange,
  iconName,
  iconBgColor,
  iconColor,
}: SummaryCardProps) {
  const isPositive = percentChange > 0;
  const isNegative = percentChange < 0;
  const isNeutral = percentChange === 0;

  const percentClass = isPositive
    ? "bg-green-100 text-green-500"
    : isNegative
    ? "bg-yellow-100 text-yellow-600"
    : "bg-gray-100 text-gray-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between">
      <div>
        <div className="text-sm font-semibold text-gray-500">{label}</div>
        <div className="flex space-x-2 items-center">
          <span className="text-2xl font-bold">{value.toLocaleString()}</span>
          <div className={`rounded-full px-2 py-3 h-3 text-xs font-bold flex items-center space-x-1 ${percentClass}`}>
            {isPositive && <ArrowUp className="w-3 h-3" />}
            {isNegative && <ArrowDown className="w-3 h-3" />}
            {!isNeutral && <span>{Math.abs(percentChange)}%</span>}
            {isNeutral && <span>0%</span>}
          </div>
        </div>
      </div>
      <div className={`rounded-md ${iconBgColor} flex justify-center items-center px-2 py-2`}>
        <Icon icon={iconName} width="24" height="24" color={iconColor} />
      </div>
    </div>
  );
}
