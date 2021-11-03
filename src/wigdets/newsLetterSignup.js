import { TextField } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import questionnaireService from "../../services/questionnaireService";
import { validateEmail } from "../../services/utils";
import CustomBtn from "./customBtn";

const NewsLetterSignup = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="mt-20  mb-10 mobile-center">
        <b>SIGN UP FOR NEWS & UPDATES</b>
        <div className="news-letter-cont">
          <div className="mr-10">
            <TextField variant="outlined" label="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="">
            <CustomBtn onClick={() => addEmail()}>
              <b>Subscribe</b>
            </CustomBtn>
          </div>
        </div>
      </div>
    </>
  );

  function addEmail() {
    if (!validateEmail(email)) {
      Swal.fire("Bad email format", "Please try again", "warning");
      return;
    }

    questionnaireService.insertNewsLetterEmail(email).then((res) => {
      if (res.success) {
        Swal.fire("Success", "You have succesfully subscribed!", "success");
      }
    });
  }
};
export default NewsLetterSignup;
