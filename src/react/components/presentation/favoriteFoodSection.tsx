import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ICheckboxFoodOption, IFoodOption } from "../../../entities/entities";
import { convertFoodOptions } from "../../../utils/utils";
import FoodSectionTable from "./foodSelectionTable";

export interface IPropsIn {
  foodOptions: IFoodOption[];
}

export interface IPropsOut {
  initFoodOptions: () => void;
  addFoodOption: (foodName: string) => void;
  onSubmit: (selectedFoods: ICheckboxFoodOption[]) => void;
}

interface IProps extends IPropsIn, IPropsOut {}

const useStyles = makeStyles({
  background: {
    height: "calc(100vh - 180px)",
    backgroundColor: "white",
    width: "60%",
    color: "black",
    float: "right",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginTop: "50px",
    marginRight: "30px",
    height: "calc(100% - 50px)",
  },
  title: {
    fontSize: "33px",
  },
  table: {
    maxHeight: "100%",
    overflowY: "auto",
  },
  button: {
    alignSelf: "flex-start",
    marginLeft: "100px",
    marginTop: "auto",
    marginBottom: "100px",
    fontSize: "35px",
  },

  firstCol: {},
  secondCol: {
    display: "flex",
    marginLeft: "4px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
    direction: "rtl",
    fontSize: "1.7rem",
    width: "100%",
  },
  lable: {
    padding: "12px",
    display: "inline-block",
    fontSize: "2rem",
    marginLeft: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  inputElement: {
    display: "flex",
    width: "40%",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    height: "60%",
    alignItems: "center",
    marginRight: "60px",
    marginTop: "30px",
  },
  visibleElement: {
    visibility: "visible",
  },
  unvisibleElement: {
    visibility: "hidden",
  },
});

const FavoriteFoodSection: React.FC<IProps> = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.initFoodOptions();
  }, []);

  useEffect(() => {
    setFoodOptionsCheckbox(convertFoodOptions(props.foodOptions));
  }, [props.foodOptions]);

  const [newFoodOption, setNewFoodOption] = useState("");

  const [otherOption, setOtherOption] = useState(false);

  const onOtherOptionPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherOption(event.target.checked);
  };

  const handleNewFoodChange = (event: any) => {
    setNewFoodOption(event.target.value);
  };

  const [foodOptionsCheckbox, setFoodOptionsCheckbox] = React.useState(
    convertFoodOptions(props.foodOptions)
  );

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setFoodOptionsCheckbox((lastState) => {
      let newState = [...lastState];
      console.log("New checkbox state:", newState);
      newState[index].isSelected = event.target.checked;
      return newState;
    });
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.title}>אנא בחר את המאכלים האהובים עליך</div>

        <div className={classes.row}>
          <div className={classes.table}>
            <FoodSectionTable
              foodCheckboxOptions={foodOptionsCheckbox}
              handleCheckboxChange={handleCheckboxChange}
              otherOption={otherOption}
              onOtherOptionPress={onOtherOptionPress}
            ></FoodSectionTable>
          </div>

          <div
            className={`${classes.inputElement} ${
              otherOption ? classes.visibleElement : classes.unvisibleElement
            }`}
          >
            <div className={classes.firstCol}>
              <button
                className={classes.lable}
                onClick={() => props.addFoodOption(newFoodOption)}
              >
                הוסף
              </button>
            </div>
            <div className={classes.secondCol}>
              <input
                value={newFoodOption}
                onChange={handleNewFoodChange}
                className={classes.input}
                type="text"
                id="id"
                name="id"
                placeholder="הוסף אוכל.."
              />
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.button}
          onClick={() =>
            props.onSubmit(
              foodOptionsCheckbox.filter(
                (option: ICheckboxFoodOption) => option.isSelected === true
              )
            )
          }
        >
          סיום
        </Button>
      </div>
    </div>
  );
};

export default FavoriteFoodSection;
