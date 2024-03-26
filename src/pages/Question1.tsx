import ChangeLanguageDropdown from "../components/ChangeLanguageDropdown";
import { Row, Col } from "antd";

import "./Question1.scss";

export default function Question1() {
  const item = [
    <div className="circle"></div>,
    <div className="oval"></div>,
    <div className="trapezoid"></div>,
    <div className="rectangle"></div>,
    <div className="parallelogram"></div>,
    <div className="square"></div>,
  ];
  return (
    <div className="container">
      <ChangeLanguageDropdown />
      <h1>Layout & Style</h1>
      <div className="buttonWrapper">
        <div className="box">
          <div className="triangle-left"></div>
        </div>
        <div className="middleItem">
          <div className="box">
            <div className="triangle-up"></div>
          </div>
          <div className="box">
            <div className="triangle-down"></div>
          </div>
        </div>
        <div className="box">
          <div className="triangle-right"></div>
        </div>
      </div>
      <div className="itemWrapper">
        <Row justify="end" gutter={16} style={{ width: "1200px" }}>
          {item.splice(0, 3).map((el, index) => {
            return (
              <Col key={index}>
                <div className="box">{el}</div>
              </Col>
            );
          })}
        </Row>
        <Row justify="center" gutter={16}>
          {item.map((el, index) => {
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
