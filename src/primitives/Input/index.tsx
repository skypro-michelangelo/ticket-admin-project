import React from 'react';
import { FC } from 'react';

import { StyledInput } from './styles';

type Props = {
  name?: string;
  error?: boolean;
  type?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({ value, name, error, type, onChange, children }) => {
  return (
    <StyledInput value={value} name={name} error={error} type={type} onChange={onChange}>
      {children}
    </StyledInput>
  );
};

export default Input;
