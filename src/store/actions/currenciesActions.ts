import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrencies,
  getEstimatedExchangeAmount,
  getMinimalExchangeAmount,
} from "@/api/api";

export const fetchCurrencies = createAsyncThunk(
  "currencies/fetchCurrencies",
  async () => {
    return await getCurrencies();
  },
);
export const fetchEstimatedExchangeAmount = createAsyncThunk(
  "currencies/fetchEstimatedExchangeAmount",
  async ({
    amount,
    from,
    to,
  }: {
    amount: string;
    from: string;
    to: string;
  }) => {
    return await getEstimatedExchangeAmount(amount, from, to);
  },
);
export const fetchMinimalExchangeAmount = createAsyncThunk(
  "currencies/fetchMinimalExchangeAmount",
  async ({ from, to }: { from: string; to: string }) => {
    return await getMinimalExchangeAmount(from, to);
  },
);
