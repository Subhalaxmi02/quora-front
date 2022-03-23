const initialState = {
  question: []
}
const AddQuestion = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
      case "ADD_QUESTION":
          return state
      case "ADD_QUESTION_FAILED":
          return state
      default:
          return state
  }

}


export default AddQuestion