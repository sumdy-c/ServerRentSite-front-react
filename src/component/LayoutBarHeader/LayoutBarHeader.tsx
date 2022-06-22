import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const LayoutBarHeader: React.FC = () => {
  const RentServerPage = () => {};
  const HostServerPage = () => {};
  const OptServerPage = () => {};
  const AboutPage = () => {};

  return (
    <>
      <div
        style={{
          backgroundColor: "#34adfc",
          height: 40,
          width: "-webkit-fill-available",
          position: "sticky",
          display: "flex",
          justifyContent: "center",
          top: 0,
          bottom: "auto",
          opacity: 0.85,
          padding: 20,
          marginBottom: 35,
        }}
      >
        <div>LOGO</div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            <Button style={{ width: 300, padding: 10 }} onClick={OptServerPage}>
              Главная страница
            </Button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/rntsrv">
            <Button
              style={{ width: 300, padding: 10 }}
              onClick={RentServerPage}
            >
              Арендовать сервер
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/hosts">
            <Button
              style={{ width: 350, padding: 10 }}
              onClick={HostServerPage}
            >
              Приобрести место на общем хостинге
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/optrntsrv">
            <Button style={{ width: 300, padding: 10 }} onClick={OptServerPage}>
              Арендовать оптом
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <Button style={{ width: 300, padding: 10 }} onClick={AboutPage}>
              О нас
            </Button>
          </Link>
        </ButtonGroup>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutBarHeader;
