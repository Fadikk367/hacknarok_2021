import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const RequestsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardHeader = styled(Typography)`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.8rem;
    color: grey;
  }
`;