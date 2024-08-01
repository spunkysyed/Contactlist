import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "../reducers/ContactReducer.js";

// Create the Redux store with the contactReducer and Redux DevTools extension
const store = createStore(contactReducer, composeWithDevTools());

export default store;