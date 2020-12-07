import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IFormData } from "../../../entities/entities";
import {
  dateValidation,
  firstLastNameValidation,
  idValidation,
  phoneNumberValidation,
} from "../../../utils/utils";

export interface IPropsIn {
  beerList: string[];
}

export interface IPropsOut {
  onFormValidSubmit: (formData: IFormData) => void;
  initBeerList: () => void;
  submitBeerChoise: (chosenBeer: string) => void;
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
  oneObjectPerRow: {
    justifyContent: "flex-start",
    width: "89%",
  },
  twoObjectsPerRow: {
    justifyContent: "space-around",
    width: "100%",
  },
  row: {
    display: "flex",
    flexDirection: "row-reverse",
    marginTop: "10px",
    marginBottom: "25px",
  },
  firstCol: {
    marginTop: "6px",
  },
  secondCol: {
    marginTop: "6px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "none",
    direction: "rtl",
    fontSize: "1.7rem",
    width: "90%",
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
    width: "30%",
    justifyContent: "center",
  },
  errorMessage: {
    fontSize: "1.5rem",
    marginTop: "5px",
    color: "red",
    visibility: "visible",
  },
  visibleError: {
    visibility: "visible",
  },
  unvisibleError: {
    visibility: "hidden",
  },
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  submitButton: {
    alignSelf: "flex-start",
    marginLeft: "100px",
    marginTop: "auto",
    marginBottom: "100px",
    fontSize: "35px",
  },
});

