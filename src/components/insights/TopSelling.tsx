import { useEffect, useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

interface ProductItem {
  id: number;
  label: string;
  description?: string;
  total: number;
  target: number;
}

interface Props {
  percentChange: number;
  title: string;
  products: ProductItem[];
}

export default function TopSellingProduct({
  percentChange,
  title,
  products,
}: Props) {
  const isPositive = percentChange > 0;
  const isNegative = percentChange < 0;

  const percentClass = isPositive
    ? "bg-green-100 text-green-500"
    : isNegative
    ? "bg-yellow-100 text-yellow-600"
    : "bg-gray-100 text-gray-500";

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-4">Top-Selling Product</h2>
        <div
          className={`rounded-full px-2 py-3 h-4 text-sm font-bold flex items-center space-x-1 ${percentClass}`}
        >
          {isPositive && <ArrowUp className="w-4 h-4" />}
          {isNegative && <ArrowDown className="w-4 h-4" />}
          <span>{Math.abs(percentChange)}%</span>
        </div>
      </div>

      <p className="text-sm pb-4">{title}</p>

      {products.map((product) => {
        const percent = (product.total / product.target) * 100;
        return (
          <div key={product.id} className="pb-4">
            <div className="w-full space-y-2">
              <div className="flex justify-between text-[13px] text-gray-500">
                <span>{product.label}</span>
                <span>${product.total.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: mounted ? `${percent}%` : 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="bg-blue-500 h-2 rounded-full"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
