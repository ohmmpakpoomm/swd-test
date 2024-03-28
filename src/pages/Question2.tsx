import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form, Input, Radio, Select, DatePicker, Button, Space } from "antd";

import "./Question2.scss";
import ChangeLanguageDropdown from "../components/ChangeLanguageDropdown";
import nationalityList from "../assets/nationality-list";
import phoneCode from "../assets/phone-code";

export default function Question2() {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const { Option } = Select;

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  return (
    <>
      <ChangeLanguageDropdown />
      <h1>
        <Link to="/">{t("Form & Table")}</Link>
      </h1>
      <div className="formWrapper">
        <Form form={form} onFinish={onFinish}>
          <div className="rowWrapper">
            <Form.Item
              name="prefix"
              label="Prefix"
              rules={[{ required: true, message: "Please select!" }]}
            >
              <Select style={{ minWidth: 80 }}>
                <Select.Option value="mr">Mr.</Select.Option>
                <Select.Option value="ms">Ms.</Select.Option>
                <Select.Option value="mrs">Mrs.</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="First name"
              name="firstName"
              style={{ minWidth: 350 }}
              rules={[
                { required: true, message: "Please enter your first name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Last name"
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
              label="Birthday"
              rules={[
                { required: true, message: "Please enter your birthday!" },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              name="nationality"
              label="Nationality"
              rules={[{ required: true, message: "Please select!" }]}
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
            <Form.Item label="National ID" style={{ minWidth: 350 }}>
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select!" }]}
            >
              <Radio.Group>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="notSpecified">Not specified</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="countryCode"
              label="Phone number"
              rules={[{ required: true, message: "Please select!" }]}
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
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="passport"
              label="Passport ID"
              style={{ minWidth: 350 }}
            >
              <Input />
            </Form.Item>
          </div>
          <div className="rowWrapper">
            <Form.Item
              name="salary"
              label="Expected salary"
              style={{ minWidth: 350 }}
              rules={[
                {
                  required: true,
                  message: "Please enter your expected salary!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
                <Button htmlType="reset">reset</Button>
              </Space>
            </Form.Item>
          </div>
        </Form>
      </div>
    </>
  );
}
