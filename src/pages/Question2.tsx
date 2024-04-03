import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Form,
  Input,
  Radio,
  Select,
  DatePicker,
  Button,
  Space,
  Table,
} from "antd";
import type { TableColumnsType } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Question2.scss";
import ChangeLanguageDropdown from "../components/ChangeLanguageDropdown";
import nationalityList from "../assets/nationality-list";
import phoneCode from "../assets/phone-code";

interface FormType {
  key: string;
  prefix: string;
  fullName: string;
  firstName: string;
  lastName: string;
  birthday: Date;
  countryCode?: string;
  nationality: string;
  nationalId: string;
  gender: string;
  phone: string;
  passport?: string;
  salary: string;
  id1?: string;
  id2?: string;
  id3?: string;
  id4?: string;
  id5?: string;
}
export default function Question2() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data") || "[]")
  );
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const { Option } = Select;

  const onFinish = (values: FormType) => {
    console.log(values);

    if (values.id1 && values.id2 && values.id3 && values.id4 && values.id5) {
      values.nationalId = `${values.id1}-${values.id2}-${values.id3}-${values.id4}-${values.id5}`;
    }
    delete values.id1;
    delete values.id2;
    delete values.id3;
    delete values.id4;
    delete values.id5;

    if (!values.passport) {
      delete values.passport;
    }

    values.phone = `+${values.countryCode}${values.phone}`;
    delete values.countryCode;

    values.fullName = `${values.prefix}${values.firstName} ${values.lastName}`;

    values.key = uuidv4();

    localStorage.setItem("data", JSON.stringify([...data, values]));
    setData([...data, values]);
  };

  const columns: TableColumnsType<FormType> = [
    {
      title: t("Name"),
      dataIndex: "fullName",
      sorter: (a, b) => a.fullName.localeCompare(b.fullName),
    },
    {
      title: t("Gender"),
      dataIndex: "gender",
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: t("Phone Number"),
      dataIndex: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
    {
      title: t("Nationality"),
      dataIndex: "nationality",
      sorter: (a, b) => a.nationality.localeCompare(b.nationality),
    },
    {
      title: t("Management"),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  const deleteSelected = () => {
    const newData = data.filter(
      (el: FormType) => !selectedRowKeys.includes(el.key)
    );
    localStorage.setItem("data", JSON.stringify(newData));
    setData(newData);
    setSelectedRowKeys([]);
  };
  return (
    <div className="container">
      <ChangeLanguageDropdown />
      <h1>
        <Link to="/">{t("Form & Table")}</Link>
      </h1>
      <div className="formWrapper">
        <Form form={form} onFinish={onFinish}>
          <div className="rowWrapper">
            <Form.Item
              name="prefix"
              label={t("Prefix")}
              rules={[{ required: true, message: t("Please select!") }]}
            >
              <Select style={{ minWidth: 80 }}>
                <Select.Option value="Mr.">{t("Mr.")}</Select.Option>
                <Select.Option value="Ms.">{t("Ms.")}</Select.Option>
                <Select.Option value="Mrs.">{t("Mrs.")}</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={t("First Name")}
              name="firstName"
              style={{ minWidth: 350 }}
              rules={[
                { required: true, message: t("Please enter your first name!") },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={t("Last name")}
              name="lastName"
              style={{ minWidth: 350 }}
              rules={[
                { required: true, message: "Please enter your last name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="birthday"
              label={t("Birthday")}
              rules={[
                { required: true, message: t("Please enter your birthday!") },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="nationality"
              label={t("Nationality")}
              rules={[{ required: true, message: t("Please select!") }]}
            >
              <Select style={{ minWidth: 350 }}>
                {nationalityList.map((el, index) => {
                  return (
                    <Option key={index} value={el}>
                      {el}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item label={t("National ID")} name="id1">
              <Input
                maxLength={1}
                style={{ width: "40px", textAlign: "center" }}
              />
            </Form.Item>
            <Form.Item name="id2">
              <Input
                maxLength={4}
                style={{ width: "160px", textAlign: "center" }}
              />
            </Form.Item>
            <Form.Item name="id3">
              <Input
                maxLength={5}
                style={{ width: "200px", textAlign: "center" }}
              />
            </Form.Item>
            <Form.Item name="id4">
              <Input
                maxLength={2}
                style={{ width: "80px", textAlign: "center" }}
              />
            </Form.Item>
            <Form.Item name="id5">
              <Input
                maxLength={1}
                style={{ width: "40px", textAlign: "center" }}
              />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="gender"
              label={t("Gender")}
              rules={[{ required: true, message: t("Please select!") }]}
            >
              <Radio.Group>
                <Radio value="Male">{t("Male")}</Radio>
                <Radio value="Female">{t("Female")}</Radio>
                <Radio value="NotSpecified">{t("Not specified")}</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="countryCode"
              label={t("Phone Number")}
              rules={[{ required: true, message: t("Please select!") }]}
            >
              <Select style={{ minWidth: 120 }}>
                {phoneCode.map((el, index) => {
                  return (
                    <Option key={index} value={el.code}>
                      {el.iso} (+{el.code})
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: t("Please enter your phone number!"),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="passport"
              label={t("Passport Number")}
              style={{ minWidth: 350 }}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <div className="space">
              <Form.Item
                name="salary"
                label={t("Expected Salary")}
                style={{ minWidth: 350 }}
                rules={[
                  {
                    required: true,
                    message: t("Please enter your expected salary!"),
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    {t("Submit")}
                  </Button>
                  <Button htmlType="reset">{t("Reset")}</Button>
                </Space>
              </Form.Item>
            </div>
          </div>
        </Form>
      </div>
      <div className="tableWrapper">
        <div style={{ marginBottom: 16 }}>
          <Button htmlType="button" onClick={deleteSelected}>
            {t("Delete")}
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
}
