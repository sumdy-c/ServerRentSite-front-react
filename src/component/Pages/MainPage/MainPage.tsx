import * as React from "react";
import { useState } from "react";

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
        "Наши лучшие сервера для вашего использования,теперь решают проблемы с вашими ресурсами за вас, не отвлекая от действительно важных дел!",
      img: "./img/gameServer.jpg",
      key: 987482,
    },
  ]);

  return (
    <>
      {placeItem.map((elem) => (
        <div
          key={elem.key}
          style={{
            display: "flex",
            justifyContent: "center",
            position: "static",
            height: "max-content",
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
            {elem.description}
          </span>
          <img
            height={700}
            src={require(`${elem.img}`)}
            style={{ position: "static", margin: 25 }}
            alt="NoPhoto"
          />
        </div>
      ))}
    </>
  );
};

export default MainPage;
