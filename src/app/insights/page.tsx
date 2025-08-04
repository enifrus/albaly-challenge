"use client";

import { useEffect, useState } from "react";
import TopSellingProduct from "@/components/insights/TopSelling";
import CustomerDropOff from "@/components/insights/CustomerDropOff";
import RegionalPerformance from "@/components/insights/RegionalPerformance";
import ConversionFunnel from "@/components/insights/ConversionFunnel";

interface TopSelling {
  percentChange: number;
  title: string;
  product: ProductItem[];
}

interface ProductItem {
  id: number;
  label: string;
  description?: string;
  total: number;
  target: number;
}

interface DropOff {
  week: WeekList[]
}

interface WeekList {
  week: number,
  churnRate: number
}

interface RegionItem {
  id: number;
  label: string;
  total: number;
  target: number;
}

interface RegionalPerformanceData {
  percentChange: number;
  region: RegionItem[];
}

interface ConversionFunnelData {
  percentChange: number;
  items: RegionItem[];
}

export default function InsightsPage() {
  const [topSellingData, setTopSellingData] = useState<TopSelling | null>(null);
  const [dropOffData, setDropOffData] = useState<DropOff | null>(null);
  const [regionalPerformance, setRegionalPerformance] = useState<RegionalPerformanceData | null>(null);
  const [conversionFunnel, setConversionFunnel] = useState<ConversionFunnelData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/insights")
      .then((res) => res.json())
      .then((data) => {
        setTopSellingData(data.topSellingProduct);
        setDropOffData(data.customerDropOff);
        setRegionalPerformance(data.regionalPerformance);
        setConversionFunnel(data.conversionFunnel)
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="font-mono">
      <h1 className="text-2xl font-bold mb-6 text-black">Insights</h1>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top-Selling Product */}
        {isLoading ? (
          <TopSellingProductSkeleton />
        ) : (
          topSellingData && (
            <TopSellingProduct
              title={topSellingData.title}
              percentChange={topSellingData.percentChange}
              products={topSellingData.product}
            />
          )
        )}

        {/* Customer Drop-Off */}
        {isLoading ? (
          <DropOffSkeleton />
        ) : (
          dropOffData && (
            <CustomerDropOff
              week={dropOffData.week}
            />
          )
        )}

        {/* Regional Performance */}
        {isLoading ? (
          <RegionalPerformanceSkeleton />
        ) : (
          regionalPerformance && (
            <RegionalPerformance
              percentChange={regionalPerformance.percentChange}
              regions={regionalPerformance.region}
            />
          )
        )}

        {/* Conversion Funnel */}
        {isLoading ? (
          <RegionalPerformanceSkeleton />
        ) : (
          conversionFunnel && (
            <ConversionFunnel
              percentChange={conversionFunnel.percentChange}
              items={conversionFunnel.items}
            />
          )
        )}
      </section>
    </div>
  );
}

//Loading
function TopSellingProductSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-12" />
      </div>

      <div className="space-y-3">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div className="bg-gray-300 h-2 rounded-full w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DropOffSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-12" />
      </div>

      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-3/4" />
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            <div className="h-3 bg-gray-100 rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

function RegionalPerformanceSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-full animate-pulse">
      <div className="flex justify-between">
        <div className="h-5 w-40 bg-gray-200 rounded mb-4" />
        <div className="h-5 w-16 bg-gray-200 rounded" />
      </div>

      <div className="h-4 w-64 bg-gray-200 rounded mb-6" />

      {[...Array(3)].map((_, idx) => (
        <div key={idx} className="pb-4 w-full space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <div className="h-3 w-24 bg-gray-200 rounded" />
            <div className="h-3 w-20 bg-gray-200 rounded" />
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gray-300 h-2 rounded-full"
              style={{ width: `${30 + idx * 20}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
