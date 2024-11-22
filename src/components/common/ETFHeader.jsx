function ETFHeader({ data }) {
    return (
      <div
        style={{
          backgroundColor: "#0249FF",
          color: "#FFF",
          borderRadius: "20px",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1>{data.name}</h1>
          <p>코드: {data.code}</p>
        </div>
        <div>
          <p>현재가: {data.marketPrice}</p>
          <p>{data.marketChange}</p>
        </div>
        <div>
          <p>기준가(NAV): {data.navPrice}</p>
          <p>{data.navChange}</p>
        </div>
        <div>
          <p>수익률: {data.yield}</p>
        </div>
      </div>
    );
  }
  export default ETFHeader;
  