import React, { FC } from 'react';

import { StyledButton } from './styles';

const Button: FC<{ view: 'primary' | 'secondary' }> = ({ children, view }) => {
  return <StyledButton view={view}> {children} </StyledButton>;
};

export default Button;
