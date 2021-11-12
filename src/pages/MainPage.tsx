import React, { FC, useEffect, useState } from "react";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";
import { Layout } from "antd";
import logo from "../canidLogo.png";
import { getS3File } from "../utils/getS3File";
import { Practice } from "../types/practice";
import CardContainer from "../components/CardContainer";
import MapContainer from "../components/Map";

const { Header, Content } = Layout;

const headerStyles = {
  height: "64px",
  padding: "0 50px",
  borderBottom: "2px solid #e5e7eb",
  backgroundColor: "#fff",
};

const MainPage: FC = () => {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [S3Data, setS3Data] = useState<Practice[]>([]);

  useEffect(() => {
    Amplify.configure({
      Auth: {
        identityPoolId: "us-east-2:3cd9572e-be0e-42cc-9dec-b5c0debb7761",
        region: "us-east-2",
      },
      Storage: {
        AWSS3: {
          bucket: "react-canid-bucket",
          region: "us-east-2",
        },
      },
    });

    if (fileUrl) {
      getS3File(fileUrl).then((data) => setS3Data(data.practices));
    }
  }, [fileUrl]);

  useEffect(() => {
    Storage.get("practices.json")
      .then((files) => {
        setFileUrl(files);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log("URL", fileUrl);
  console.log("S3 DATA", S3Data);

  return (
    <Layout>
      <Header style={headerStyles}>
        <img
          style={{ marginLeft: "auto", marginTop: "18px" }}
          src={logo}
          alt=""
        />
      </Header>
      <Content style={{ display: "flex", justifyContent: "center" }}>
        <CardContainer>
          <MapContainer data={S3Data === undefined ? undefined : S3Data} />
        </CardContainer>
      </Content>
    </Layout>
  );
};

export default MainPage;
