import Essentials from '@components/Essentials';
import RoadmapScreen from '@screens/Roadmap';

const title = 'Roadmap';
const description = 'Description';

const Roadmap = () => {
  return (
    <Essentials title={title} description={description}>
      <RoadmapScreen />
    </Essentials>
  );
};

export default Roadmap;
