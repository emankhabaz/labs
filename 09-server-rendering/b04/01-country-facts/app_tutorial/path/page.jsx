// import React from "react";

export default function F(props) {
  return (
    <>
      <C1 p1="value1" p2="value2">
        <C2></C2>
      </C1>
      {C1({
        children: C2(),
        p1: "value1",
        p2: "value2",
      })}
      <C2></C2>
    </>
  );
}

function C1({ children, p1, p2 }) {
  return (
    <>
      <p>C1.</p>
      <p>{children}</p>
      <p>{p1}</p>
      <p>{p2}</p>
    </>
  );
}

function C2() {
  return <p>C2.</p>;
}
