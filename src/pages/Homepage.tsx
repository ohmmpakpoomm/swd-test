import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./Homepage.scss";
import ChangeLanguageDropdown from "../components/ChangeLanguageDropdown";

export default function Homepage() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <ChangeLanguageDropdown />
      <div className="wrapper">
        <Link to="/question1" className="item">
          <span className="title">{t("Test")} 1</span>
          <small>{t("Layout & Style")}</small>
        </Link>
        <Link to="/" className="item">
          <span className="title">{t("Test")} 2</span>
          <small>{t("Connect API")}</small>
        </Link>
        <Link to="/question2" className="item">
          <span className="title">{t("Test")} 3</span>
          <small>{t("Form & Table")}</small>
        </Link>
      </div>
    </div>
  );
}
