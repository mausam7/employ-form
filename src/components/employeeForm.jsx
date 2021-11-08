import { UploadOutlined} from '@ant-design/icons';
import { Form, Input, Button, Select, DatePicker, Image, Upload, message } from "antd";
import React, { Component } from "react";
const { Option } = Select;

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class EmployeeForm extends Component {
  state = {
       loading: false,
  };

  handleChange = info => {
    this.setState({
      imageUrl:info.file.originFileObj,
      loading: false,
    })
  };

  onFinish = (values) => {
    console.log("Success:", values);
    if (!localStorage.getItem("count")) {
      localStorage.setItem("count", 0);
    }
    const count = localStorage.getItem("count");
    const employee_number = parseInt(count) + 1;
    localStorage.setItem("count", employee_number);
    localStorage.setItem("employee" + employee_number, employee_number);
    for (const name in values) {
      localStorage.setItem(name + employee_number, values[name]);
    }
    window.location = "/employee-table";

  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="977">+977</Option>
        <Option value="1">+1</Option>
        <Option value="99">+99</Option>
      </Select>
    </Form.Item>
  );
  render() {
    const { imageUrl } = this.state;
    return (<div>

      <h1 style={{ textAlign: "center" }}>Employee Form</h1>
      <React.Fragment>
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ prefix: "977", remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
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
            <Input addonBefore={this.prefixSelector} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            name="country"
            label="Country"
            rules={[{ required: true, message: "Please select country!" }]}
          >
            <Select placeholder="Select your country">
              <Option value="Nepal">Nepal</Option>
              <Option value="Chaina">Chaina</Option>
              <Option value="USA">USA</Option>
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
          <Form.Item
            name="photo"
            label="Photo"
            rules={[{ required: true, message: "Please upload photo!" }]}
          >
            <Upload
        showUploadList={false}
        onChange={this.handleChange}>
           <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          </Form.Item>

          
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Image
            src={imageUrl?URL.createObjectURL(imageUrl):"https://www.fullform-shortform.com/wp-content/uploads/2021/05/Welcome-Short-Form.png"} alt="photo" style={{ width: '300px', height: '250px' }}
          />
          </Form.Item>
          
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </React.Fragment>
    </div>
    );
  }

};

export default EmployeeForm;