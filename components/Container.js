import React from "react";

export default function Container({ children, className }) {
  return (
    <div
      className={`container p-4 mx-auto xl:px-0 ${className ? className : ""}`}
    >
      {children}
    </div>
  );
}


