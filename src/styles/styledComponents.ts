import styled from 'styled-components';
import { FlexProps } from 'index.interface';

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ column, reverse }) =>
    column
      ? reverse
        ? 'column-reverse'
        : 'column'
      : reverse
      ? 'row-reverse'
      : 'row'};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `margin: ${margin}`};
  ${({ marginTop }) => marginTop && `margin-top: ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;

  button {
    border-radius: 0 0 20px 20px;
  }

  p {
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
  }

  img {
    height: 150px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7em;
`;
