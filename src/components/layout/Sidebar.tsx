"use client";

import Link from "next/link";
import { Home, PieChart, LogOut, PanelLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Overview", href: "/", icon: Home },
  { label: "Insights", href: "/insights", icon: PieChart },
];

export default function Sidebar() {
  const pathName = usePathname();
    const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`
        ${collapsed ? "w-18" : "w-64"}
        bg-[#1e293b] flex flex-col h-screen font-mono transition-all duration-500 ease-in-out whitespace-nowrap
      `}
    >
      {/* Header */}
      <div className="text-white text-lg px-4 pt-5 pb-8 font-semibold flex justify-between items-center">
        <p
          className={`${
            collapsed ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500 ease-in-out min-w-0 pointer-events-none`}
        >
          Albaly Insights
        </p>
        <button
          className={`hover:cursor-pointer hover:bg-[#475569] rounded-md flex justify-center items-center px-2 py-2`}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          title={`${collapsed ? "Open sideber" : "Close sidebar"}`}
        >
          <PanelLeft className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Tab */}
      <nav className="flex-1 overflow-y-auto flex flex-col overflow-x-hidden">
        {navItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathName === href;
          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center px-4 py-3 text-white
                hover:bg-[#353f4f]
                transition-colors duration-500
                ${
                  isActive
                    ? "bg-[#475569] border-l-4 border-l-[#3b82f6]"
                    : "border-l-4 border-l-transparent"
                }
              `}
            >
              <div className={`flex-shrink-0 w-5 h-5 ${collapsed && "pl-2"}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`
                    transition-all duration-500 ease-in-out origin-left
                    ${
                      collapsed
                        ? "opacity-0 scale-x-0 w-0"
                        : "opacity-100 scale-x-100 w-auto ml-2"
                    }
                    whitespace-nowrap
                    inline-block
                `}
                style={{
                  transitionProperty: "opacity, transform, width, margin",
                }}
              >
                {label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4">
        <button
          className={`
            flex items-center py-2 w-full bg-[#3b82f6] text-white rounded-md hover:bg-[#266ee0]
            transition-all duration-600 ease-in-out justify-center
            `}
        >
          <LogOut className="w-5 h-5" />
          <span
            className={`
                 overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap
                ${
                  collapsed
                    ? "opacity-0 max-w-0"
                    : "ml-2 opacity-100 max-w-[200px]"
                }
            `}
          >
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
}
