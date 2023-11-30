import { Currency } from "@/api/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchCurrencies,
  fetchEstimatedExchangeAmount,
  fetchMinimalExchangeAmount,
} from "@/store/actions/currenciesActions";

type RootState = {
  currencies: Currency[];
  firstCurrency: Currency | null;
  secondCurrency: Currency | null;
  isLoading: boolean;
  estimatedExchangeAmount: string;
  minimalExchangeAmount: number;
};

const initialState: RootState = {
  currencies: [],
  firstCurrency: null,
  secondCurrency: null,
  isLoading: false,
  estimatedExchangeAmount: "...",
  minimalExchangeAmount: 0,
};

const currenciesSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setFirstCurrency(state, action: PayloadAction<Currency>) {
      state.firstCurrency = action.payload;
    },
    setSecondCurrency(state, action: PayloadAction<Currency>) {
      state.firstCurrency = action.payload;
    },
    swapCurrencies(state) {
      const temp = state.firstCurrency;
      state.firstCurrency = state.secondCurrency;
      state.secondCurrency = temp;
    },
    setEstimatedExchangeAmount(state, action: PayloadAction<string>) {
      state.estimatedExchangeAmount = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.fulfilled, (state, action) => {
      state.currencies = action.payload;
      state.firstCurrency = action.payload[0];
      state.secondCurrency = action.payload[1];
      state.isLoading = false;
    });
    builder.addCase(fetchCurrencies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEstimatedExchangeAmount.fulfilled, (state, action) => {
      state.estimatedExchangeAmount = action.payload.toAmount.toString();
    });
    builder.addCase(fetchMinimalExchangeAmount.fulfilled, (state, action) => {
      state.minimalExchangeAmount = action.payload.minAmount;
    });
  },
});

export const { swapCurrencies, setSecondCurrency, setEstimatedExchangeAmount } =
  currenciesSlice.actions;

export const CurrenciesReducer = currenciesSlice.reducer;
