import React, {useState, useEffect} from 'react';
import {useSelector} from "react-redux";
import logo from "../../assets/images/logo.png";
import {Image, Layout, Menu, Form, Typography, Row, Col, Input, Table, Tag, Button, Avatar, Popover} from "antd";
import {DesktopOutlined, UserOutlined} from "@ant-design/icons";

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const SideMenu = (props: any) => {
  const [collapsed, setCollapsed] = useState(false);

  // const { customer: userLogin = {} } = useSelector((state: RootState) => state.admin.loginUser);

  return (
      <>
        Side menu
      </>
  );
};

export default SideMenu;
