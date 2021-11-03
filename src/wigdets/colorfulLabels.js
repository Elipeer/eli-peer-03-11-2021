const ColorfulLabels = (props) => {
  return (
    <>
      <div
        className="managment-business-table-labels"
        style={{
          color: props.color,
          background: !props.opacity ? props.background : ""
        }}
      >
        <div className="flex justify-center ai-c">
          {props.opacity ? (
            <div
              className="absolute width100 height100"
              style={{ background: props.background, opacity: "0.10", borderRadius: "7px" }}
            ></div>
          ) : null}
          {props.children}
        </div>
      </div>
    </>
  );
};
export default ColorfulLabels;
