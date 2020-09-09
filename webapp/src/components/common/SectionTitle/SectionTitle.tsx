import React from "react";
import classes from "./SectionTitle.module.css";

export default function SectionTitle({ children }: { children: string }) {
  return <h1 className={classes.Title}>{children}</h1>;
}
