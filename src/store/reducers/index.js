import * as ActionType from "../ActionType";

function decks(state = {}, action) {
  console.log("from reducers");
  console.log(action);

  switch (action.type) {
    case ActionType.GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ActionType.SAVE_DECK_TITLE:
      return {
        ...state,
        ...action.deck,
      };
    case ActionType.ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.deck]: {
          ...state[action.deck],
          questions: state[action.deck].questions.concat(action.card),
        },
      };

    default:
      return state;
  }
}

export default decks;