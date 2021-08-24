import { Card, Container, Wrapper } from './styles';

type Props = {
  items: any;
};

const PayGrid: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      <Container>
        {items.map((i: any) => (
          <Card key={i.id}>
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default PayGrid;
