import React from "react";
import { Form, Input, Button, Space, Card, Select, DatePicker } from "antd";
const { Option } = Select;

const EmployeeForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="977">+977</Option>
        <Option value="1">+1</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  );
  return (<div>
  
     <h1 style={{textAlign:"center"}}>Employee Form</h1>
    <React.Fragment>
                <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ prefix: "977", remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="First Name"
              name="first Name"
              rules={[
                { required: true, message: "Please input your firstname!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="last Name"
              rules={[
                { required: true, message: "Please input your lastname!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true, message: "Please select gender!" }]}
            >
              <Select placeholder="Select your gender">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="DOB"
              label="D.O.B."
              rules={[{ required: true, message: "Please select your Date of Birth" }]}
            >
              <DatePicker />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              type="number"
              label="Phone Number"
              rules={[
                { required: true, message: "Please input your phone number!" },
              ]}
            >
              <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              name="country"
              label="Country"
              rules={[{ required: true, message: "Please select country!" }]}
            >
              <Select placeholder="Select your country">
                <Option value="nepal">Nepal</Option>
                <Option value="usa">Chaina</Option>
                <Option value="canada">USA</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="designation"
              label="Designation"
              rules={[
                { required: true, message: "Please select designation!" },
              ]}
            >
              <Select placeholder="Select your designation">
                <Option value="QA">QA</Option>
                <Option value="dev">Developer</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="start-date"
              label="Start Date"
              rules={[{ required: true, message: "Please select start date!" }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 7, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
    </React.Fragment>
    </div>
  );
};

export default EmployeeForm;