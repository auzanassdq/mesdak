"use client";

import React from "react";
import ReactECharts from "echarts-for-react";

export default function DataTalkChartEcharts() {
  const data = {
    name: "M’DataTalk Incorporation\nData. Insights. Solutions.",
    itemStyle: { color: "#6b21a8", borderColor: "#6b21a8" },
    label: {
      backgroundColor: "#6b21a8",
      color: "#fff",
      borderColor: "#6b21a8",
    },
    children: [
      {
        name: "M’D³MP Incorporation\nData Management",
        itemStyle: { color: "#6b21a8" },
      },
      {
        name: "M’Doc Incorporation\nDocument Management",
        itemStyle: { color: "#6b21a8" },
      },
      {
        name: "Business Services\nConsulting & Support",
        itemStyle: { color: "#6b21a8" },
      }
    ]
  };

  const option = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove"
    },
    series: [
      {
        type: "tree",
        data: [data],
        top: "10%",
        left: "5%",
        bottom: "10%",
        right: "5%",
        symbol: "circle",
        symbolSize: 10,
        orient: "TB",
        edgeShape: "polyline",
        edgeForkPosition: "50%",
        initialTreeDepth: 2,
        lineStyle: {
          color: "#6b21a8",
          width: 2,
        },
        label: {
          position: "bottom",
          verticalAlign: "top",
          align: "center",
          fontSize: 14,
          backgroundColor: "#fff",
          borderColor: "#6b21a8",
          borderWidth: 1,
          borderRadius: 8,
          padding: [12, 16],
          color: "#333",
          shadowColor: "rgba(0,0,0,0.05)",
          shadowBlur: 10,
          lineHeight: 20,
          distance: 10,
        },
        leaves: {
          label: {
            position: "bottom",
            verticalAlign: "top",
            align: "center"
          }
        },
        expandAndCollapse: false,
        animationDuration: 550,
        animationDurationUpdate: 750
      }
    ]
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans">
      <h3 className="text-xl font-bold text-center mb-8 text-[#6b21a8]">ECharts Implementation (Comparison)</h3>
      <div className="bg-white rounded-2xl shadow-md border border-purple-100 p-4">
        <ReactECharts option={option} style={{ height: "450px", width: "100%" }} />
      </div>
    </div>
  );
}
