import React, { FC, CSSProperties } from "react";
import { Card } from "antd";

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  margin: "40px auto",
  padding: "24px 24px",
  backgroundColor: "#fff",
  maxWidth: "60rem",
  width: "90%",
} as CSSProperties;

const CardContainer: FC = ({ children }) => {
  return <Card style={cardStyles}>{children}</Card>;
};

export default CardContainer;
