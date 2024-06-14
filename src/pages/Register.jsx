import React from "react";
import { Button, Flex, Form, Input, notification } from "antd";
import authServices from "../services/authServices";

const onFinish = async (values) => {
  // Validating phone
  const phone = values.phone;

  let validNumber = false;

  if (phone.substring(0, 1) === "0") {
    if (phone.length === 10) {
      validNumber = true;
    }
  } else {
    if (phone.length === 11) {
      validNumber = true;
    }
  }

  if (validNumber) {
    const registerUser = await authServices.register(values);
    if (registerUser) {
      notification.success({ message: registerUser.message });
    }

    console.log(registerUser);
  } else {
    notification.error({ message: "Not a Valid PHONE NUMBER" });
  }
};
const onFinishFailed = (errorInfo) => {};

const intialValues = {
  firstName: "",
  password: "",
  lastName: "",
  email: "",
  phone: "",
  postCode: "",
};

const Register = () => (
  <Flex justify="center" vertical align="center">
    <h2>Register</h2>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={intialValues}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      title="Register Form"
    >
      <Form.Item
        label="FirstName"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input your username!",
            min: 3,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="lastName"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input your Lastname!",
            min: 2,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your Email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="postCode"
        name="postCode"
        rules={[
          {
            required: true,
            message: "Please input your postCode!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Flex>
);
export default Register;
