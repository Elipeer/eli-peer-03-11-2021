export const prettyName = (str) => {
  if (!str) return "";
  return (str[0].toUpperCase() + str.substring(1)).replace(/([A-Z])/g, " $1").trim();
};

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const defaultDateFormat = () => {
  return "YYYY-MM-DD 15:00:00";
};

export const numberWithCommas = (x) => {
  if (!x) return "";
  return x
    .toString()
    .replace(/-/g, "")
    .replace(/\D+/, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const makeTimeFormat = (x) => {
  if (!x) return "";
  let timeFormat = x.replace(/[^0-9]/g, "").substring(0, 6);
  if (timeFormat.length === 3 || timeFormat.length === 4) {
    timeFormat = timeFormat.substring(0, 2) + ":" + timeFormat.substring(2);
  } else if (timeFormat.length === 5 || timeFormat.length === 6) {
    timeFormat = timeFormat.substring(0, 2) + ":" + timeFormat.substring(2, 4) + ":" + timeFormat.substring(4);
  }

  return timeFormat
    .split(":")
    .map((x, i) => {
      if (i === 0) {
        return parseInt(x) >= 24 ? "00" : x;
      } else {
        return parseInt(x) >= 60 ? "59" : x;
      }
    })
    .join(":");
};

export const timeToSeconds = (x) => {
  let secs = x.split(":");
  var seconds = +secs[0] * 60 * 60 + +secs[1] * 60 + +secs[2];
  return seconds;
};

export const intToString = (value) => {
  if (!value) return "";
  var suffixes = ["", "K", "M", "B", "T"];
  var suffixNum = Math.floor(("" + parseInt(value)).length / 3);
  var shortValue = parseFloat((suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2));
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  return shortValue + suffixes[suffixNum];
};

export const defaultRequiredFieldMsg = "This is a required field";
export const dateOverTenYearsMsg = "Your date is 10 years in advance";

export const sidebarPages = {
  ALL_CONTENTS: "ALL_CONTENTS",
  MEASUREMENT: "MEASUREMENT",
  HOME: "HOME",
  MANAGMENT: "MANAGMENT"
};