const UserFormSection: React.FC<IProps> = (props) => {
  const classes = useStyles();

  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    id: false,
    date: false,
    phoneNumber: false,
  });

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    date: "",
    chosenBeer: "",
    id: "",
    phoneNumber: "",
  });

  const [displayBeers, setDisplayBeers] = useState(false);

  const onInputValueChange = (event: any, formValueType: string) => {
    setFormValues((lastValue: any) => {
      let newValue = { ...lastValue };
      newValue[formValueType] = event.target.value;
      return newValue;
    });
  };

  const onDateChange = (event: any) => {
    onInputValueChange(event, "date");
    let chosenDate = new Date(event.target.value);
    let today = new Date();

    let yearsDifference =
      (today.getTime() - chosenDate.getTime()) / (1000 * 3600 * 24 * 365);

    setDisplayBeers(yearsDifference >= 18);
  };

  const setValidationState = (state: boolean, validationType: string) => {
    setValidation((lastValidationState: any) => {
      let newValidationState = { ...lastValidationState };
      newValidationState[validationType] = state;
      return newValidationState;
    });
  };

  const areAllValuesValid = (validationValue: any) => {
    return (
      validationValue.firstName &&
      validationValue.lastName &&
      validationValue.id &&
      validationValue.phoneNumber &&
      validationValue.date
    );
  };

  useEffect(() => {
    if (areAllValuesValid(validation)) {
      props.onFormValidSubmit({
        FIRST_NAME: formValues.firstName,
        LAST_NAME: formValues.lastName,
        BIRTH_DATE: formValues.date,
        ID_NUMBER: formValues.id,
        PHONE_NAMBER: formValues.phoneNumber,
      });

      if (displayBeers) {
        props.submitBeerChoise(formValues.chosenBeer);
      }
    }
  }, [validation]);

  useEffect(() => {
    props.initBeerList();
  }, []);

  useEffect(() => {
    setFormValues((lastValue: any) => {
      let newValue = { ...lastValue };
      newValue["chosenBeer"] = props.beerList[0];
      return newValue;
    });
  }, [props.beerList]);

  const onFormSubmit = async () => {
    setValidationState(
      firstLastNameValidation(formValues.firstName),
      "firstName"
    );

    setValidationState(
      firstLastNameValidation(formValues.lastName),
      "lastName"
    );

    setValidationState(
      phoneNumberValidation(formValues.phoneNumber),
      "phoneNumber"
    );

    setValidationState(idValidation(formValues.id), "id");

    setValidationState(dateValidation(formValues.date), "date");
  };

  return (
    <div className={classes.background}>
      <div className={classes.pageContainer}>
        <div className={`${classes.row} ${classes.twoObjectsPerRow}`}>
          <div className={classes.inputElement}>
            <div className={classes.secondCol}>
              <input
                className={classes.input}
                type="text"
                id="fname"
                name="firstname"
                placeholder="שם פרטי"
                maxLength={50}
                value={formValues.firstName}
                onChange={(event) => onInputValueChange(event, "firstName")}
              />
              <div
                className={`${classes.errorMessage} ${
                  validation.firstName
                    ? classes.unvisibleError
                    : classes.visibleError
                }`}
              >
                ערכים לא חוקיים
              </div>
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable} htmlFor="fname">
                שם פרטי
              </label>
            </div>
          </div>

          <div className={classes.inputElement}>
            <div className={classes.secondCol}>
              <input
                className={classes.input}
                type="text"
                id="lname"
                name="lastname"
                placeholder="שם משפחה"
                maxLength={50}
                value={formValues.lastName}
                onChange={(event) => onInputValueChange(event, "lastName")}
              />
              <div
                className={`${classes.errorMessage} ${
                  validation.lastName
                    ? classes.unvisibleError
                    : classes.visibleError
                }`}
              >
                ערכים לא חוקיים
              </div>{" "}
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable} htmlFor="lname">
                שם משפחה
              </label>
            </div>
          </div>
        </div>

        <div className={`${classes.row} ${classes.twoObjectsPerRow}`}>
          <div className={classes.inputElement}>
            <div className={classes.secondCol}>
              <input
                className={classes.input}
                type="date"
                id="date"
                name="date"
                onKeyDown={(e) => e.preventDefault()}
                // This is the date today
                max={new Date().toISOString().split("T")[0]}
                value={formValues.date}
                onChange={onDateChange}
              />
              <div
                className={`${classes.errorMessage} ${
                  validation.date
                    ? classes.unvisibleError
                    : classes.visibleError
                }`}
              >
                ערכים לא חוקיים
              </div>{" "}
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable} htmlFor="date">
                תאריך לידה
              </label>
            </div>
          </div>

          <div
            className={`${classes.inputElement}  ${
              displayBeers ? classes.visibleError : classes.unvisibleError
            }`}
          >
            <div className={classes.secondCol}>
              <select
                value={formValues.chosenBeer}
                onChange={(event) => onInputValueChange(event, "chosenBeer")}
                name="beers"
                id="beers"
                className={classes.input}
              >
                {props.beerList.map((beer, index) => (
                  <option key={index} value={beer}>
                    {beer}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable}>בירה אהובה</label>
            </div>
          </div>
        </div>

        <div className={`${classes.row} ${classes.oneObjectPerRow}`}>
          <div className={classes.inputElement}>
            <div className={classes.secondCol}>
              <input
                className={classes.input}
                type="text"
                id="id"
                name="id"
                placeholder="תעודת זהות"
                value={formValues.id}
                onChange={(event) => onInputValueChange(event, "id")}
              />
              <div
                className={`${classes.errorMessage} ${
                  validation.id ? classes.unvisibleError : classes.visibleError
                }`}
              >
                ערכים לא חוקיים
              </div>{" "}
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable} htmlFor="id">
                תעודת זהות
              </label>
            </div>
          </div>
        </div>

        <div className={`${classes.row} ${classes.oneObjectPerRow}`}>
          <div className={classes.inputElement}>
            <div className={classes.secondCol}>
              <input
                className={classes.input}
                type="text"
                id="pnumber"
                name="phonenumber"
                placeholder="מספר טלפון"
                value={formValues.phoneNumber}
                onChange={(event) => onInputValueChange(event, "phoneNumber")}
              />
              <div
                className={`${classes.errorMessage} ${
                  validation.phoneNumber
                    ? classes.unvisibleError
                    : classes.visibleError
                }`}
              >
                ערכים לא חוקיים
              </div>{" "}
            </div>
            <div className={classes.firstCol}>
              <label className={classes.lable} htmlFor="cnumber">
                מספר טלפון
              </label>
            </div>
          </div>
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={classes.submitButton}
          onClick={onFormSubmit}
        >
          המשך
        </Button>
      </div>
    </div>
  );
};

export default UserFormSection;
