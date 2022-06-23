import { Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const MainPage: React.FC = () => {
  const [placeItem, setPlaceItem] = useState([
    {
      name: "Рады вас видеть!",
      description:
        "Наши лучшие сервера для вашего использования,теперь решают проблемы с вашими ресурсами за вас, не отвлекая от действительно важных дел!",
      img: "./img/MainBackground.jpg",
      key: 9823674,
    },
    {
      name: "Действительно быстрое оборудование!",
      description:
        " Мы гарантируем, что наше оборудование выдаст вам стабильное подключение, что позволит пользователям вашего ресура быстро получить все необходимое!",
      img: "./img/fastres.png",
      key: 44578569,
    },
    {
      name: "Безопастность ваших данных!",
      description:
        "Все ресурсы сервера только ваши, никто без вашего согласия не сможет получить к ним доступ! Наша система безопасности проходит все необходимые тесты и соответствует последним стандартам безопасности!*",
      img: "./img/securesite.webp",
      key: 130843234,
    },
    {
      name: "Игровой опыт!",
      description:
        "Вы без доли сомнения можете поставить ваш игровой проект на наши сервера, а мы сделаем так что игроки получат полный игровой опыт без задержек - круглосуточно!",
      img: "./img/gameServer.jpg",
      key: 987482,
    },
  ]);
  const [hover, setHover] = useState(false);
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const goRents = () => {
    navigate("rntsrv", { replace: true });
  };

  const eventHoverOver: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setHover(true);
  };

  const eventHoverOut: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setHover(false);
  };

  const eventReady = () => {
    setReady(true);
  };

  return (
    <>
      <label className="startpage" />
      {ready ? (
        <Button
          variant={hover ? "contained" : "text"}
          onClick={goRents}
          onMouseOver={eventHoverOver}
          onMouseOut={eventHoverOut}
          style={{
            height: 100,
            width: "max-content",
            justifyContent: "center",
            marginTop: 350,
            marginBottom: 850,
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          }}
        >
          <span
            style={{
              marginTop: 10,
              fontSize: "-webkit-xxx-large",
              fontStyle: "italic",
              fontFamily: "fantasy",
              color: "black",
              marginLeft: 25,
            }}
          >
            Готовы принять решение?
          </span>
        </Button>
      ) : (
        <Link
          activeClass="active"
          to="gotoScroll"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <Button
            variant={hover ? "contained" : "text"}
            // onClick={eventNxtBuy}
            onMouseOver={eventHoverOver}
            onMouseOut={eventHoverOut}
            style={{
              height: 100,
              width: "max-content",
              justifyContent: "center",
              marginTop: 350,
              marginBottom: 850,
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <span
              style={{
                marginTop: 10,
                fontSize: "-webkit-xxx-large",
                fontStyle: "italic",
                fontFamily: "fantasy",
                color: "black",
                marginLeft: 25,
              }}
            >
              Попробуйте для себя наши продвинутые решения!
            </span>
          </Button>
        </Link>
      )}
      <label className="gotoScroll" />
      {placeItem.map((elem) => (
        <div
          key={elem.key}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "static",
            height: "max-content",
            marginTop: 50,
          }}
        >
          <span
            style={{
              marginTop: 10,
              fontSize: "-webkit-xxx-large",
              fontStyle: "italic",
              textAlign: "center",
              fontFamily: "fantasy",
              color: "black",
              marginLeft: 25,
            }}
          >
            {elem.description}
          </span>
          <img
            height={800}
            width={900}
            src={require(`${elem.img}`)}
            style={{ position: "static", margin: 25, objectFit: "cover" }}
            alt="NoPhoto"
          />
        </div>
      ))}

      <Link
        activeClass="active"
        to="startpage"
        spy={true}
        smooth={true}
        offset={-500}
        duration={500}
      >
        <Button
          onClick={eventReady}
          variant="contained"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 50,
            marginTop: 150,
          }}
        >
          Вернуться наверх
        </Button>
      </Link>
      <span>*по стандартам 'ГОСТ Р ИСО/МЭК 15408, ГОСТ Р 51275' </span>
    </>
  );
};

export default MainPage;
