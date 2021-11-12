import React, { FC, useEffect, useState, useRef } from "react";
import Amplify from "@aws-amplify/core";
import { Storage } from "aws-amplify";
import { Layout } from "antd";
import logo from "../canidLogo.png";
// import mockedData from "../database/practices.json";
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
  const ref = useRef(null);
  const [fileUrl, setFileUrl] = useState<any>();
  const [S3Data, setS3Data] = useState<Practice[]>([]);
  // const [mockedS3Data, setMockedS3Data] = useState<Practice[]>();

  useEffect(() => {
    // setMockedS3Data(mockedData.practices);

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

    const getS3Json = () => {
      return fetch(fileUrl)
        .then((response) => response.json())
        .catch((error) => {
          console.error(error);
        });
    };

    if (fileUrl) {
      getS3Json().then((data) => setS3Data(data.practices));
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
  // console.log("MOCKED S3 DATA", mockedS3Data);

  const handleFileLoad = () => {
    //@ts-ignore
    const fileName = ref.current.files[0].name;
    //@ts-ignore
    Storage.put(fileName, ref.current.files[0])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      <div>
        <input ref={ref} type="file" onChange={handleFileLoad} />
      </div>
    </Layout>
  );
};

export default MainPage;
