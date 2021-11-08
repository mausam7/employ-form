import EmployeeForm from "./components/employeeForm";
import "./styles.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import AboutUs from "./components/aboutUs";
import { NavLink, Route, Switch } from "react-router-dom";
import EmployeeTable from "./components/employeeTable";

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>
              <NavLink to="/about-us">About Us</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/employee-form">Employee Form</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/employee-table">Employee Table</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Switch>
            <Route exact path="/" component={AboutUs} />
            <Route path="/employee-form" component={EmployeeForm} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/employee-table" component={EmployeeTable} />

          </Switch>
        </Content>
        <Footer style={{ textAlign: "center" }}>
         
        </Footer>
      </Layout>
    </div>
  );
}