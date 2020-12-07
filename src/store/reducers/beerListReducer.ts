import { IAction } from "../../entities/entities";
import { IActionSetBeerList, SET_BEER_LIST } from "../actions/beerListAction";

export function beerListReducer(beerList: string[], action:IAction): string[] {
    switch (action.type) {
        case SET_BEER_LIST: {
            const setBeerListAction = action as IActionSetBeerList
            beerList = setBeerListAction.beerList;
            return beerList;
        }
        default: {
            return beerList;
        }
    }
}