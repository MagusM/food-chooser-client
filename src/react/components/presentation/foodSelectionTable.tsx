import {
  Checkbox,
  createStyles,
  Divider,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import { ICheckboxFoodOption } from "../../../entities/entities";

interface IProps {
  foodCheckboxOptions: ICheckboxFoodOption[];
  handleCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  otherOption: boolean;
  onOtherOptionPress: (event: any) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      fontSize: "50px",
      justifyContent: "center",
    },
    foodType: {
      fontSize: "35px",
    },
    wrapper: {
      width: "100%",
    },
    root: {
      width: "100%",
      maxWidth: "360px",
      backgroundColor: theme.palette.background.paper,
    },
    container: {
      minWidth: "350px",
    },
  })
);

const FoodSectionTable: React.FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <List dense className={classes.root}>
        {props.foodCheckboxOptions.map((option: ICheckboxFoodOption, index) => (
          <div key={index}>
            <ListItem button>
              <ListItemText
                primary={
                  <Typography component="span" variant="h4" color="textPrimary">
                    {option.food_name}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Checkbox
                  checked={option.isSelected}
                  onChange={(event) => props.handleCheckboxChange(event, index)}
                  name={option.food_name}
                  color="primary"
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </div>
        ))}

        <ListItem button>
          <ListItemText
            primary={
              <Typography component="span" variant="h4" color="textPrimary">
                אחר
              </Typography>
            }
          />
          <ListItemSecondaryAction>
            <Checkbox
              checked={props.otherOption}
              onChange={(event) => props.onOtherOptionPress(event)}
              name="other"
              color="primary"
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </div>
  );
};

export default FoodSectionTable;
