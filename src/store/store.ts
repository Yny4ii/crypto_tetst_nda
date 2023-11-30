import { configureStore } from "@reduxjs/toolkit";
import { CurrenciesReducer } from "@/store/slices/currenciesSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const makestore = () =>
  configureStore({
    reducer: {
      currencies: CurrenciesReducer,
    },
  });

export type AppStore = ReturnType<typeof makestore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


export const store = makestore()