import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

export default function WeightedTreemap({ data }) {
  // const processedData = data.components
  //   .map((component) => ({
  //     name: component.name && component.code && component.weight
  //       ? `${component.name} (${component.code})\n(${component.weight})`
  //       : "데이터 없음",
  //     value: parseFloat(component.weight.replace("%", "")) || 0,
  //   }))
  //   .filter((item) => item.value > 0);

  // 원하는 대로 바꾸기 !
  const processedData =
    data?.map((component) => ({
      name:
        component.stockName && component.stockCode && component.weight
          ? `${component.stockName} (${component.stockCode})\n(${component.weight}%)`
          : "데이터 없음",
      value: component.weight || 0,
    })) || [];

  const uniqueProcessedData = Array.from(new Map(processedData.map((item) => [item.name, item])).values());

  console.log("Filtered Unique Processed Data:", uniqueProcessedData);

  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      const lines = payload[0].payload.name.split("\n");

      return (
        <div
          style={{
            background: "#fff",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "12px",
            whiteSpace: "pre-wrap",
          }}
        >
          {lines.map((line, index) => (
            <p key={index} style={{ margin: "0", textAlign: "center" }}>
              {line}
            </p>
          ))}
        </div>
      );
    }

    return null;
  };

  const CustomTreemapContent = ({ x, y, width, height, name = "", payload }) => {
    const validName = name || "데이터 없음";

    // 종목 이름, 번호, 비중 값 분리
    const match = validName.match(/^(.*) \((\d+)\)\n\(([\d.]+%)\)$/);
    const stockName = match ? match[1] : "데이터 없음"; // 종목 이름
    const stockCode = match ? match[2] : ""; // 종목 번호
    const weightValue = match ? parseFloat(match[3].replace("%", "")) || 0 : 0; // 비중 값

    // 비중이 0이면 렌더링하지 않음
    if (weightValue === 0 || stockName === "데이터 없음") {
      return null;
    }

    // 비중에 따른 글씨 크기 조정
    const fontSize = weightValue < 3 ? 5.5 : weightValue < 10 ? 10 : 14; // 비중에 따른 텍스트 크기

    const padding = 1;

    return (
      <g>
        <rect
          x={x + padding}
          y={y + padding}
          width={width - padding * 2}
          height={height - padding * 2}
          style={{
            fill: "#CACACA",
          }}
        />
        {/* 종목 이름 */}
        <text
          x={x + width / 2}
          y={y + height / 2 - 10}
          textAnchor="middle"
          fill="#000"
          fontSize={fontSize}
          fontWeight="bold"
          stroke="#000"
          strokeWidth="0.01"
        >
          {stockName} {/* 종목 이름 */}
        </text>
        {/* 종목 번호 */}
        <text
          x={x + width / 2}
          y={y + height / 2 + 5}
          textAnchor="middle"
          fill="#000"
          fontSize={fontSize}
          fontWeight="bold"
          stroke="#000"
          strokeWidth="0.01"
        >
          ({stockCode}) {/* 종목 번호 */}
        </text>
        {/* 비중 값 */}
        <text
          x={x + width / 2}
          y={y + height / 2 + 20}
          textAnchor="middle"
          fill="#000"
          fontSize={fontSize}
          stroke="#000"
          strokeWidth="0.01"
        >
          ({weightValue}%) {/* 비중 */}
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
