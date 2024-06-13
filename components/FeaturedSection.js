import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  margin: 50px 0;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 460px;
`;

const CardTitle = styled.div`
  position: absolute;
  top: 276px;
  color: white;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  width: calc(100% - 20px);
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 1px;
  text-shadow: 0em 0em 0.2em #000000;
`;

const FeatureSection = () => {
  return (
    <Section>
      <Title> - TRADITION. FINESSE. MODERNITÉ. - </Title>
      <Subtitle>La foi de se sentir bien vêtement...</Subtitle>
      <Grid>
        <Card>
          <CardImage src="https://mudaparis.fr/wp-content/uploads/2024/03/ramadan-cadeau.jpg" alt="Idée Cadeau" />
          <CardTitle>JABADOR</CardTitle>
        </Card>
        <Card>
          <CardImage src="https://mudaparis.fr/wp-content/uploads/2024/03/ramadan-cadeau.jpg" alt="Collection Homme" />
          <CardTitle>CAFTAN</CardTitle>
        </Card>
        <Card>
          <CardImage src="https://mudaparis.fr/wp-content/uploads/2024/03/ramadan-cadeau.jpg" alt="Collection Enfant" />
          <CardTitle>GRENOUILLIERE</CardTitle>
        </Card>
      </Grid>
    </Section>
  );
};

export default FeatureSection;