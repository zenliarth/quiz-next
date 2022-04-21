

import { Container, Title } from './styles';

interface QuestionTextProps {
  text: string;
}

function QuestionText({ text }: QuestionTextProps) {
  return (
    <Container>
      <Title>{text}</Title>
    </Container>
  );
};

export default QuestionText;
