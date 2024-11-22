import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

export default function WeightedTreemap({ data }) {
  const processedData = data.components
    .map((component) => ({
      name: component.name && component.code && component.weight
        ? `${component.name} (${component.code})\n(${component.weight})`
        : "데이터 없음",
      value: parseFloat(component.weight.replace("%", "")) || 0,
    }))
    .filter((item) => item.value > 0);

  const uniqueProcessedData = Array.from(
    new Map(processedData.map((item) => [item.name, item])).values()
  );

  console.log("Filtered Unique Processed Data:", uniqueProcessedData);

  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "12px",
          }}
        >
          <p>{payload[0].payload.name}</p>
        </div>
      );
    }
    return null;
  };

  const CustomTreemapContent = ({ x, y, width, height, name = "", payload }) => {
    const validName = name || "데이터 없음";
    const nameParts = validName.split("\n");
    const padding = 10;
;

    return (
      <g>
        <rect
          x={x + padding}
          y={y + padding}
          width={width - padding * 2}
          height={height - padding * 2}
          style={{
            fill: "#e6e6e6",
            stroke: "#ccc",
            strokeWidth: 2,
          }}
        />
        <text
          x={x + width / 2}
          y={y + height / 2 - 10}
          textAnchor="middle"
          fill="#000"
          fontSize="14"
          fontWeight="bold"
          stroke="#000"
          strokeWidth="0.01"
        >
          {nameParts[0]}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2 + 5}
          textAnchor="middle"
          fill="#000"
          fontSize="12"
          stroke="#000"
          strokeWidth="0.01"
        >
          {nameParts[1]}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2 + 20}
          textAnchor="middle"
          fill="#000"
          fontSize="12"
          stroke="#000"
          strokeWidth="0.01"
        >
          {nameParts[2]}
        </text>
      </g>
    );
  };

  return (
    <div style={{ width: "100%", height: "200px" }}>
      <ResponsiveContainer>
        <Treemap
          data={uniqueProcessedData}
          dataKey="value"
          nameKey="name"
          stroke="#fff"
          content={<CustomTreemapContent />}
        >
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
