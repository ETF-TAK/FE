function ComponentList({ components }) {
    return (
      <div style={{ flex: 1 }}>
        <h2>구성종목(비율)</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {components.map((comp, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#CACACA",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                width: "150px",
              }}
            >
              <p>{comp.name}</p>
              <p>({comp.code})</p>
              <p>{comp.weight}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  export default ComponentList;
  