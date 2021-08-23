import { Card, Container, IconWrapper, Wrapper } from './styles';

type Props = {
  cards: any;
};

const CardGrid: React.FC<Props> = ({ cards }) => {
  return (
    <Wrapper>
      <Container>
        {cards.map((i: any) => (
          <Card key={i.id}>
            <IconWrapper>{i.icon}</IconWrapper>
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default CardGrid;
