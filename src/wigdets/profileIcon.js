import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const ProfileIcon = (props) => {
  const [userInitials, setUserInitials] = useState();
  useEffect(() => {
    let firstName = localStorage.getItem("firstName").substring(0, 1).toUpperCase();
    let lastName = localStorage.getItem("lastName").substring(0, 1).toUpperCase();
    setUserInitials(firstName + lastName);
  }, []);

  return (
    <>
      <Avatar style={{ background: props.background || "#dfffd6", color: props.color || "#4CBC2E" }}>{userInitials}</Avatar>
    </>
  );
};
export default ProfileIcon;
