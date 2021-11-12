import React, { FC, CSSProperties } from "react";
import { Card, Button } from "antd";

const { Meta } = Card;

const cardInfoStyles = {
  width: "300px",
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
  description?: string;
  linkBtn?: string;
}

const CardInfo: FC<CardInfoProps> = ({ image, name, description, linkBtn }) => {
  return (
    <Card style={cardInfoStyles} cover={<img alt="example" src={image} />}>
      <Meta title={name} description={description} />
      {linkBtn && (
        <Button
          style={{ marginTop: "24px" }}
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
