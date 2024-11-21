// import React from "react";
// import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

// export default function WeightedTreemap({ data }) {
//   // 데이터를 Treemap 형식에 맞게 변환
//   const processedData = data.components.map((component) => ({
//     name: component.name ? `${component.name} (${component.code})\n(${component.weight})` : "Unknown",
//     value: parseFloat(component.weight) || 0,
//   }));

//   // Custom Tooltip
//   const CustomTooltip = ({ payload }) => {
//     if (payload && payload.length) {
//       return (
//         <div
//           style={{
//             background: "#fff",
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "5px",
//             fontSize: "12px",
//           }}
//         >
//           <p>{payload[0].payload.name}</p>
//         </div>
//       );
//     }
//     return null;
//   };

//   // Custom Content for Styling Treemap Blocks
//   const CustomTreemapContent = ({ x, y, width, height, name = "" }) => {
//     const nameParts = name.split("\n");

//     return (
//       <g>
//         <rect
//           x={x}
//           y={y}
//           width={width}
//           height={height}
//           style={{
//             fill: "#e6e6e6", // 배경색
//             stroke: "#ccc", // 테두리색
//             strokeWidth: 2,
//           }}
//         />
//         <text
//           x={x + width / 2}
//           y={y + height / 2 - 10}
//           textAnchor="middle"
//           fill="#000"
//           fontSize="14"
//           fontWeight="bold"
//           stroke="#000"
//           strokeWidth="0.01"
//         >
//           {nameParts[0] || "N/A"} {/* 종목명 */}
//         </text>

//         <text
//           x={x + width / 2}
//           y={y + height / 2 + 5}
//           textAnchor="middle"
//           fill="#000"
//           fontSize="12"
//           stroke="#000"
//           strokeWidth="0.01"
//         >
//           {nameParts[1] || ""} {/* 종목번호 */}
//         </text>
//         <text
//           x={x + width / 2}
//           y={y + height / 2 + 20}
//           textAnchor="middle"
//           fill="000"
//           fontSize="12"
//           stroke="#000"
//           strokeWidth="0.01"
//         >
//           {nameParts[2] || ""} {/* 비율 */}
//         </text>
//       </g>
//     );
//   };

//   return (
//     <div style={{ width: "100%", height: "400px" }}>
//       <ResponsiveContainer>
//         <Treemap data={processedData} dataKey="value" stroke="#fff" content={<CustomTreemapContent />}>
//           <Tooltip content={<CustomTooltip />} />
//         </Treemap>
//       </ResponsiveContainer>
//     </div>
//   );
// }


import React from "react";
import { Treemap, Tooltip, ResponsiveContainer } from "recharts";

export default function WeightedTreemap({ data }) {
  // 데이터를 Treemap 형식에 맞게 변환
  const processedData = data.components.map((component) => ({
    name: component.name ? `${component.name} (${component.code})\n(${component.weight})` : "Unknown",
    value: parseFloat(component.weight) || 0,
  }));

  // Custom Tooltip
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

  // Custom Content for Styling Treemap Blocks
  const CustomTreemapContent = ({ x, y, width, height, name = "" }) => {
    const nameParts = name.split("\n");

    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: "#e6e6e6", // 배경색
            stroke: "#ccc", // 테두리색
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
          {nameParts[0] || "N/A"} {/* 종목명 */}
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
          {nameParts[1] || ""} {/* 종목번호 */}
        </text>
        <text
          x={x + width / 2}
          y={y + height / 2 + 20}
          textAnchor="middle"
          fill="000"
          fontSize="12"
          stroke="#000"
          strokeWidth="0.01"
        >
          {nameParts[2] || ""} {/* 비율 */}
        </text>
      </g>
    );
  };

  // 바뀐부분 - 높이를 300px로 수정
  return (
    <div
      style={{
        width: "100%", // 가로는 100%로 고정
        height: "200px",
      }}
    >
      <ResponsiveContainer>
        <Treemap data={processedData} dataKey="value" stroke="#fff" content={<CustomTreemapContent />}>
          <Tooltip content={<CustomTooltip />} />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
