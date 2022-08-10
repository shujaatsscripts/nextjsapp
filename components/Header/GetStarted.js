import Icon from '../Common/Icon';
import { Container, Text } from './styles/getstarted.styles';

const GetStarted = ({ mission }) => {
  return (
    <Container mission={mission}>
      <Text mission={mission}>Get Started</Text>
      <Icon
        src={mission ? '/icons/directBlue.svg' : '/icons/direct.svg'}
        bg={mission ? '#fff' : '#4492ee'}
      />
    </Container>
  );
};

export default GetStarted;
