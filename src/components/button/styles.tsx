import styled from 'styled-components';

import Button from '@mui/material/Button';

export const StyledButton = styled(Button)<{ view: 'primary' | 'secondary' }>`
  && {
    color: white;
    background: ${(props) => (props.view === 'primary' ? 'red' : 'green')};
  }
`;
