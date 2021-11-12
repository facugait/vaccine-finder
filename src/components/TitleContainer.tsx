import React, { FC, CSSProperties } from "react";

const titleStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
} as CSSProperties;

export interface TitleContainerProps {
  title?: string;
  subtitle?: string;
}

const TitleContainer: FC<TitleContainerProps> = ({ title, subtitle }) => {
  return (
    <div style={titleStyles}>
      <h1 style={{ marginBottom: "10px", color: "black" }}>{title}</h1>
      <p style={{ marginTop: "0px", marginBottom: "24px", fontWeight: 500 }}>
        {subtitle}
      </p>
    </div>
  );
};

export default TitleContainer;
