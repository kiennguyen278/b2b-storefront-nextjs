import React, {useEffect, useState} from "react";
import {Form, Input, Button, Typography, Alert} from "antd";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import {useRouter} from "next/router";
import { NextPage } from "next";

const {Title} = Typography;

const LoginPage: NextPage = () => {
  const [form] = Form.useForm();
  // const router = useRouter();
  // const history = useHistory();
  // const history = useRouter();
  // const { t, i18n } = useTranslation();
  // const dispatch = useAppDispatch();
  //
  // const routerRedirect = useCheckToRedirect();


  // const loginUser = useSelector((state: RootState) => get(state.admin, "loginUser", {}));
  // const isSuccess = useSelector((state: RootState) => get(state.admin, "isSuccess", false));
  // const isLoading = useSelector((state: RootState) => get(state.admin, 'isLoading', false));
  // const errorMessage = useSelector((state: RootState) => get(state.admin, 'errorMessage', ''));

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  // useEffect(() => {
    // if(routerRedirect){
    //   history.push(routerRedirect);
    // }
    // console.log(routerRedirect);

  // }, [loginUser]);




  // const fadeInUp = {
  //   delay: 100,
  //   from: {
  //     opacity: 0,
  //     translateY: 80
  //   },
  //   to: {
  //     opacity: 1,
  //     translateY: 0
  //   }
  // };

  // const onFinish = async (data) => {
    // dispatch(clearUserLoginState());
    //
    // setIsLoading(true);
    //
    // const dataLogin = await dispatch(login(data));
    // if (login.fulfilled.match(dataLogin)) {
    //   const { customer = {}} = getSafeValue(dataLogin, "payload", {});
    //   const permission = getSafeValue(customer, "permission", false);
    //   const assignCompany = getSafeValue(customer, "assignCompany", {});
    //   const roleID = getSafeValue(customer, "roleId", -1);
    //   if (customer.cartId) {
    //     storageLocal.set(KeyAsyncStore.cartId, customer.cartId);
    //   }
    //   if (!_.isEmpty(assignCompany)) {
    //     if (roleID === ConstRoleID.ROLE_OWNER || roleID === ConstRoleID.ROLE_EMPLOYEE) {
    //       dispatch(setAssignCompany(customer));
    //       storageLocal.set(KeyAsyncStore.appKey, assignCompany.appKey);
    //       const appLang = getSafeValue(assignCompany, "lang", "en");
    //       changeLanguage(appLang);
    //     }
    //   }
    //
    //   checkToRedirect(customer);
    //
    // } else if(login.rejected.match(dataLogin)) {
    //   const errMsg = getSafeValue(dataLogin, "payload.message", "");
    //   setErrorMessage(errMsg);
    // }
    //
    // setIsLoading(false);

  // };


  // const checkToRedirect = async customer => {

    // if (!_.isEmpty(customer) && storageLocal.get("jwt_token", '')) {
    //   const permissions = getSafeValue(customer, "permission", {});
    //   if (window.sessionStorage.getItem("redirectQuoteEmail")) {
    //     let redirectQuoteEmail = window.sessionStorage.getItem("redirectQuoteEmail");
    //     storageLocal.clear();
    //     return history.push(`${redirectQuoteEmail}`);
    //   }
    //
    //   if (customer.roleId === ConstRoleID.ROLE_ADMIN) {
    //     return history.push(RouteConst.DASHBOARD_URL, undefined, { locale: 'de' });
    //   }
    //
    //   if (customer.resetPassword) {
    //     if (customer.roleId === ConstRoleID.ROLE_AGENT) {
    //       return history.push(RouteConst.DASHBOARD_URL);
    //     } else {
    //       return history.push(RouteConst.ROOT_URL);
    //     }
    //   } else if (!customer.resetPassword) {
    //     return history.push(RouteConst.FORCE_CHANGE_PASSWORD);
    //   }
    // }
  // };

  // const changeLanguage = lng => {
    // i18n.changeLanguage(lng);
    // apiInstance.defaults.headers[HeaderKey.ACCEPT_LANGUAGE] = lng;
  // };

  useEffect(() => {
    // dispatch(clearUserLoginState());
  }, []);

  // useEffect(() => {
  //   if (!_.isEmpty(loginUser)){
  //       history.push('/');
  //   }
  // }, [loginUser]);
  //
  // useEffect(() => {
  //   if (isSuccess) {
  //     history.push('/');
  //       dispatch(clearUserLoginState());
  //   }
  // }, [isSuccess]);

  return (
      <Form
          layout="vertical"
          form={form}
          requiredMark={false}
          name="loginForm"
          // onFinish={onFinish}
      >
        <div className="loginForm">
          {/*<animated.div style={fadeInUp1}>*/}
            <div><Image src={logo} alt="Login"/></div>
          {/*</animated.div>*/}

          {/*<animated.div style={fadeInUp2}>*/}
            <Title level={2}>Login</Title>


            {/*<CSSTransition*/}
                {/*in={errorMessage != ""}*/}
                {/*timeout={300}*/}
                {/*unmountOnExit*/}
                {/*classNames="alert">*/}
              {/*<Alert message={errorMessage} type="error" className="errorMessage"/>*/}
            {/*</CSSTransition>*/}

            <Form.Item
                label="Username"
                name="username"
                rules={[
                  {required: true, message: "Please input your username!"}
                ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                  {required: true, message: "Please input your password!"}
                ]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item className="btnContainer">
              {/*<Button type="link"*/}
              {/*className="forgotBtn"*/}
              {/*disabled={isLoading} >Forgot Your Password?</Button>*/}

              <Button type="primary"
                      htmlType="submit"
                      disabled={isLoading}
                      loading={isLoading}
                      size="large"
                      className="submitBtn">Login</Button>
            </Form.Item>
          {/*</animated.div>*/}
        </div>
      </Form>
  );

};

// LoginPage.Layout = AuthLayout;

export default LoginPage;
