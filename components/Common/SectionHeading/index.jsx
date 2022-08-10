import styled from 'styled-components';

const SectionHeading = ({ text, margin, ...rest }) => {
  return (
    <Heading margin={margin} {...rest}>
      {text}
    </Heading>
  );
};

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fonts.sizes.heading2};
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ProductSans-Bold;
  margin: ${(props) => props.margin && props.margin};
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

export default SectionHeading;
