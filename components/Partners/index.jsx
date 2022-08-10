import {
  BackgroundRow,
  StyledText,
  StyledColumn,
  StyledPartnerImage,
  StyledImagesRow,
  StyledImagesCol,
} from './styles/main.styles';
import Heading from '../Common/SectionHeading';

const Main = () => {
  return (
    <>
      <div id="partners"></div>
      <br />
      <BackgroundRow justify="center">
        <StyledColumn xs={22} md={20} xl={19}>
          <Heading text="Our Partners" />
          <br />
          <StyledText>
            We believe in our clients growth as the most primary Goal. Align our
            goals with client goals. Remarkable results achieved by the
            customers that Trust 3cix.
          </StyledText>
          <br />
          <StyledImagesRow justify="space-between">
            <StyledImagesCol xs={24}>
              <StyledPartnerImage src="/cvLib.jpg" />
              <StyledPartnerImage src="/netsLogo.png" />
              {/* <StyledPartnerImage src="/icons/shopifyColored.svg" />
            <StyledPartnerImage src="/icons/shopifyB&W.svg" />
            <StyledPartnerImage src="/icons/shopifyB&W.svg" />
            <StyledPartnerImage src="/icons/shopifyB&W.svg" /> */}
            </StyledImagesCol>
          </StyledImagesRow>
        </StyledColumn>
      </BackgroundRow>
    </>
  );
};

export default Main;
