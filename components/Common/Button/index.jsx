import { Button } from 'antd';
import { FooterBtn } from './FooterBtn';
import { SearchBtn } from './SearchBtn';

const CustomButton = ({ btnType, ...rest }) => {
  const getButton = () => {
    switch (btnType) {
      case 'footerBtn':
        return <FooterBtn {...rest} />;
      case 'searchBtn':
        return <SearchBtn {...rest} />;
      default:
        return <Button {...rest} />;
    }
  };
  return <>{getButton()}</>;
};

export default CustomButton;
