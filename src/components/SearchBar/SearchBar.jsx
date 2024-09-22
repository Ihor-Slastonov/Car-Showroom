import { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import {
  StyledForm,
  StyledInput,
  SearchButton,
  SearchClearButton,
} from './SearchBar.styled';
import toast from 'react-hot-toast';
import { useVehicle } from '../../utils/hooks/useVehicle';

const SearchBar = () => {
  const { handleSearch } = useVehicle();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    const value = e.currentTarget.value;
    setInputValue(value);
    handleSearch(value.trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value === '') return toast.error('The input field must be non-empty');
    handleSearch(value);
  };

  const handleClearButtonClick = () => {
    setInputValue('');
    handleSearch('');
  };
  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <SearchButton type="submit" onClick={handleFormSubmit}>
        <BiSearch size={24} />
      </SearchButton>

      <SearchClearButton
        type="button"
        onClick={handleClearButtonClick}
        data-words={inputValue !== ''}
      >
        <IoClose size={24} />
      </SearchClearButton>
      <StyledInput
        value={inputValue}
        onChange={handleInputChange}
        type="search"
        placeholder="Search by model"
      />
    </StyledForm>
  );
};

export default SearchBar;
