import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  flex-grow: 1;
  margin-right: 1em;
`;

const Input = styled.input`
  border: 1px solid ${props => props.theme.lightGray};
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  font-size: 13pt;
  &.is-invalid {
    outline: 2px solid ${props => props.theme.danger};
  }
`;



const SearchInput = ({ onChange, values, errors }) => {
  return (
    <Label htmlFor="input">
      <Input
        type="text"
        name="ingredient"
        className={`ingredient-input${errors.ingredient ? ' is-invalid' : ''}`}
        placeholder="Enter an ingredient eg. 'peppers'"
        value={values.ingredient}
        onChange={e => onChange(e)}
        onBlur={e => onChange(e)}
      />
    </Label>
  );
};

SearchInput.defaultProps = { onChange: () => {}, values: {}, errors: {} };
export default SearchInput;
