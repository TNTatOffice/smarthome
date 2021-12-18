import React from "react";

export default function AddRoomButton({children, ...buttonProps}) {
  return <button className="btn" {...buttonProps}>{children}</button>;
}
