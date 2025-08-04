"use client";

import { useEffect, useState } from "react";
import SummaryCard from "@/components/overview/SummaryCard";
import RecentActivity from "@/components/overview/RecentActivity";
import MonthlyPerformance from "@/components/overview/MonthlyPerfoemance";

interface SumCards {
  value: number;
  percentChange: number;
}

interface Activity {
  id: number;
  status: number;
  title: string;
  description: string;
  timestamp: string;
}

interface MonthlyPerformanceItem {
  month: string;
  revenue: number;
}

interface MonthlyPerformance {
  data: MonthlyPerformanceItem[];
  total: number;
  percentChange: number;
}

export default function OverviewPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [totalSales, setTotalSales] = useState<SumCards>({
    value: 0,
    percentChange: 0,
  });
  const [activeCustomers, setActiveCustomers] = useState<SumCards>({
    value: 0,
    percentChange: 0,
  });
  const [inventoryStatus, setInventoryStatus] = useState<SumCards>({
    value: 0,
    percentChange: 0,
  });
  const [recentActivity, setRecentActivity] = useState<Activity[]>([]);
  const [monthlyPerformance, setMonthlyPerformance] =
    useState<MonthlyPerformance | null>(null);

  useEffect(() => {
    fetch("/api/overview")
      .then((res) => res.json())
      .then((data) => {
        const fallback = { value: 0, percentChange: 0 };
        setTotalSales(data.totalSales ?? fallback);
        setActiveCustomers(data.activeCustomers ?? fallback);
        setInventoryStatus(data.inventoryStatus ?? fallback);
        setRecentActivity(data.recentActivity ?? []);
        setMonthlyPerformance(data.monthlyPerformance ?? null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="space-y-8 font-mono">
      <h1 className="text-2xl font-bold mb-6 text-black">Overview</h1>
      {/* Summary Cards */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <>
            <SummaryCardSkeleton />
            <SummaryCardSkeleton />
            <SummaryCardSkeleton />
          </>
        ) : (
          <>
            <SummaryCard
              label="Total Sales"
              value={totalSales.value}
              percentChange={totalSales.percentChange}
              iconName="bi:bar-chart-fill"
              iconBgColor="bg-[#dbeafe]"
              iconColor="#478af6"
            />
            <SummaryCard
              label="Active Customers"
              value={activeCustomers.value}
              percentChange={activeCustomers.percentChange}
              iconName="bi:people-fill"
              iconBgColor="bg-[#f3e8ff]"
              iconColor="#a855f7"
            />
            <SummaryCard
              label="Inventory Status"
              value={inventoryStatus.value}
              percentChange={inventoryStatus.percentChange}
              iconName="mdi:gift"
              iconBgColor="bg-[#dcfce7]"
              iconColor="#41ce75"
            />
          </>
        )}
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        {isLoading ? (
          <RecentActivitySkeleton />
        ) : (
          <RecentActivity data={recentActivity} />
        )}

        {/* Monthly Performance */}
        {isLoading ? (
          <MonthlyPerformanceSkeleton />
        ) : (
          <MonthlyPerformance
            data={monthlyPerformance?.data ?? []}
            totalRevenue={monthlyPerformance?.total ?? 0}
            percentChange={monthlyPerformance?.percentChange ?? 0}
          />
        )}
      </section>
    </div>
  );
}

//Loading
function SummaryCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse flex items-center justify-between">
      <div>
        <div className="h-4 bg-gray-200 rounded w-24 mb-2" />
        <div className="flex space-x-2 items-center">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-4 bg-gray-200 rounded w-10" />
        </div>
      </div>
      <div className="w-10 h-10 rounded-md bg-gray-200" />
    </div>
  );
}

function RecentActivitySkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">
        <div className="h-6 bg-gray-300 rounded w-32 animate-pulse" />
      </h2>
      <div className="flex flex-col space-y-3 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex space-x-5">
            <div className="w-10 h-10 bg-gray-200 rounded-full" />
            <div className="flex flex-col space-y-2 w-full">
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-3 bg-gray-100 rounded w-1/2" />
              <div className="h-2 bg-gray-100 rounded w-1/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MonthlyPerformanceSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/3 mb-4" />
      <div className="h-40 bg-gray-200 rounded mb-4" />
      <div className="flex justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/4" />
        <div className="h-4 bg-gray-200 rounded w-1/6" />
      </div>
    </div>
  );
}
