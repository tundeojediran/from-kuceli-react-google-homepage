import React from "react";
import MenuItem from "./MenuItem";

export default function BottomLeftMenu() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
      }}
    >
      <MenuItem title={"About"} />
      <MenuItem title={"Advertising"} />
      <MenuItem title={"Business"} />
      <MenuItem title={"How Search Works"} />
    </div>
  );
}
