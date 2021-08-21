import Essentials from '@components/Essentials';
import RoadmapScreen from '@screens/Roadmap';

const title = 'Roadmap';
const description = 'Earn Ripple (XRP) and PancakeSwap (Cake) every hour';

const Roadmap = () => {
  return (
    <Essentials title={title} description={description}>
      <RoadmapScreen />
    </Essentials>
  );
};

export default Roadmap;
