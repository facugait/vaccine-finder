import React, { FC, useEffect, useState } from "react";
import logo from "../canidLogo.png";
import { getS3File } from "../utils/getS3File";
import { Layout } from "antd";
import { Practice } from "../types/practice";
import CardContainer from "../components/CardContainer";
import MapContainer from "../components/Map";
import TitleContainer from "../components/TitleContainer";

const { Header, Content } = Layout;

const headerStyles = {
  height: "64px",
  padding: "0 50px",
  borderBottom: "2px solid #e5e7eb",
  backgroundColor: "#fff",
};

const MainPage: FC = () => {
  const fileUrl = process.env.REACT_APP_AWS_S3_BUCKET_URL;
  const [S3Data, setS3Data] = useState<Practice[]>([]);

  useEffect(() => {
    if (fileUrl) {
      getS3File(fileUrl).then((data) => setS3Data(data.practices));
    }
  }, [fileUrl]);

  console.log("S3 DATA", S3Data);

  return (
    <Layout>
      <Header style={headerStyles}>
        <img
          style={{ marginLeft: "auto", marginTop: "18px" }}
          src={logo}
          alt="logo"
        />
      </Header>
      <Content style={{ display: "flex", justifyContent: "center" }}>
        <CardContainer>
          <TitleContainer
            title="Vaccine Finder"
            subtitle="Find the nearest pediatrician"
          />
          <MapContainer data={S3Data === undefined ? undefined : S3Data} />
        </CardContainer>
      </Content>
    </Layout>
  );
};

export default MainPage;
