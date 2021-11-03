import { MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import CustomBtn from "./customBtn";

const ApplyForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [carsInFleet, setCarsInFleet] = useState("");
  const [affiliateType, setAffiliateType] = useState("");
  const selectValueList = ["Insurance", "Car dealership", "Car repair", "Tire shop", "Car rental", "Other"];

  return (
    <div>
      <div className="become-affiliate-form-title">Want to join?</div>
      <div className="become-affiliate-form-paragraph center-div">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
      </div>
      <div className="affiliate-form">
        <div>
          <div className="session-input-con center-div affiliate-first-last-name-container">
            <div className="affiliate-form-first-name">
              <TextField
                fullWidth
                label="First Name"
                type="text"
                variant="outlined"
                value={firstName}
                className="affiliate-form-first-last-name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <TextField
                fullWidth
                label="Last Name"
                type="text"
                variant="outlined"
                value={lastName}
                className="affiliate-form-first-last-name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          {!props.career ? (
            <div className="affiliate-text-field-container">
              <TextField
                fullWidth
                label="Business Name"
                type="text"
                variant="outlined"
                value={businessName}
                className="affiliate-text-field"
                onChange={(e) => setBusinessName(e.target.value)}
              />
            </div>
          ) : null}

          <div className="affiliate-text-field-container">
            <TextField
              fullWidth
              label="Phone Number"
              type="text"
              variant="outlined"
              value={mobile}
              className="affiliate-text-field"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="affiliate-text-field-container">
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              value={email}
              className="affiliate-text-field"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!props.career ? (
            <div className="affiliate-select-container">
              <TextField
                select
                label="Business type"
                variant="outlined"
                value={affiliateType}
                style={{ width: "100%", maxWidth: "376px" }}
                align="left"
                onChange={handleSelectChange}
              >
                {selectValueList.map((selectValue, selectValueIndex) => {
                  return (
                    <MenuItem key={"fdfds" + selectValueIndex} value={selectValue}>
                      {selectValue}
                    </MenuItem>
                  );
                })}
              </TextField>
            </div>
          ) : null}
          <div className="mt-10">
            {props.business ? (
              <TextField
                label="Cars in fleet"
                variant="outlined"
                type="number"
                value={carsInFleet}
                style={{ width: "100%", maxWidth: "376px" }}
                align="left"
                onChange={(e) => setCarsInFleet(e.target.value)}
              />
            ) : null}
          </div>
          <div className="mt-15">
            <CustomBtn bold txt="Let's work together" onClick={handleAffiliateForm} />
          </div>
        </div>
      </div>
    </div>
  );

  function handleSelectChange(e) {
    setAffiliateType(e.target.value);
  }

  async function handleAffiliateForm() {
    if (
      (firstName && lastName && businessName && mobile && email && affiliateType && !props.career && !props.business) ||
      (firstName && lastName && mobile && email && props.career) ||
      (firstName && lastName && businessName && mobile && email && affiliateType && carsInFleet && props.business)
    ) {
      const formData = {
        firstName,
        lastName,
        businessName,
        mobile,
        email,
        affiliateType,
        carsInFleet
      };
      let serverRes = await props.addNewPending(formData);

      if (serverRes.businessEmailExists) {
        Swal.fire("Business account already exists with the given email.", "", "warning");
      } else if (serverRes.success) {
        Swal.fire("Thanks for your interest.", "We received your information and will contact you shortly.", "success").then(() => {});
        setFirstName("");
        setLastName("");
        setBusinessName("");
        setMobile("");
        setEmail("");
        setAffiliateType("");
        setCarsInFleet("");
      }
    } else {
      Swal.fire("Please fill up the form.", "", "warning");
    }
  }
};
export default ApplyForm;
