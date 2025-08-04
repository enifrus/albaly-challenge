import { ArrowUp, ArrowDown } from "lucide-react";

interface WeekList {
  week: number;
  churnRate: number;
}

interface Props {
  week: WeekList[];
}

export default function CustomerDropOff({ week }: Props) {
  const highestChurn = week.reduce((prev, curr) =>
    curr.churnRate > prev.churnRate ? curr : prev
  );

  const percentChange = highestChurn.churnRate;

  const isPositive = percentChange > 0;
  const isNegative = percentChange < 0;

  const percentClass = isPositive
    ? "bg-green-100 text-green-500"
    : isNegative
    ? "bg-yellow-100 text-yellow-600"
    : "bg-gray-100 text-gray-500";

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Customer Drop-Off</h2>
        <div
          className={`rounded-full px-2 py-3 h-4 text-sm font-bold flex items-center space-x-1 ${percentClass}`}
        >
          {isPositive && <ArrowUp className="w-4 h-4" />}
          {isNegative && <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(highestChurn.churnRate)}%</span>
        </div>
      </div>

      <div className="flex flex-col space-y-3">
        <p>
          Week {highestChurn.week} saw a {highestChurn.churnRate}% increase in
          user churn.
        </p>
        {week.map((item) => (
          <div key={item.week} className="flex items-center space-x-2">
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                item.week === highestChurn.week ? "bg-red-500" : "bg-blue-500"
              }`}
            />
            <span>
              Week {item.week}: {item.churnRate}% churn rate
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
