"use client";

import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: none;
  background-color: unset;

  @media (max-width: 980px) {
    svg {
      transform: rotate(90deg);
    }
  }
`;
