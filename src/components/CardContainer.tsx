import React, { FC } from "react";
import { Card } from "antd";

const cardStyles = {
  display: "flex",
  justifyContent: "space-around",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  margin: "40px auto",
  padding: "24px 24px",
  backgroundColor: "#fff",
  maxWidth: "60rem",
  width: "90%",
  firstChild: {
    width: "100%",
  },
};

const CardContainer: FC = ({ children }) => {
  return <Card style={cardStyles}>{children}</Card>;
};

export default CardContainer;
