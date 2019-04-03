import { CONSTANTS } from "../actions";

let listID = 4;
let cardID = 2;

const initialState = [
  {
    title: "To do", // first list
    id: 0,
    cards: [
      {
        id: 0,
        text: "card text to do " // cards of the first list
      },
      {
        id: 1,
        text: "card text1 to do"
      }
    ]
  },
  {
    title: "Doing", // second list
    id: 1,
    cards: [
      {
        id: 0,
        text: "card text doing" // cards of the second list
      },
      {
        id: 1,
        text: "card text1 doing"
      }
    ]
  },
  {
    title: "Done", // third list
    id: 2,
    cards: [
      {
        id: 0,
        text: "card text done" // cards of the third list
      },
      {
        id: 1,
        text: "card text1 done"
      }
    ]
  },
  {
    title: "Deployed", // first list
    id: 3,
    cards: [
      {
        id: 0,
        text: "card text deployed" // cards of the first list
      },
      {
        id: 1,
        text: "card text1 deployed"
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listID
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.cardID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState

    default:
      return state;
  }
};

export default listsReducer;
