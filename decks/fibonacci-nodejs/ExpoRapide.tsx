import React from "react";
import { Stepper } from "@gpichot/spectacle-deck";
import "//cdnjs.cloudflare.com/ajax/libs/KaTeX/0.9.0/katex.min.css";
import Latex from "react-latex";

const items = [
  <Latex displayMode>x^n = x \times x \times \ldots \times x</Latex>,
];

export function FastExpoAnim() {
  return (
    <Stepper values={items}>
      {(value, step, isActive) => <div>{value}</div>}
    </Stepper>
  );
}
