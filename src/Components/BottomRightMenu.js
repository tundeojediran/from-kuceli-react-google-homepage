import React from "react";
import MenuItem from "./MenuItem";

export default function BottomRightMenu() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <MenuItem title={"Privacy"} />
      <MenuItem title={"Terms"} />
      <MenuItem title={"Settings"} />
    </div>
  );
}
