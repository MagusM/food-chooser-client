import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

interface IProps {}

const useStyles = makeStyles({
  navbarBackground: {
    width: "100%",
    height: "80px",
    backgroundColor: "#D3D3D3",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  favoriteFood: {
    display: "flex",
    border: "solid",
    height: "calc(100% - 2px)",
    borderWidth: "1px",
    alignItems: "center",
    padding: "0px 50px",
    fontSize: "2em",
    justifyContent: "space-between",
    minWidth: "250px",
    cursor: "pointer",
  },
  userProfile: {
    display: "flex",
    border: "solid",
    height: "calc(100% - 2px)",
    borderWidth: "1px",
    alignItems: "center",
    padding: "0px 50px",
    fontSize: "2em",
    justifyContent: "space-between",
    minWidth: "230px",
    cursor: "pointer",
  },
  pressed: {
    backgroundColor: "#CBF6FF",
  },
});

const MainSectionTitles: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const [pressedTitle, setPressedTitle] = useState("userProfile");

  const favoriteFoodClick = () => {
    history.push("/mainPage/favoriteFood");
    setPressedTitle("favoriteFood");
  };

  const userFormClick = () => {
    history.push("/mainPage/userForm");
    setPressedTitle("userProfile");
  };

  return (
    <div className={classes.navbarBackground}>
      <div
        className={`${classes.favoriteFood} ${
          pressedTitle === "favoriteFood" ? classes.pressed : ""
        }`}
        onClick={favoriteFoodClick}
      >
        <div>מאכלים אהובים</div>
        <img src="https://img.icons8.com/ios-glyphs/40/000000/cheeseburger.png" />
      </div>

      <div
        className={`${classes.userProfile} ${
          pressedTitle === "userProfile" ? classes.pressed : ""
        }`}
        onClick={userFormClick}
      >
        <div>פרטים אישיים</div>
        <img src="https://img.icons8.com/material/40/000000/user-male-circle--v1.png" />
      </div>
    </div>
  );
};

export default MainSectionTitles;
