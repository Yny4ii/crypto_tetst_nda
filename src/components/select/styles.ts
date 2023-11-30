"use client";

import styled from "styled-components";
import { DARK_TURQUOISE, GRAY, LIGHT_BLUE, LIGHT_TURQUOISE } from "@/constants";

export const SelectContainer = styled.div`
  border-radius: 5px;
  border: 1px solid ${LIGHT_TURQUOISE};
  width: calc(100% + 2px);
  max-height: 194px;
  overflow-y: scroll;
  background-color: ${GRAY};
  position: absolute;
  top: -1px;
  right: -1px;
  z-index: 6;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 13px 16px;
  cursor: pointer;
  gap: 16px;

  &:hover {
    background-color: ${LIGHT_BLUE};
  }
`;

export const ShortName = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 400;
`;

export const LongName = styled.div`
  font-family: inherit;
  font-size: 16px;
  color: ${DARK_TURQUOISE};
`;

export const NothingContainer = styled.div`
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
