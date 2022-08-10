import { Box, Heading, StyledText } from './styles/job.styles';

const JobSingle = ({ icon, heading, text, shadow }) => {
  return (
    <Box shadow={shadow}>
      <img src={icon} width="80" />
      <Heading>{heading}</Heading>
      <StyledText>{text}</StyledText>
    </Box>
  );
};

export default JobSingle;
