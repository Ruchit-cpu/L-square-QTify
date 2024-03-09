import React from "react";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Link } from "react-router-dom";
export default function BackButton() {
  return (
    <div>
      <Link to={"/"}>
        <ArrowBackRoundedIcon
          sx={{
            color: "rgba(255, 255, 255, 1)",
            width: 40,
            height: 40,
            border: 1,
            borderRadius: "50%",
            marginLeft: 7,
            marginTop: 2,
          }}
        />
      </Link>
    </div>
  );
}
