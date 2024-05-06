import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import cars from "./cars";


// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
  auth,
  cars
})