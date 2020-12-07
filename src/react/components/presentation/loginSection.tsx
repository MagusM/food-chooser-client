import { makeStyles } from "@material-ui/core";
import React from "react";
import GoogleLogin from "react-google-login";
import googleIcon from "../../../assets/google-logo.png";
import { useHistory } from "react-router-dom";

export interface IPropsIn {}

export interface IPropsOut {
  loginSucceed: (response: any) => void;
}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  background: {
    width: "100%",
    height: "calc(100vh - 100px)",
    backgroundColor: "#C0C0C0",
    color: "black",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
  },
  title: {
    fontSize: "40px",
    marginBottom: "5%",
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    color: "white",
    border: "solid",
    width: "500px",
    borderColor: "gray",
    backgroundColor: "gray",
    cursor: "pointer",
  },
  loginImage: {
    backgroundColor: "white",
  },
  loginText: {
    margin: "auto",
    fontSize: "25px",
  },
});

const LoginSection: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const history = useHistory();
  const handleClick = () => history.push("/mainPage/userForm");

  const googleLoginSucceed = (response: any) => {
    props.loginSucceed(response);
    handleClick();
  };

  const googleLoginFailed = (response: any) => {
    alert("There was an error");
  };

  return (
    <div className={classes.background}>
      <div className={classes.sectionContainer}>
        <div className={classes.title}>
          <bdi>
            ברוכים הבאים ל<b>אכלת אותה!</b> בואו נתחבר ומיד נתחיל...
          </bdi>
        </div>
        <GoogleLogin
          clientId="880949436388-0apqq6t18p7n97numuo1rhbkjic8o4v8.apps.googleusercontent.com"
          buttonText="Sign in with Google"
          render={(renderProps) => (
            <div className={classes.loginButton} onClick={renderProps.onClick}>
              <img
                src={googleIcon}
                alt="Google icon"
                className={classes.loginImage}
              />
              <div className={classes.loginText}>Sign in with Google</div>
            </div>
          )}
          onSuccess={googleLoginSucceed}
          onFailure={googleLoginFailed}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};

export default LoginSection;
