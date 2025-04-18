
import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";
import { mockChartData } from "@/data/mockData"; 

Chart.register(...registerables);

export const AreaChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    
    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;
    
    // Destroy previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
    
    // Create new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: mockChartData.labels,
        datasets: [
          {
            label: "Sessions",
            data: mockChartData.data,
            fill: true,
            backgroundColor: "rgba(96, 165, 250, 0.2)",
            borderColor: "rgba(59, 130, 246, 0.7)",
            borderWidth: 2,
            tension: 0.4,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            titleColor: "#111827",
            bodyColor: "#374151",
            borderColor: "#E5E7EB",
            borderWidth: 1,
            padding: 10,
            boxPadding: 5,
            usePointStyle: true,
            callbacks: {
              title: (tooltipItems) => {
                const index = tooltipItems[0].dataIndex;
                return `${mockChartData.labels[index]}`;
              },
              label: (context) => {
                return `${context.parsed.y} sessions`;
              },
            },
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
              },
              color: "#6B7280",
            },
          },
          y: {
            beginAtZero: true,
            grid: {
              color: "rgba(243, 244, 246, 1)",
            },
            border: {
              display: false,
            },
            ticks: {
              font: {
                size: 12,
              },
              color: "#6B7280",
              padding: 10,
            },
          },
        },
        interaction: {
          mode: "nearest",
          axis: "x",
          intersect: false,
        },
      },
    });
    
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);
  
  return (
    <div className="relative w-full h-full">
      <canvas ref={chartRef} />
      <div className="absolute bottom-8 right-8 bg-white/80 rounded p-1 text-xs text-gray-600 backdrop-blur-sm">
        <div className="flex items-center">
          <div className="px-2 py-1">May 21st, 2025</div>
          <div className="font-medium px-2 py-1">42 sessions</div>
        </div>
      </div>
    </div>
  );
};
