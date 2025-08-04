import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    topSellingProduct: {
      percentChange: 23,
      title: "Product A outperformed by 23% this month.",
      product: [
        {
          id: 1,
          label: "Product A",
          total: 45320,
          target: 50000,
        },
        {
          id: 2,
          label: "Product B",
          total: 32180,
          target: 50000,
        },
      ],
    },
    customerDropOff: {
      week: [
        {
          week: 1,
          churnRate: 3,
        },
        {
          week: 2,
          churnRate: 5,
        },
        {
          week: 3,
          churnRate: 17,
        },
        {
          week: 4,
          churnRate: 28,
        },
      ],
    },
    regionalPerformance: {
      percentChange: 23,
      region: [
        {
          id: 1,
          label: "North America",
          total: 245000,
          target: 370000,
        },
        {
          id: 2,
          label: "Europe",
          total: 190000,
          target: 370000,
        },
        {
          id: 3,
          label: "APAC",
          total: 340000,
          target: 370000,
        },
      ]
    },
    conversionFunnel: {
      percentChange: -5,
      items: [
        {
          id: 1,
          label: "visitors",
          total: 12000,
          target: 12000,
        },
        {
          id: 2,
          label: "product views",
          total: 8400,
          target: 12000,
        },
        {
          id: 3,
          label: "add to cart",
          total: 3600,
          target: 12000,
        },
        {
          id: 4,
          label: "purchase",
          total: 1440,
          target: 12000,
        },
      ]
    },
  });
}
