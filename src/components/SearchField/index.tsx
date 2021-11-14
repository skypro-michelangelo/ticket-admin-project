import { FC } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton/IconButton';

import { StyledTextField } from './styles';

type Props = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export const SearchField: FC<Props> = ({ onChange }) => {
  return (
    <StyledTextField
      onChange={onChange}
      label="Найти"
      InputProps={{
        endAdornment: (
          <IconButton>
            <SearchIcon />
          </IconButton>
        )
      }}
    />
  );
};
