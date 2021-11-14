import React from 'react';
import { FC } from 'react';

import { StyledButton } from './styles';

type Props = {
  variant?: 'contained' | 'outlined' | 'text' | undefined;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ onClick, variant, children }) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;
