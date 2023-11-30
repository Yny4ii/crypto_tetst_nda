"use client";

import styled from "styled-components";
import { BLUE, DARK_BLUE, WHITE } from "@/constants";

export const ButtonContainer = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  padding: 15px 59px;
  border-radius: 5px;
  background-color: ${BLUE};
  color: ${WHITE};
  font-family: inherit;
  border: none;
  font-weight: 700;
  max-width: 205px;
  width: 100%;

  &:active {
    background-color: ${DARK_BLUE};
  }

  @media (max-width: 980px) {
    max-width: 100%;
  }
`;
