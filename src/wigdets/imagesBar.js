import whiteGuyWithKey from "../../assets/images/whiteGuyWithKey.png";
import chineseGuys from "../../assets/images/chineseGuys.png";
import guyInCar from "../../assets/images/guyInCar.png";

const ImagesBar = () => {
  return (
    <div className="flex justify-center">
      <img src={whiteGuyWithKey} alt="key" style={{ width: "30%", height: "450px" }} />
      <img src={chineseGuys} alt="key" style={{ width: "35%", height: "450px" }} />
      <img src={guyInCar} alt="key" style={{ width: "35%", height: "450px" }} />
    </div>
  );
};

export default ImagesBar;
