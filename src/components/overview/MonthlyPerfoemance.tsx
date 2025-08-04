import { ArrowUp, ArrowDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface DataPoint {
  month: string;
  revenue: number;
}

interface Props {
  data: DataPoint[];
  totalRevenue: number;
  percentChange: number;
}

export default function MonthlyPerformance({ data, totalRevenue, percentChange }: Props) {
  const isPositive = percentChange >= 0;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-full">
      <h2 className="text-lg font-semibold mb-4">Monthly Performance</h2>

      {/* Chart */}
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#3b82f6"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-700">
        <span className="font-medium">Total Revenue: ${totalRevenue.toLocaleString()}</span>
        <span
          className={`flex items-center font-medium ${
            isPositive ? "text-green-600" : "text-red-500"
          }`}
        >
          {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
          {Math.abs(percentChange)}% vs last period
        </span>
      </div>
    </div>
  );
}
