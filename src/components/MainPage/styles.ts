"use client";

import styled from "styled-components";
import { DARK_DRAY } from "@/constants";

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 60px;
`;
export const PageTitle = styled.h1`
  font-size: 50px;
  font-family: inherit;
  font-weight: 300;

  @media (max-width: 980px) {
    font-size: 40px;
  }
`;

export const PageSubTitle = styled.p`
  font-size: 20px;
  font-family: inherit;
  font-weight: 400;
`;

export const WalletContainer = styled.div`
  width: 100%;
  margin-top: 32px;
`;
export const WalletTitle = styled.div`
  font-size: 16px;
  font-weight: 40;
  margin-bottom: 8px;
  font-family: inherit;
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid ${DARK_DRAY};
  position: relative;
  width: 100%;
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${DARK_DRAY};
  margin: 10px 0;
`;

export const SelectedCurrency = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  padding: 0 30px;
  width: 150px;
  overflow: hidden;
  max-height: 50px;
  gap: 12px;
  cursor: pointer;
`;

export const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: end;
    gap: 16px;
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 32px;
  @media (max-width: 980px) {
    flex-direction: column;
    gap: 16px;
  }
`;
