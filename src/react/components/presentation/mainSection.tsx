import { makeStyles } from "@material-ui/core";
import React from "react";
import MainSectionTitles from "./mainSectionTitles";
import { Redirect, Route, Switch } from "react-router-dom";
import { FavoriteFoodSectionLink } from "../app/favoriteFoodSectionLink";
import { UserFormSectionLink } from "../app/userFormSectionLink";

export interface IPropsIn {
  isLoggedIn: boolean;
}

export interface IPropsOut {}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  background: {
    width: "100%",
    height: "calc(100vh - 100px)",
    backgroundColor: "#C0C0C0",
    color: "black",
  },
});

const MainSection: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <MainSectionTitles></MainSectionTitles>

      {/* redirect to login page if user is not logged in */}
      {!props.isLoggedIn && <Redirect to="/login" />}
      <Switch>
        <Route
          exact
          path="/mainPage/favoriteFood"
          component={FavoriteFoodSectionLink}
        />
        <Route path="/mainPage/userForm" component={UserFormSectionLink} />
      </Switch>
    </div>
  );
};

export default MainSection;
