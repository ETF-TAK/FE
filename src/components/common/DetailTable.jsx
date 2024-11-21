function DetailTable({ details }) {
  return (
    <div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#F5F5F5" }}>
            <th style={{ border: "1px solid #CCC", padding: "10px" }}>종목</th>
            <th style={{ border: "1px solid #CCC", padding: "10px" }}>단위</th>
            <th style={{ border: "1px solid #CCC", padding: "10px" }}>현재가</th>
            <th style={{ border: "1px solid #CCC", padding: "10px" }}>비중</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #CCC", padding: "10px" }}>{detail.item}</td>
              <td style={{ border: "1px solid #CCC", padding: "10px" }}>{detail.unit}</td>
              <td style={{ border: "1px solid #CCC", padding: "10px" }}>{detail.price}</td>
              <td style={{ border: "1px solid #CCC", padding: "10px" }}>{detail.ratio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default DetailTable;
