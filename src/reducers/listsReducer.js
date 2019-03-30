const initialState = [
  {
    title: "To do", // first list
    id: 0,
    cards: [
      {
        id: 0,
        text: "card text to do "  // cards of the first list
      },
      {
        id: 1,
        text: "card text1 to do"
      }
    ]
  },
  {
    title: "Doing", // second list
    id: 0,
    cards: [
      {
        id: 0,
        text: "card text doing"  // cards of the second list
      },
      {
        id: 1,
        text: "card text1 doing"
      }
    ]
  },
  {
    title: "Done", // third list
    id: 0,
    cards: [
      {
        id: 0,
        text: "card text done"  // cards of the third list
      },
      {
        id: 1,
        text: "card text1 done"
      }
    ]
  },
  {
    title: "Deployed", // first list
    id: 0,
    cards: [
      {
        id: 0,
        text: "card text deployed"  // cards of the first list
      },
      {
        id: 1,
        text: "card text1 deployed"
      }
    ]
  },
  
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
