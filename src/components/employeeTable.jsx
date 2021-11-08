import React from "react";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Employee ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname",
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "D.O.B",
    dataIndex: "DOB",
    key: "DOB",
  },
  {
    title: "Email",
    key: "email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    key: "phone",
    dataIndex: "phone",
  },
  {
    title: "Country",
    key: "country",
    dataIndex: "country",
  },
  {
    title: "Designamtion",
    key: "designation",
    dataIndex: "designation",
  },
  {
    title: "Start Date",
    key: "start_date",
    dataIndex: "start_date",
  },
  // {
  //   title: "Action",
  //   dataIndex: "action",
  //   key: "action",
  //   render: (text, record, index) => (
  //     <DeleteOutlined onClick={() => handleDelete(index)} />
  //   ),
];

function getEmployeeData() {
  let employee_data = [];
  const count = localStorage.getItem("count");
  for (let i = 1; i <= count; i++) {
    const employee = {
      id: localStorage.getItem(`employee${i}`),
      firstname: localStorage.getItem(`firstname${i}`),
      lastname: localStorage.getItem(`lastname${i}`),
      gender: localStorage.getItem(`gender${i}`),
      DOB: localStorage.getItem(`DOB${i}`).slice(4,15),
      email: localStorage.getItem(`email${i}`),
      phone: localStorage.getItem(`phone${i}`),
      country: localStorage.getItem(`country${i}`),
      designation: localStorage.getItem(`designation${i}`),
      start_date: localStorage.getItem(`start-date${i}`).slice(4,15),
    };
    employee_data.push(employee);
  }
  return employee_data;
}

const data = getEmployeeData();

const EmployeeTable = () => {
  return <Table columns={columns} dataSource={data} style={{overflow:"scroll"}}/>;
};

export default EmployeeTable;
