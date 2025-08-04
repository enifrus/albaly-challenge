import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface ConversionItem {
  id: number;
  label: string;
  total: number;
  target: number;
}

interface Props {
  percentChange: number;
  items: ConversionItem[];
}

export default function ConversionFunnel({ percentChange, items }: Props) {
  const isPositive = percentChange > 0;
  const isNegative = percentChange < 0;

  const percentClass = isPositive
    ? "bg-green-100 text-green-500"
    : isNegative
    ? "bg-yellow-100 text-yellow-600"
    : "bg-gray-100 text-gray-500";

  const lowestItem = items.reduce((prev, curr) =>
    curr.total < prev.total ? curr : prev
  );

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Regional Performance</h2>
        <div
          className={`rounded-full px-2 py-3 h-4 text-sm font-bold flex items-center space-x-1 ${percentClass}`}
        >
          {isPositive && <ArrowUp className="w-4 h-4" />}
          {isNegative && <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(percentChange)}%</span>
        </div>
      </div>

      <p className="text-sm pb-4">
        Checkout to {lowestItem.label} conversion decreased by 5%.
      </p>

      {items.map((item) => {
        const percent = (item.total / item.target) * 100;

        return (
          <div key={item.id} className="pb-4">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-[13px] text-gray-500">
                <div
                  className={`rounded-full px-2 py-1 flex justify-center items-center font-semibold 
                ${
                  item.id === lowestItem.id
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-blue-100 text-blue-500"
                }`}
                >
                  <span>{item.label.toUpperCase()}</span>
                </div>
                <span>${item.total.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: mounted ? `${percent}%` : 0,
                  }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className={`${
                    item.id === lowestItem.id ? "bg-yellow-500" : "bg-blue-500"
                  }  h-2 rounded-full`}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
