import { FooterInput } from './FooterInput';
import { SearchInput } from './SearchInput';
import styled from 'styled-components';
import { CountrySelect } from './CountrySelect';

const CustomInput = ({ inputType, icon, ...rest }) => {
  const getInput = () => {
    switch (inputType) {
      case 'footerInput':
        return <FooterInput {...rest} />;
      case 'search':
        return (
          <SearchWrapper>
            <img src={icon} />
            <SearchInput {...rest} />
          </SearchWrapper>
        );
      case 'location':
        return (
          <SearchWrapper>
            <img src={icon} alt="" />
            <CountrySelect {...rest} defaultOptionLabel="Location" />
          </SearchWrapper>
        );
      default:
        return <input {...rest} />;
    }
  };
  return <>{getInput()}</>;
};

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export default CustomInput;
