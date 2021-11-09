import Button from '@mui/material/Button';

import styled from 'styled-components';

export const StyledButton = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 700;
    background: #434adc;
    width: 100%;
    height: 48px;
    :hover {
      background: #2b32b1;
    }
  }
`;
