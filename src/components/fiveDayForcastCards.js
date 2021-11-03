import React, { Fragment } from "react";
import moment from "moment";
const FiveDayForcastCards = ({ cardDetails }) => {
  return (
    <>
      <div className="flex flex-around mt-100 black-color flex-wrap">
        {cardDetails?.map((item, i) => {
          return (
            <Fragment key={i + "fdf"}>
              <div className="five-day-cont">
                <div className="mb-15 bold"> {moment(item.Date).format("dddd")}</div>
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    item.Day.Icon < 10 ? "0" + item.Day.Icon : item.Day.Icon
                  }-s.png`}
                  alt="weather"
                  style={{ width: "120px", height: "80px", borderRadius: "15px" }}
                />
                <div className="bold mb-15" style={{ color: "#9782a9" }}>
                  {item.Day.IconPhrase}
                </div>
                <div>
                  Low: {item.Temperature.Minimum.Value} {item.Temperature.Minimum.Unit}
                </div>
                <div>
                  Low: {item.Temperature.Maximum.Value} {item.Temperature.Maximum.Unit}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default FiveDayForcastCards;
