// import React from "react";

export default function Layout({ children }) {
  return (
    <div className="border-1 border-red-500 p-3">
      Nested layout.
      {children}
    </div>
  );
}
