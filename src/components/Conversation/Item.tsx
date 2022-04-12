import * as React from "react";

export default function Item({
  children,
  sender = false,
  first = false,
  last = false,
  middle = false,
}) {
  return ( 
      <div
        className={`bubble ${sender ? "sender" : "recipient"} ${
          first ? "first" : last ? "last" : middle ? "middle" : ""
        } `}
      >
        {children}
      </div>
  );
}
