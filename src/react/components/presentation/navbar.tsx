import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import citrusIcon from "../../../assets/icons8-citrus-60.png";

export interface IPropsIn {
  isLoggedIn: boolean;
  userName: string;
}

export interface IPropsOut {}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  navbarBackground: {
    width: "100%",
    height: "100px",
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    fontSize: "50px",
    alignItems: "center",
  },
  websiteIcon: {
    display: "flex",
    color: "gray",
    width: "300px",
    marginRight: "50px",
    justifyContent: "space-between",
  },
  greetingSection: {
    color: "black",
    marginLeft: "40px",
  },
});

const Navbar: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.navbarBackground}>
      <div className={classes.websiteIcon}>
        <div>אכלת אותה</div>
        <img src={citrusIcon} alt="test" />
      </div>
      {props.isLoggedIn && (
        <div className={classes.greetingSection}>
          <b>{props.userName}</b> שלום לך
        </div>
      )}
    </div>
  );
};

export default Navbar;
