import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    totalSales: {
      value: 1245,
      percentChange: 12,
    },
    activeCustomers: {
      value: 320,
      percentChange: 8,
    },
    inventoryStatus: {
      value: 5600,
      percentChange: -3,
    },
    recentActivity: [
      // 4 Aug
      {
        id: 1,
        status: 3,
        title: "Order #1234 completed",
        description: "Delivered successfully to customer",
        timestamp: "2025-08-04T02:00:00Z",
      },
      {
        id: 2,
        status: 1,
        title: "Order #1235 pending",
        description: "Awaiting payment confirmation",
        timestamp: "2025-08-04T03:30:00Z",
      },
      {
        id: 3,
        status: 2,
        title: "Low inventory alert",
        description: "Stock level below threshold",
        timestamp: "2025-08-04T01:00:00Z",
      },
      {
        id: 4,
        status: 4,
        title: "Payment failed for Order #1236",
        description: "Customer needs to retry payment",
        timestamp: "2025-08-03T18:15:00Z",
      },

      // 5 Aug
      {
        id: 5,
        status: 1,
        title: "Order #1237 pending",
        description: "Awaiting shipment",
        timestamp: "2025-08-05T09:00:00Z",
      },
      {
        id: 6,
        status: 3,
        title: "Order #1238 completed",
        description: "Delivered to warehouse",
        timestamp: "2025-08-05T14:20:00Z",
      },

      // 6 Aug
      {
        id: 7,
        status: 2,
        title: "Inventory update",
        description: "New stock added to system",
        timestamp: "2025-08-06T08:45:00Z",
      },
      {
        id: 8,
        status: 3,
        title: "Order #1239 completed",
        description: "Package signed by customer",
        timestamp: "2025-08-06T12:15:00Z",
      },

      // 7 Aug
      {
        id: 9,
        status: 1,
        title: "Order #1240 pending",
        description: "Waiting for warehouse scan",
        timestamp: "2025-08-07T10:10:00Z",
      },
      {
        id: 10,
        status: 2,
        title: "Restocking alert",
        description: "Reorder needed for Item #S-202",
        timestamp: "2025-08-07T15:30:00Z",
      },
      {
        id: 11,
        status: 3,
        title: "Order #1241 completed",
        description: "Shipped via express service",
        timestamp: "2025-08-07T17:45:00Z",
      },

      // 8 Aug
      {
        id: 12,
        status: 1,
        title: "Order #1242 pending",
        description: "Customer selected cash on delivery",
        timestamp: "2025-08-08T11:00:00Z",
      },
      {
        id: 13,
        status: 4,
        title: "Order #1243 payment failed",
        description: "Card declined by issuer",
        timestamp: "2025-08-08T13:40:00Z",
      },

      // 9 Aug
      {
        id: 14,
        status: 2,
        title: "Inventory alert",
        description: "Only 5 units remaining for Item #A-102",
        timestamp: "2025-08-09T07:20:00Z",
      },
      {
        id: 15,
        status: 3,
        title: "Order #1244 completed",
        description: "Left at front desk",
        timestamp: "2025-08-09T14:10:00Z",
      },

      // 10 Aug
      {
        id: 16,
        status: 1,
        title: "Order #1245 pending",
        description: "Warehouse assigned",
        timestamp: "2025-08-10T10:30:00Z",
      },
      {
        id: 17,
        status: 3,
        title: "Order #1246 completed",
        description: "Delivered to neighbor",
        timestamp: "2025-08-10T16:00:00Z",
      },

      // 11 Aug
      {
        id: 18,
        status: 2,
        title: "Stock level critical",
        description: "Urgent reorder needed",
        timestamp: "2025-08-11T09:45:00Z",
      },
      {
        id: 19,
        status: 3,
        title: "Order #1247 completed",
        description: "Customer confirmed receipt",
        timestamp: "2025-08-11T18:00:00Z",
      },
    ],
    monthlyPerformance: {
      data: [
        { month: "Jan", revenue: 18000 },
        { month: "Feb", revenue: 22000 },
        { month: "Mar", revenue: 25000 },
        { month: "Apr", revenue: 28000 },
        { month: "May", revenue: 31000 },
        { month: "Jun", revenue: 36000 },
        { month: "Jul", revenue: 40000 },
      ],
      total: 200000,
      percentChange: 23,
    },
  });
}

//recentActivity Status
// 1 -- Waiting
// 2 -- warning
// 3 -- Success
// 4 -- failed
