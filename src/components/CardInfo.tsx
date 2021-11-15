import React, { FC, CSSProperties } from "react";
import { Card, Button } from "antd";

const cardInfoStyles = {
  width: "400px",
  margin: "0 auto",
  border: "1px solid #e5e7eb",
  borderRadius: "10px",
  padding: "10px",
  marginBottom: "24px",
  textAlign: "center",
} as CSSProperties;

export interface CardInfoProps {
  image?: string;
  name?: string;
  address?: string;
  phone?: string;
  description?: string;
  linkBtn?: string;
}

const CardInfo: FC<CardInfoProps> = ({
  image,
  name,
  address,
  phone,
  description,
  linkBtn,
}) => {
  return (
    <Card style={cardInfoStyles} cover={<img alt="example" src={image} />}>
      <p>{name}</p>
      <p>{address}</p>
      <p>{phone}</p>
      <p>{description}</p>
      {linkBtn && (
        <Button
          type="primary"
          shape="round"
          onClick={
            () =>
              // (window.location.href = selected.linkToScheduler) // open scheduler in same window
              window.open(linkBtn, "_blank") // open scheduler in new tab
          }
        >
          Make an appointment
        </Button>
      )}
    </Card>
  );
};

export default CardInfo;
