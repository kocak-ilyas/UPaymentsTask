import { configureStore } from "@reduxjs/toolkit";
import { upaymentsReducer } from "./upaymentsReducer";

export const store = configureStore({ reducer: { upaymentsReducer } });
