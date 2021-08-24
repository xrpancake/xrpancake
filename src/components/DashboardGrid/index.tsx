import { Card, Container, IconWrapper, Wrapper } from './styles';

type Props = {
  items: any;
};

const DashboardGrid: React.FC<Props> = ({ items }) => {
  return (
    <Wrapper>
      <Container>
        {items.map((i: any) => (
          <Card key={i.id}>
            <IconWrapper>{i.icon}</IconWrapper>
            <div className="text">
              <h2>{i.title}</h2>
              <p>{i.value}</p>
            </div>
          </Card>
        ))}
      </Container>
    </Wrapper>
  );
};

export default DashboardGrid;
