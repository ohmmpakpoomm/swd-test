import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n";

import "./ChangeLanguageDropdown.scss";

export default function ChangeLanguageDropdown() {
  const { t } = useTranslation();

  const hdlChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const items: MenuProps["items"] = [
    {
      label: <span onClick={() => hdlChangeLang("en")}>{t("EN")}</span>,
      key: "English",
    },
    {
      label: <span onClick={() => hdlChangeLang("th")}>{t("TH")}</span>,
      key: "Thai",
    },
  ];
  return (
    <div className="dropdown">
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button>
          {t("Language")} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}
