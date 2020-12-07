import { ThunkAction } from "redux-thunk";
import { IAction } from "../../entities/entities";
import { IState } from "../reducers/reducer";

export const SET_BEER_LIST = "SET_BEER_LIST";

export interface IActionSetBeerList extends IAction {
  beerList: string[]
}

export function setBeerList(beerList: string[]): IActionSetBeerList {
  return {
    type: SET_BEER_LIST,
    beerList: beerList,
  };
}

export function fetchBeerList(): ThunkAction<void, IState, undefined, IAction> {
    return (dispatch, getState) => {
      fetch(`http://localhost:2000/beers`)
      .then ((res) => res.json())
        .then((data: string[]) => {     
          dispatch(setBeerList(data))
      });
  };
}

export function inserChosenBeer(beerType: string): ThunkAction<void, IState, undefined, IAction> {
    return (dispatch, getState) => {
        fetch('http://localhost:2000/userChosenBeer', {
            method: 'post',
            body: JSON.stringify({
                "chosenBeer": beerType,
                "email": getState().userData.email
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    };
}