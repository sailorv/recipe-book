import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
// import SearchLog from './SearchLog';
import Ingredients from './Ingredients';
import useForm from '../Hooks/useForm';

const SearchFormContainer = styled.div`
  color: ${props => props.theme.dark};
`;

const Form = styled.form`
  margin: 1rem 0;
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.primaryColor};
  border: 0;
  border-radius: 20px;
  padding: 15px 25px;
`;

const ErrorMessage = styled.div`
  background: ${props => props.theme.danger};
  color: #fff;
  width: 100%;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.1rem;
  text-align: center;
`;

const SearchForm = ({ searches, setSearches }) => {
  const addIngredient = ingredient => {
    const lastSearch = searches[searches.length - 1] || [];
    setSearches([...searches, [...lastSearch, ingredient]]);
  };

  const validateIngredientForm = values => {
    const errors = {};
    if (values.ingredient.trim().length < 3) {
      errors.ingredient = 'Ingredients must be at least 3 characters long';
    }
    return errors;
  };

  const { onChange, onSubmit, values, errors } = useForm(
    () => addIngredient(values.ingredient),
    { ingredient: '' },
    validateIngredientForm
  );

  return (
    <SearchFormContainer>
      <Form onSubmit={e => onSubmit(e)}>
        <SearchInput onChange={onChange} values={values} errors={errors} />
        <Button className="btn"><i className="fas fa-search"></i></Button>
      </Form>

      {errors.ingredient && (
        <ErrorMessage className="invalid-message">
          {errors.ingredient}
        </ErrorMessage>
      )}

      <Ingredients searches={searches} setSearches={setSearches} />
{/*      {searches.length > 0 && (
        <SearchLog searches={searches} setSearches={setSearches} />
      )}
*/}
    </SearchFormContainer>
  );
};

SearchForm.defaultProps = { searches: [], setSearches: () => {} };
export default SearchForm;
