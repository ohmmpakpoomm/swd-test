import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from "react-router-dom";

import ChangeLanguageDropdown from "../components/ChangeLanguageDropdown";
import "./Question1.scss";

const initial = [
  <div className="circle"></div>,
  <div className="oval"></div>,
  <div className="trapezoid"></div>,
  <div className="rectangle"></div>,
  <div className="parallelogram"></div>,
  <div className="square"></div>,
];
export default function Question1() {
  const { t } = useTranslation();

  const [item, setItem] = useState(initial);

  const hdlClickLeft = () => {
    const element = item.shift();
    if (element) setItem(item.concat(element));
  };

  const hdlClickRight = () => {
    const element = item.pop();
    if (element) {
      item.splice(0, 0, element);
      setItem([...item]);
    }
  };

  const hdlClickMovePosition = () => {
    const element = item.splice(0, 3);
    if (element) {
      item.splice(3, 0, ...element);
      setItem([...item]);
    }
  };

  const arr = [...item];
  return (
    <div className="container">
      <ChangeLanguageDropdown />
      <h1>
        <Link to="/">{t("Layout & Style")}</Link>
      </h1>
      <div className="buttonWrapper">
        <div className="box" onClick={hdlClickLeft}>
          <div className="triangle-left"></div>
          <small>{t("Move shape")}</small>
        </div>
        <div className="middleItem" onClick={hdlClickMovePosition}>
          <div className="box">
            <div className="triangle-up"></div>
            <div className="triangle-down"></div>
          </div>
          <small>{t("Move position")}</small>
        </div>
        <div className="box" onClick={hdlClickRight}>
          <div className="triangle-right"></div>
          <small>{t("Move shape")}</small>
        </div>
      </div>
      <div className="itemWrapper">
        <Row justify="end" gutter={16} style={{ width: "1200px" }}>
          {arr.splice(0, 3).map((el, index) => {
            return (
              <Col key={index}>
                <div className="box">{el}</div>
              </Col>
            );
          })}
        </Row>
        <Row justify="center" gutter={16}>
          {arr.map((el, index) => {
            return (
              <Col key={index}>
                <div className="box">{el}</div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
