import Button from '../Common/Button';
import Input from '../Common/Input';
import { Wrapper } from './styles/main.styles';

import React, { useState } from 'react';

const Search = () => {
  const [country, setCountry] = useState();
  return (
    <Wrapper>
      <Input
        inputType="search"
        icon="/icons/search.svg"
        placeholder="Type job title/keywords"
      />

      <Input
        inputType="location"
        value={country}
        icon="/icons/location.svg"
        onChange={(val) => setCountry(val)}
      />

      <div>
        <Button btnType="searchBtn">Search</Button>
      </div>
    </Wrapper>
  );
};

export default Search;
